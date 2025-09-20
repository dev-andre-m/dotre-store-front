import {useState} from "react";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router-dom";

function App() {

    const [darkMode, setDarkMode] = useState<boolean>(true);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    const palletType = darkMode ? "dark" : "light";

    const theme = createTheme({
        palette: {
            mode: palletType,
            background: {
                default: (palletType === "light") ? "#eaeaea" : "#121212"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <CssBaseline/>
            <Box
                sx={{
                    minHeight: "100vh",
                    background: (darkMode)
                        ? "radial-gradient(circle, #1e3aBa, #111B27)"
                        : "radial-gradient(circle, #baecf9, #f0f9ff)",
                    py: 6
                }}
            >
                <Container maxWidth="xl" sx={{mt: 8}}>
                    <Outlet/>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App
