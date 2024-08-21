import { createSupabaseServer } from "@/script/util/supabase-utils";
import { redirect } from "next/navigation";

const WriteLayout = async ({ children }: { children: React.ReactNode }) => {
  // setSession(session);

  // if (!user) {
  //   return redirect("/login");
  // }

  return <>{children}</>;
};

export default WriteLayout;
