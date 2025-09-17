import {useEffect, useState} from "react";
import type {Product} from "../models/product.ts";
import Catalog from "../../features/catalog/Catalog.tsx";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./NavBar.tsx";

function App() {

    const [products, setProducts] = useState<Product[]>([]);
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

    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


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
                    <Catalog products={products}/>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App
