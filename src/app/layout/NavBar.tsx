import {AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography} from "@mui/material";
import {DarkMode, LightMode, ShoppingCart} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../store/store.ts";

type Props = {
    darkMode: boolean
    toggleDarkMode: () => void
}

const midLinks = [
    {title: "catalog", path: "/catalog"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"}
]

const rightLinks = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"},
]

const navStyles = {
    color: "inherit",
    typography: "h6",
    textDecoration: "none",
    '&:hover': {
        color: "grey.500"
    },
    '&.active': {
        color: "#baecf9"
    }
}

function NavBar({darkMode, toggleDarkMode}: Props) {
const {isLoading} = useAppSelector(state => state.ui)

    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography component={NavLink} sx={navStyles} to={"/"} variant="h6">DOTRE STORE</Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {darkMode ? <DarkMode/> : <LightMode sx={{color: "yellow"}}/>}
                    </IconButton>
                </Box>
                <List sx={{display: "flex"}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box sx={{display: "flex", alignItems: "center"}}>
                    <IconButton size={"large"} sx={{color: "inherit"}}>
                        <Badge badgeContent={4} color={"secondary"}>
                            <ShoppingCart></ShoppingCart>
                        </Badge>
                    </IconButton>
                    <List sx={{display: "flex"}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
            {isLoading && (
                <Box sx={{width:'100%'}}>
                    <LinearProgress color={"secondary"}/>
                </Box>
            )}
        </AppBar>
    );
}

export default NavBar;