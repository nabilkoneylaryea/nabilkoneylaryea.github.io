import React from 'react';
import { Typography } from '@mui/material';
import ImageGrid from '../components/ImageGrid';
import { Grid } from '@mui/material';

function About() {
	return (
		<Grid container>
			<Grid item>
				<ImageGrid />
			</Grid>
			<Grid item>
				<Typography variant='h3' mb={4}>
					About Me
				</Typography>
				<Typography variant='body1'>
					Nabil Koney-Laryea is a rising senior at the University of
					Florida in Gainesville Florida. From a young age, Nabil had
					an interest in science fiction movies such as Iron Man and
					Star Wars. It was at this age when he began drawing
					parallels between fictional science and real world
					innovations.{' '}
				</Typography>
				<Typography variant='body1'>
					During the COVID pandemic, Nabil's interest in STEM grew and
					he became passionate about coding. Starting with his
					learnings from his Java course, Nabil learned new languages,
					frameworks, and core concepts in computing. Continuing into
					his first year of university with the same drive, Nabil
					continued learning new skills and even competed in his first
					hackathon.
				</Typography>
				<Typography variant='body1'>
					Nabil is now a senior at school. In May 2024, Nabil is
					planning to graduate from the Herbert Wertheim College of
					Engineering with his degree in Computer Science and a minor
					in Engineering Innovation.
				</Typography>
			</Grid>
		</Grid>
	);
}

export default About;
