---
title: Smokeping
---

#### Why Smokeping?

Dad complained of network packet loss especially at nights. Dad seemed to think wind was influencing the network packet loss so I installed Smokeping to investigate that claim.

Turns out Dad was right. When it was extremely windy the packet graph chart shot up high (in ms) & greyed out, and on days it wasn't windy the graph was quite stable and consistent. Talk about fun times arguing back and forth with BT despite my evidence :) 

#### Smokeping graphs explained:

**Top Packet Loss**

Shows what percentage of ping packets are being dropped. Green line = typical packet loss. Gray smoke = variation. You want this at 0% - any packet loss means data is getting lost, causing slowdowns.


**Top Median Roundtrip Time**

Your typical latency - how long a ping takes to reach the destination and come back. Green line = median time in milliseconds. Lower is better. Gray smoke = variation over time.


**Top Max Roundtrip Time**

The worst-case ping time observed. Spikes in gray = moments when connectivity got really slow. These cause freezes in games or video calls.


**Top Standard Deviation**

Measures consistency - how much your ping times vary. Low = stable connection. High = unpredictable latency all over the place.


Colour coding: Legend shows different packet loss ranges (0, 1, 2, 3, etc.) to quickly spot problem periods.

