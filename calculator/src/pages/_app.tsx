import { type AppType } from "next/dist/shared/lib/utils";

import "chesticles/styles/globals.css";
import { CalculatorLayout } from "chesticles/components/calculatorLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return<>
  <CalculatorLayout></CalculatorLayout>
   <Component {...pageProps} /></>;
};

export default MyApp;
