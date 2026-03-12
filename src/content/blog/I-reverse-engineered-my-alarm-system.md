---
title: "I reverse engineered my alarm system"
date: "2026-03-12"
excerpt: "As a passionate software engineer and IoT tinkerer, I spent two grueling years reverse-engineering my home’s undocumented old alarm system, starting with Wireshark packet sniffing, progressing to bulky ADC hardware prototypes, and finally cracking it with AI sidekicks Claude and Gemini, culminating in a sleek ESP32-POE setup with just three wires that now arms/disarms from my phone, automates lights and beams, and delivers real-time sensor telemetry into my smart home, all proving that the hard, undocumented battles are where true expertise is forged."
tags: ["IoT", "Home Automation", "ESP32", "Embedded Systems"]
coverImage: "/projects/alarm.jpg"
---
I'm a big techie and software engineer. I like a challenge and learning new stuff.

I am big into the home automation and IOT scene building my own sensors etc. A few years ago my wife and I bought a house that had an old alarm system, but it worked. I wanted to control the alarm system from my phone and have a smart alarm system.

I wanted to detect presence in my rooms and outside and since the alarm system had sensors everywhere I wanted to tap into the system and extract the data from it.

First I had a look online and saw a few people had some crude implementations, but I couldn't get them working for my specific model.

My first approach was to use Wireshark and sniff the packets on the network when using the desktop technician software they use to configure the alarm. I made some progress, but it took a lot of time trying to find the correct commands being sent back and forward.

I spent a few months trying to get it working and eventually my mind and focus drifted to other projects.

About 10 months later I approached the problem with a new angle. The alarm panel's sensors can be broken down into a few basic parts. The sensors are analogue, thus we can look at monitoring a few things, voltage and resistance. That gave me the idea of making use of analogue to digital converters.

I started measuring the voltage and made some breakthrough. The concept proved to work. the only down side, it was bulky and I had to hard wire every sensor I wanted to monitor. It worked... I used the alarms output usually used for status lights to measure if the alarm was armed or disarmed and finally after a year and a half I had a working prototype.

I then explored the world of converting my protype into a professional PCB and that lead me on a new adventure. I tried selling my design to a company that expressed interest since this was now alarm manufacturer agnostic. I learned a lot, but eventually that venture did not pan out.

A year later the alarm system started behaving funny and I forgot all about the wiring I had set up. I decided, maybe its time to try this properly again and since the AI tools got better I gave it a go again. This time I did not have to go through all the packets all by myself. I had interns now that did not have to sleep named Claud and Gemini.

After a few weeks I made a breakthrough and finally cracked the code. I saw the first real time telemetry feeding into my home automation system. I ran through the house triggering every sensor that was available. I felt like a kid in a toy store with an unlimited budget.

I spent a few more weeks refining the code and hardware to the point where I can now arm and disarm my alarm system from anywhere. I made the hardware integration so simple, its an esp32 powered over POE, and a logic level converter plugged into the alarms communications port, 3 wires instead of 25.

I have since connected the outside beams with my spotlights and set up automations to turn off my lights in rooms when no one is there. My alarm turns off when I pull up to my gate and alerts me if the alarm is not turned on when no one is home. This is the future!

Did the people around me understand why I spend 2 years doing this instead of buying a smart alarm system. No. Was it worth spending 2 years figuring this out. Yes.

I gained actual experience in sniffing packets on my network and understanding what goes on. I got to apply my university knowledge about parity and stop bits. I have only came across a handful of software engineers that had this persistence of figuring this out when there's no documentation available and I am proud to say it wasn't easy.

It was a hard, painful and disappointing journey that led to some of the most excitement I had in my career. People build projects to learn, but when you actually try to solve a problem and not just watch a YouTube video or read an article, that is when you gain experience.