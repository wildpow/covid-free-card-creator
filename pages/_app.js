import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { FormProvider } from "../components/formCtx";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormProvider>
  );
}

export default MyApp;
