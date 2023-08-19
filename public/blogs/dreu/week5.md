This week I continued my ROS journey! Last week I was more focused on setting up and testing my environment for ROS, but this week I really wanted to test out some code!

Of course, I continued literature review and began identifying different methods for human activity recognition using different computer vision models. I was definitely reading papers in a more limited fashion than before, though. Switching my work style like this really helped me progress on my code.

For about a day I continued learning the fundamentals of Robot Operating System (ROS) and this is exactly when I decided to just dive right in. I threw the tutorials I was watching to the side, found some Oak-d Pro cameras in the lab, and began looking for sample code to get something working.

I started by looking at GitHub repos that could be utilized to collect data from Oak-d Pro cameras with ROS. This led me to the depthai-ros repo which had several demos built specifically for the Oak-d Pro cameras. Some of them didn't work unfortunately, but I found one that allowed me to do exactly what I needed! By the end of my search I was able to successfully stream video from the cameras and publish the data in ROS for later use.

My next step was to begin looking for tutorials on how to subscribe to the published data so that I could manipulate it. I began by looking at sample code in the ROS2 documentation (e.g., talker-listener). This code helped me understand how the rclpy library for python could be used to write ROS packages and implement custom functionality.

This week almost felt too short as I made such fast progress!
