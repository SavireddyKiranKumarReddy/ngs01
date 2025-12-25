import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get client IP from headers
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwarded?.split(",")[0]?.trim() || realIp || "unknown";

    // Create a hash of the IP for privacy
    const encoder = new TextEncoder();
    const data = encoder.encode(clientIp + "nxtgensec-salt");
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const ipHash = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    // Try to insert or update the visitor
    const { error: upsertError } = await supabase
      .from("visitors")
      .upsert(
        { ip_hash: ipHash, last_visit: new Date().toISOString() },
        { onConflict: "ip_hash" }
      );

    if (upsertError) {
      console.error("Upsert error:", upsertError);
    }

    // Get total unique visitor count
    const { count, error: countError } = await supabase
      .from("visitors")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("Count error:", countError);
      return new Response(
        JSON.stringify({ count: 0, error: countError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Visitor tracked, total count:", count);

    return new Response(
      JSON.stringify({ count: count || 0 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage, count: 0 }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
