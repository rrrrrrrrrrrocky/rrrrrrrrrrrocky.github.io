import "@/resource/style/global.css";

import { ReactNode } from "react";

import Header from "@/component/ui/header";

export const metadata = {
  title: "r_11 blog",
  description: "rrrrrrrrrrrocky 블로그입니다.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  const header = <Header />;

  const footer = (
    <footer>
      <p>FOOTER</p>
    </footer>
  );
  return (
    <html lang="en">
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
        {/* {header} */}
        <Header />
        {children}
        {footer}
      </body>
    </html>
  );
};

export default RootLayout;
