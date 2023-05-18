import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import overrides from "./styles/theme";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import RouteDetails from "./pages/routeDetails/RouteDetails";
import "../src/assets/fonts/fonts.css";

function App() {
    return (
        <>
            <ChakraProvider theme={overrides}>
                <Box
                    bg="deepNavy"
                    minH="100vh"
                    minW="100vw"
                    boxSizing="border-box"
                    overflow="hidden"
                    px="24px"
                    py="24px"
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/home/user"
                                element={<UserProfile />}
                            />
                            <Route
                                path="/home/:id"
                                element={<RouteDetails />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Box>
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default App;
