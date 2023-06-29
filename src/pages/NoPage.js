import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Box, Typography } from '@mui/material';

function NoPage() {
	return (
		<Box>
			<FontAwesomeIcon icon={faHeartBroken} fontSize={250} />
			<Typography variant='h2'>
				This is not the page you're looking for ...
			</Typography>
		</Box>
	);
}

export default NoPage;
