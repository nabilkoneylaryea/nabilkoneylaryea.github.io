import React from 'react';
import {
	Box,
	IconButton,
	Button,
	Stack,
	Tooltip,
	Divider,
	Fab,
	Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const ContactButtons = () => {
	const mail = () => {
		window.open('mailto:nkoney14@gmail.com');
	};
	const github = () => {
		window.open('https://github.com/nabilkoneylaryea');
	};
	const linkedin = () => {
		window.open('https://linkedin.com/in/nabilkoneylaryea');
	};
	return (
		<Box>
			<Tooltip title={'Email: nkoney14@gmail.com'}>
				<IconButton onClick={mail}>
					<FontAwesomeIcon icon={faEnvelope} size='lg' />
				</IconButton>
			</Tooltip>
			<Tooltip title={'GitHub: nabilkoneylaryea'}>
				<IconButton onClick={github}>
					<FontAwesomeIcon icon={faGithub} size='lg' />
				</IconButton>
			</Tooltip>
			<Tooltip title={'LinkedIn: nabilkoneylaryea'}>
				<IconButton onClick={linkedin}>
					<FontAwesomeIcon icon={faLinkedin} size='lg' />
				</IconButton>
			</Tooltip>
		</Box>
	);
};
const ResumeButton = () => {
	const resume = () => {
		window.open('https://flowcv.com/resume/knth85dn6u');
	};
	return (
		<Fab onClick={resume} variant='extended' color='secondary'>
			<Typography mr={2}>Resume</Typography>
			<FontAwesomeIcon icon={faFile} size='lg' />
		</Fab>
	);
};

function Contact() {
	return (
		<>
			<Box p={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
				<Stack direction={'row'} spacing={3} justifyContent={'center'}>
					<ContactButtons />
					<Divider orientation='vertical' variant='middle' flexItem />
					<ResumeButton />
				</Stack>
			</Box>
			<Box p={1} sx={{ display: { xs: 'block', sm: 'none' } }}>
				<Stack
					direction={'column'}
					spacing={3}
					justifyContent={'center'}
				>
					<ContactButtons />
					<Divider
						orientation='horizontal'
						variant='middle'
						flexItem
					/>
					<ResumeButton />
				</Stack>
			</Box>
		</>
	);
}

export default Contact;
