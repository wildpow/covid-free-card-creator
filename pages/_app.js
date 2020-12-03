import "tailwindcss/tailwind.css";
import { Flipper } from "react-flip-toolkit";
import "../styles/globals.css";
import { FormProvider } from "../components/formCtx";

function MyApp({ Component, pageProps, router }) {
  return (
    <FormProvider>
      <Flipper flipKey={router.asPath}>
        <Component {...pageProps} />
      </Flipper>
    </FormProvider>
  );
}

export default MyApp;
