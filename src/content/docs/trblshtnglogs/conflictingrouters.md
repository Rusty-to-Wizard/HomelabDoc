---
title: Conflicting routers
---

#### Issue:

I wanted to set up two VMs on my PC using a spare wifi I've got and tinker around on it. I had already given a weird static IP to make it obvious to the oblivious shouting "THIS IP HERE IS THE SPARE ROUTER!", as well as writing it down. As soon as I connect my spare router, suddenly both main and spare router chose to fight each other like siblings would always do. 
Thankfully having gone through 1201 A+ course (I'm revising for the exam!), this was the thought process in my head:

1. Both intermittently disconnect and fight over each other, especially non-stop notification popping up. 
2. If they keep on disconnecting, this points to connecting to the internet issue. 
3. My PC was able to connect to the internet just fine on ethernet when wireless was disconnected and vice versa. This leads me to think my PC has dynamic DHCP assigned by the router, so PC didn't assign itself APIPA. 
4. This can only mean one thing: default gateway not getting onto the highway internet (I see things visually so excuse me).

#### Fix:

'ip route' shows route-metric of 100 on both main and spare router. This means they both are treated as a priority. Higher the number the less of the priority they are given. 
Easy fix, so I thought...

```bash
nmcli connection modify "Spare Network" ipv4.route-metric 200
nmcli connection modify "Ethernet" ipv4.route-metric 100
```


It still didn't work. It kept disconnecting and fighting over each other. I re-ran `ip route` to see what was up. The outcome:


```bash
default via 192.168.1.1 dev enp7s0 proto dhcp src 192.168.1.46 metric 100  
default via 192.168.60.1 dev wlan0 proto dhcp src 192.168.60.51 metric 20200  
192.168.1.0/24 dev enp7s0 proto kernel scope link src 192.168.1.46 metric 100  
192.168.60.0/24 dev wlan0 proto kernel scope link src 192.168.60.51 metric 200  
192.168.122.0/24 dev virbr0 proto kernel scope link src 192.168.122.1 linkdown
```

One has metric 100 (the lower the number the more priority it has) and the other one has 20200 so it should work but it didn't. 
However, the clue is in both default IP addresses. I set my spare router to ...60.60, so why is the second line showing ...60.1? Maybe I had misunderstood how subnetting works. After some research, I was reassured to know that the spare router's DHCP is handing out the wrong gateway address to my PC when the spare router lives at .60. 

It didn't work. And to make matters even worse, I had closed the tab and now couldn't get back onto the router login page - I've locked myself out!!! 

So... DHCP is turned off that means my PC just assigns itself an APIPA address when I disconnect ethernet and connect onto spare router network. 
After a bit of googling about before resorting to LLMs, I found a command that may just resolve my issue:

```bash
nmcli connection modify "LabNetwork" ipv4.method manual ipv4.addresses "192.168.60.10/24" ipv4.gateway "192.168.60.60"
```
What this command is saying is to modify the LabNetwork connection and manually assign the stated numbers into ipv4 address + gateway. I only know the basics of nmcli, but this was a whole new command to learn. 

#### Conclusion:

All it was two routers fighting over each other because 1. Both metrics were the same, and 2. In the right subnet room, but facing the wrong gateway door out to router. 

Having gone through the CompTIA A 1201 course, it helped having a bit of 'theory' knowledge but nothing compares to practical experience. This further consolidated my knowledge gained from the course on default gateway, subnetting masks and some new fancy nmcli commands. This only encourages me to develop my skillsets further.

