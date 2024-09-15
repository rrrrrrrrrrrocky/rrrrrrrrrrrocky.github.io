"use client";

import { useQuery } from "@tanstack/react-query";
import { createSupabaseClient } from "../util/supabase-client-utils";

export const useGetCheckSession = () => {
  return useQuery({
    queryKey: ["useCheckSession"],
    queryFn: async () => {
      const supabase = createSupabaseClient();

      let userData;
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (user) {
        userData = user;
        console.log("userData >>", userData);
      }

      return { userData, sessionError: error };
    },
  });
};
