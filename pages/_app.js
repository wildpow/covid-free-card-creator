import "tailwindcss/tailwind.css";
import { Flipper, Flipped } from "react-flip-toolkit";
import "../styles/globals.css";
import { FormProvider } from "../components/formCtx";

function MyApp({ Component, pageProps, router }) {
  return (
    <FormProvider>
      <Flipper flipKey={router.asPath}>
        <Flipped flipId="page" spring="veryGentle">
          <div>
            <Component {...pageProps} />
          </div>
        </Flipped>
      </Flipper>
    </FormProvider>
  );
}

export default MyApp;
