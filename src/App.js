import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes/Theme";
import GlobalStyle from "./globalStyles";
import Main from "./pages/Main";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import { useMoralis } from "react-moralis";

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated,isInitializing,isAuthenticating, isWeb3EnableLoading,chainId,network } =
  useMoralis();

useMemo(() => {

  async function checkConnection(params) {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading && !isInitializing && !isAuthenticating){
       await enableWeb3({ provider: connectorId });
    }else if(!isWeb3Enabled && !isWeb3EnableLoading && !isInitializing && !isAuthenticating){
      await enableWeb3();
    }
  }
 try {
  checkConnection();
 } catch (error) {
  
 }

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isAuthenticated, isWeb3Enabled,chainId,network]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
         <Main/>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
