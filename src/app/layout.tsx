import "@/resource/style/global.css";

import { ReactNode } from "react";

import Header from "@/component/ui/header";
import ClientProvider from "@/component/_common/client-provider";

export const metadata = {
  title: "r_11 blog",
  description: "rrrrrrrrrrrocky 블로그입니다.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  const header = <Header />;

  // const footer = (
  //   <footer>
  //     <p>FOOTER</p>
  //   </footer>
  // );
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          name="viewport"
        />
        <meta content="no-cache" httpEquiv="Pragma" />
        <meta
          content="no-cache, no-store, must-revalidate"
          httpEquiv="cache-control"
        />
      </head>

      <body className="relative">
        <ClientProvider>
          {header}
          {children}
          {/* {footer} */}
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
