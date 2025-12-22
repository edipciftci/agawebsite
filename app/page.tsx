import { createClient } from "@/lib/supabase/client";

export default async function TestSupabasePage() {
  const supabase = createClient();

  // This doesn't need any tables to exist; it just checks connectivity/auth status
  const { data, error } = await supabase.auth.getSession();

  return (
    <main style={{ padding: 24 }}>
      <h1>Supabase test</h1>
      <pre>{JSON.stringify({ hasSession: !!data?.session, error }, null, 2)}</pre>
    </main>
  );
}
