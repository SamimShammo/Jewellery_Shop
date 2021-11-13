import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import logo from '../../../img/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Reviews from '../../Home/Reviews/Reviews';
import PrivateDashboard from '../PrivateDashboard/PrivateDashboard';
import Notfound from '../../Notfound/Notfound';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PrivateAdmin from '../PrivateAdmin/PrivateAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)" }}>
                <img src={logo} alt="" className="img-fluid" />
            </Toolbar>
            <Divider />
            <Box sx={{ ml: 5, mt: 2 }}>
                {admin ? <Box><Box sx={{ mb: 1 }}>
                    <Link to={`${url}/manageProducts`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600 }} >Manage Products</Link>
                </Box>
                    <Box sx={{ mb: 1 }}>
                        <Link to={`${url}/makeAdmin`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600 }} >Make Admin</Link>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                        <Link to={`${url}/manageAllOrder`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600 }} >Manage All Order </Link>
                    </Box>
                </Box> : <Box>
                    <Box sx={{ mb: 1 }}>
                        <Link to={`${url}/myOrder`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600, Dashboard }} >My Order</Link>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                        <Link to={`${url}/reviews`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600, }} >Review</Link>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                        <Link to={`${url}/pay`} style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600 }} >Pay</Link>
                    </Box>
                </Box>}

                <Box sx={{ mb: 1, mt: 40 }}>
                    {user?.email && <Button style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600 }} onClick={logOut}>Logout</Button>}
                </Box>
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar

                    position="fixed"
                    sx={{
                        backgroundColor: 'white',
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton


                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, color: 'black', display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            <Link to="/" style={{ color: 'black', fontSize: "20px ", textDecoration: 'none', fontWeight: 600, Dashboard }} >Go Back Home</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Box>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <PrivateDashboard exact path={`${path}/myOrder`}>
                                <MyOrder></MyOrder>
                            </PrivateDashboard>
                            <PrivateDashboard exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivateDashboard>
                            <PrivateDashboard exact path={`${path}/reviews`}>
                                <Reviews></Reviews>
                            </PrivateDashboard>
                            <PrivateAdmin path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </PrivateAdmin>
                            <PrivateAdmin path={`${path}/manageAllOrder`}>
                                <ManageAllOrder></ManageAllOrder>
                            </PrivateAdmin>

                            <PrivateAdmin exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </PrivateAdmin>
                            <Route exact path={`${path}*`}>
                                <Notfound></Notfound>
                            </Route>
                        </Switch>
                    </Box>
                </Box>
            </Box>

        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
