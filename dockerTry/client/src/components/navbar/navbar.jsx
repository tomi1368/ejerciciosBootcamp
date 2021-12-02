import {NavLink} from "react-router-dom"
import {AppBar,Toolbar,Button,Typography,IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import "./style/navbar.css"


const NavBar = ()=>{
    return(
    <AppBar position="static"> {/* Me pone los elementos en column */}
        <Toolbar> {/* Me pone los elementos en row */}
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> {/* Con el flexGrow me empuja para la derecha */}
            News
          </Typography>
          <NavLink to="/" className="link">Inicio</NavLink>
          <NavLink to="/">Products</NavLink>
          <Button></Button>
        </Toolbar>
    </AppBar>
    )
}

export default NavBar