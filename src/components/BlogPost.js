import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function Blogsummary({ header, summary, subheader, content }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Grid item>
			<Card sx={{ width: 500 }}>
				<CardHeader title={header} subheader={subheader} />
				<CardContent>
					<Typography variant='body2'>{summary}</Typography>
				</CardContent>
				{content && (
					<>
						<CardActions disableSpacing>
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography variant='body1'>
									{content}
								</Typography>
							</CardContent>
						</Collapse>
					</>
				)}
			</Card>
		</Grid>
	);
}
