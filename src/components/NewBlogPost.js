import * as React from 'react';
import {
	Box,
	Container,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
	Grid,
	Backdrop,
	IconButton,
	Paper,
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dayjs from 'dayjs';

export default function Blogsummary({ title, date, summary, post }) {
	const [open, setOpen] = React.useState(false);
	const [text, setText] = React.useState(false);

	React.useEffect(() => {
		fetch(post)
			.then((r) => r.text())
			.then((text) => {
				setText(text);
			});
	});

	const handleClick = () => {
		setOpen(!open);
	};

	const shortDate = dayjs(date).format('MM/DD/YYYY');

	return (
		<Grid item>
			<Card sx={{ width: 500 }}>
				<CardHeader title={title} subheader={shortDate} />
				<CardContent>
					<Container>
						<Typography noWrap variant='body2'>
							{text}
						</Typography>
					</Container>
				</CardContent>
				{post && (
					<CardActions disableSpacing>
						<Box
							display={'flex'}
							justifyContent={'end'}
							width={'100%'}
						>
							<IconButton onClick={handleClick}>
								<OpenInNewIcon />
							</IconButton>
						</Box>
					</CardActions>
				)}
			</Card>
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
				onClick={handleClick}
			>
				<Container>
					<Paper>
						<Box p={10}>
							<Typography align='left'>
								<ReactMarkdown>{text}</ReactMarkdown>
							</Typography>
						</Box>
					</Paper>
				</Container>
			</Backdrop>
		</Grid>
	);
}
