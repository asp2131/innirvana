// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType, AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";
import { IsSsrMobileContext } from "../utils/mobileContext";

type MyAppProps = AppProps & { isSsrMobile?: boolean };

const MyApp: AppType<MyAppProps> = ({ Component, pageProps }) => {
  const { isSsrMobile = false, ...rest } = pageProps;
  if (isSsrMobile === null) return null;
  return (
    <IsSsrMobileContext.Provider value={isSsrMobile}>
      <ClerkProvider {...rest}>
        <Component {...rest} />
      </ClerkProvider>
    </IsSsrMobileContext.Provider>
  );
};

export default trpc.withTRPC(MyApp);
