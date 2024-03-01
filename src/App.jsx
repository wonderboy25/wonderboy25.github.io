import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Landing from "./Pages/Landing.jsx";
import { FooterSection } from "./components/FooterSection/FooterSection.jsx";
import BridgePage from "./Pages/Bridge.jsx";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./utils/wagmiSetup.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/bridge", element: <BridgePage /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <VStack bgColor={"#0F0F0F"}>
            <ToastContainer />
            <Header />
            <RouterProvider router={router} />
            <FooterSection />
          </VStack>
        </QueryClientProvider>
      </WagmiProvider >
    </>
  );
}

export default App;
