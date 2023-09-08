import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>



        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <div className='container'>
                <div className='first'>
                    <Typography sx={{ color: "white" }}>
                        Nemesis store
                    </Typography>
                </div>
                <div className='second'>
                    <Button sx={{ color: "white" }}>
                        Home
                    </Button>
                    <Button sx={{ color: "white" }}>
                        Categorias
                    </Button>
                    <Button sx={{ color: "white" }}>
                        Productos
                    </Button>
                    <CartWidget />
                </div>
            </div>
        </Toolbar>


    </AppBar>);
}

export default Navbar;

