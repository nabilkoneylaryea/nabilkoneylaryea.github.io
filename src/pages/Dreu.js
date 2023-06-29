import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import BlogPost from '../components/BlogPost';

const posts = [
	{
		header: 'Week 1',
		subheader: 'June 28, 2023',
		summary: 'My first week!',
	},
	{
		header: 'Week 2',
		subheader: 'June 28, 2023',
		summary: 'Getting started on the project and XR Access Conference',
	},
	{
		header: 'Week 3',
		subheader: 'June 28, 2023',
		summary: 'Relearning how to read and ROS',
	},
	{
		header: 'Week 4',
		subheader: 'June 28, 2023',
		summary: 'Ramping up on ROS',
	},
	{
		header: 'Week 5',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Week 6',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Week 7',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Week 8',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Week 9',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Week 10',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
	{
		header: 'Final Report',
		subheader: 'TBD',
		summary: 'Check back later!',
	},
];

export default function Dreu() {
	return (
		<Box>
			<Box mb={2}>
				<Typography variant='h5' gutterBottom>
					About My Mentor
				</Typography>
				<Typography variant='body1' textAlign={'center'} gutterBottom>
					<Typography>
						Angelique Taylor - Cornell (Information Science)
					</Typography>
					<Typography>Human Robot Interaction</Typography>
					<Typography>
						Click{' '}
						<a
							href='https://www.angeliquemtaylor.com'
							target='_blank'
						>
							here
						</a>{' '}
						for her website!
					</Typography>
				</Typography>
			</Box>
			<Divider orientation='horizontal' variant='middle' sx={{ m: 5 }} />
			<Box>
				<Typography variant='h5' gutterBottom>
					About My Project
				</Typography>
				<Typography variant='body1' textAlign={'center'} gutterBottom>
					This summer I'll be working on creating a computer vision
					algorithm that can classify group activity in a medical
					context. This will involve me learning quite a bit. I will
					be learning about Robot Operating System and how to collect
					data from the attached depth cameras . I will learn about
					the current state of the art in group activity recognition.
					Of course, I will get better at reading literature and
					writing papers. There will also be opportunities for me to
					learn how to 3D print and use other tools in Cornell Tech's
					MakerLab! The end goal for my project will be to have a
					machine learning pipeline that can learn visual
					representations from video data collected in a medical
					context.
				</Typography>
			</Box>
			<Divider orientation='horizontal' variant='middle' sx={{ m: 5 }} />
			<Box>
				<Typography variant='h5' mb={3}>
					Weekly Journal
				</Typography>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					justifyContent={'center'}
				>
					{posts.map((post) => {
						return (
							<BlogPost
								header={post.header}
								summary={post.summary}
								subheader={post.subheader}
							/>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
}
