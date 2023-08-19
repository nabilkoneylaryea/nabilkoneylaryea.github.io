This is THE BIG ONE. After a lot of anticipation, I felt like I finally knew what I needed to about ROS to begin working on my data collection system. This week I focused on creating a multicamera setup for the data collection procedures.

I started by using the depthai-ros demos I found previously to publish video data from a single Oak-d Pro Camera. This was pretty simple since it only involved running a script in the ROS CLI. The next step, however was a little more of a challenge.

I needed to write code that would subscribe to the published video data in ROS, and I had NEVER written a single line of ROS code before this. I started with the sample code I found in the previous week and ran with it! By the end it almost felt simple after I realized I can use a lot of the python libraries I'm used to manipulate the data. The final step of writing this functionality was ensuring the data would be stored somewhere, and luckily ROS has a structure called a rosbag that is used specifically for this purpose!

After writing the storage functionality, I wrote a python script that could convert the video data stored in a rosbag format into an mp4 file. This required using some other libraries and dependencies, such as ffmpeg, that I wasn't familiar with. Eventually I got a version that worked ... kind of. The only issues were that the frame rate was VERY wonky when playing back the recorded video. Alas, I had to move on to keep on progressing, and so I decided to return to this issue later.

My true goal was to have a camera setup using 2 or more and so I still had a ways to go. First, I attempted to use existing code from the same repo to publish data from multiple Oak-d Pro cameras. This, of course, is where things began to break down. I scoured the internet for DAYS, but I never discovered any code with the functionality I was looking for that was specifically made to work with ROS2 :(

I decided it was time to step out of my comfort zone and find partial solution and fill in the gaps. I looked into the depthai-python GitHub repo which contains the source and demos for code that works with the Oak-d Pro cameras. The difference, however between this code and what I was using previously, is that it is not integrated with ROS. I, once again, had to level up and figure out the integration step myself.

I started by copying the code to launch multiple camera feeds from one ROS node (structure containing functionality), and almost nothing worked. I experimented with multithreading, using different topics for the cameras, etc., but I was at a loss.

After consulting with a graduate student in the lab who had several years of ROS experience, I discovered my approach needed a slight tweak. Instead of launching multiple camera feeds from one node, I created a metafile, called a launchfile in ROS, that identified the cameras and created individual nodes for each camera. This ensured the feeds for each camera existed within their own namespaces and that they could be accessed separately.

Finally I was ready to test the final functionality by viewing the camera feed simultaneously in the ROS commandline utility: rqt. It looked great! After that, I simply iterated on the code to improve the rate at which data was published from the camera nodes. This improved the frame rate at which the video frames were being published so that they could be played back properly.

Finally, I refined and documented the new ROS package I had created and published my new code to the lab GitHub. Hopefully, I saved somebody some time :)
