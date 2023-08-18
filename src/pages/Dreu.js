import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import BlogPost from '../components/BlogPost';
import Report from '../pages/Report.pdf';

const posts = [
	{
		header: 'Week 1',
		subheader: 'June 28, 2023',
		summary: 'My first week!',
		content:
			"What can I say! My first week was crazy. I landed in New York the day before my internship started so I really didn't know what to expect. Once I figured out where I was going, I arrived on campus and felt like I just dove in. I spent my first couple of days doing IRB trainings and then after that I started reading up on machine learning to prepare for my project.",
	},
	{
		header: 'Week 2',
		subheader: 'June 28, 2023',
		summary: 'Getting started on the project and XR Access Conference',
		content:
			"This week was when things really started to feel serious. I started doing literature reviews from the first day this week. I can definitely say I felt like I knew nothing! Luckily Dr. Taylor guided me towards good conferences to look at and keywords to search up. Even though I was in the weeds I slowly began understanding things. Towards the end of the week I was fortunate enough to attend a confrence on accessibility in Mixed Reality. Over the course of two days I was able to listen to several knowledgable speakers talk about different movements to include people of varying ability in the Mixed Reality Experience. These were genuinely topics I hadn't thought of before so deeply and I'm grateful that I could be exposed to so many important ideas.",
	},
	{
		header: 'Week 3',
		subheader: 'June 28, 2023',
		summary: 'Relearning how to read',
		content:
			'During my third week I learned how different academic reading was compared to recreational reading. As I continued to sort through dense papers I began to formulate my own reading strategy to move through the papers quicker. Alongside Dr. Taylor, I was also assigned a graduate student to be my mentor, Tauhid. Tauhid gave me an important piece of advice: when entering a new field nothing will make sense no matter how knowledgable you are. I realized that the more papers I read the better I would understand the foundational concepts that tied them together. I continued to learn about group activity recognition in this manner and became much more efficient.',
	},
	{
		header: 'Week 4',
		subheader: 'June 28, 2023',
		summary: 'The uphill battle that is Robot Operating System (ROS)',
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
					mb={3}
				>
					{posts.map((post) => {
						return (
							<BlogPost
								header={post.header}
								summary={post.summary}
								subheader={post.subheader}
								content={post.content}
							/>
						);
					})}
				</Grid>
				<Typography>
					View my{' '}
					<a href={Report} target='_blank'>
						final report
					</a>
					!
				</Typography>
			</Box>
		</Box>
	);
}
