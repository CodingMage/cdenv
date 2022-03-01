import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  QueryCache,
} from "react-query";
import GlobalStyles from "../components/GlobalStyles";
import "../styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./500";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
const config = {
  color: `#01E4F0`,
  showOnShallow: true,
  height: 2.2,
};
function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error, query) => {
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            if (query.state.data !== undefined) {
              // toast.error(`Something went wrong: ${error.message}`);
              console.log(error);
            }
          },
        }),
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onError={(error, errorInfo) => {
                console.log("error500", error);
              }}
              onReset={reset}
              FallbackComponent={ErrorPage}
            >
              <Hydrate state={pageProps.dehydratedState}>
                <GlobalStyles />
                <NextNProgress {...config} options={{ showSpinner: false }} />

                <Component {...pageProps} />
                <Toaster position="top-right" />
              </Hydrate>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
