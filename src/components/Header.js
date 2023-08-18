import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import Contact from './Contact';

import { NavLink } from 'react-router-dom';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

const drawerWidth = 240;
const navItems = [
	{ route: '', name: 'About' },
	{ route: 'dreu', name: 'DREU Blog' },
];

export default function Header(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				Menu
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<NavLink
						to={'/' + item.route}
						style={{ color: 'inherit', 'text-decoration': 'none' }}
					>
						<ListItem key={item.route} disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={item.name} />
							</ListItemButton>
						</ListItem>
					</NavLink>
				))}
				<Contact />
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<HideOnScroll>
				<AppBar component='nav'>
					<Toolbar>
						<Box
							display={'flex'}
							flexDirection={'row'}
							alignItems={'center'}
							flexGrow={1}
							p={2}
						>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant='h5'
								component='div'
								sx={{
									display: { xs: 'block' },
								}}
							>
								NABIL KONEY-LARYEA
							</Typography>
							<Box
								ml={5}
								flexGrow={1}
								justifyContent={'start'}
								sx={{
									display: { xs: 'none', sm: 'flex' },
								}}
							>
								{navItems.map((item) => (
									<NavLink
										to={'/' + item.route}
										style={{ 'text-decoration': 'none' }}
									>
										<Button
											key={item.route}
											sx={{ color: '#fff' }}
										>
											{item.name}
										</Button>
									</NavLink>
								))}
							</Box>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<Contact />
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>

			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>

			<Box component='main' sx={{ p: 4 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}
