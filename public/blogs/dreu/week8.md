This week, I turned my attention to creating a pipeline to run activity recognition experiments. Now that I knew a lot more about how models were being created and trained with PyTorch by other researchers, it was time for me to make my own attempt.

I still started with some pre-existing code and finetuned a Res3D-18 model found in a blog post. I used this as a starting point for my own vision-based activity recognition pipeline that I could use to experiment with different datasets and models.

I thought it would be a simple plug and play scenario and so I started throwing in some of the pretrained models PyTorch provides. Unfortunately, my assumptions were immediately proved incorrect with several errors. I took me several days to even understand the errors PyTorch was giving me.

Eventually I figured out that the data I was using had different dimensions from what the model was expecting. Simple ... right? NO. For days, I studied the sample code to understand how this sizing even worked. I ended up doing a deep dive on how CNN-based architectures are represented with layers and how these layers change the input data to learn from it. After that I started with a very simple project and created a CNN-based image classifier from scratch trained it on the CIFAR-10 dataset

After understanding EVEN MORE about training my own deep learning models, I reorganized sample code to understand exactly every component. I even rewrote the training loop in a way I could understand it. Finally, I resolved all the errors and was ready to begin testing with different models.

I looked into pretrained models provided by Pytorch to use in place of Res3D-18 and decided to try X3D and MViT. The training processes were painstakingly slow. Often times my training sessions would error out before completion as I continued to exceed the GPU usage limits on Google Colab. To make matters worse, it was a rare occurrence to get access to Colab's GPU resources multiple times within a day. This meant that each day of the week I had ONE opportunity to test my changes and try generating results.

Ultimately, I got one test to run till completion. I finetuned MViT, pretrained on the Kinetics400 dataset, on 10% of the HMDB51 training set and visualized the training loss, validation loss, and accuracy over 15 epochs using Google Colab’s hardware acceleration. This was great! Until I saw the results :( My model learned NOTHING!!!

The previously mentioned logistical issues severely halted my progress, and ultimately my lab had to begin a process to get our own resources from the university's super computer. This process lasted until my final week, unfortunately, and for the meantime I was done with experimentation.
