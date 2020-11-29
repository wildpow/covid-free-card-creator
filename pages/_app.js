import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { FormProvider } from "../components/formCtx";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
