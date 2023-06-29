import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

export default function ImageGrid() {
	return (
		<ImageList cols={3} rowHeight={600}>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={item.img}
						srcSet={item.img}
						alt={item.title}
						loading='eager'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: './ms-photo-2.jpeg',
		title: 'Microsoft Photo',
	},
	{
		img: './professional-photo.jpeg',
		title: 'Headshot',
	},
	{
		img: './nyc-photo.jpeg',
		title: 'NYC Skyline Photo',
	},
	// {
	// 	img: './ms-photo-1.jpeg',
	// 	title: 'Microsoft Photo',
	// },
];
