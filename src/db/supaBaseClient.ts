import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient;

if (
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY != "undefined" &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL != "undefined"
) {
  let supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
} else {
  console.log(
    "environement variables errors detected, contact customer support"
  );
}

export { supabaseClient };
