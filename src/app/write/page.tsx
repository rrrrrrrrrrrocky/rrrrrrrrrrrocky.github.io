import dynamic from "next/dynamic";

const Write = dynamic(() => import("@/component/write/_write-container"), {
  loading: () => <p>dynamic Loading...</p>,
  ssr: false,
});

const WritePage = async () => {
  // const supabase = createSupabaseServer();

  // let userData;
  // const {
  //   data: { user },
  //   error,
  // } = await supabase.auth.getUser();
  // if (user) {
  //   userData = user;
  //   console.log("userData >>", userData);
  // }

  // const { userData, error } = await getUserData();
  // console.log({ userData, error });

  // if (!userData) {
  //   return <div>loading...</div>;
  // } else if (error) {
  //   return <div>{JSON.stringify(error)}</div>;
  // } else {
  //   return <Write userData={userData} />;
  // }

  return <Write />;
};

export default WritePage;

// function encodedRedirect(
//   type: "error" | "success",
//   path: string,
//   message: string
// ) {
//   return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
// }
