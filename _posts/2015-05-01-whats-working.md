---
layout: post
title: What’s Working & What Isn’t
description: An analysis of my existing site, what’s working and what isn’t
category: weblog
comments: true
---



Here is my [old site](http://darrendavenwong.com) in all of its glory. Take it all in. Look at the fixed grid, the tiled thumbnails, and embrace the gray background.

**What’s working:**

- Minimal, “clean” layout
- It’s responsive (*chuckles*)
- I still like these pieces of work
- The about me section is kinda funny?
- Page Weight
 - HTML: 3.1kb
    - CSS: 3.4kb
    - Font: 32kb
    - JS: 39kb
    - IMG: 270kb
    - Total: 347.5 kb
- Speed
    - Start Render:      0.891s
    - Fully Loaded:      1.573s
    - Speed Index:      1048
    - Requests:           16
- Tests
    - [Webpagetest](http://www.webpagetest.org/result/150422_36_130P/)
    - [PageSpeed Insights] (https://developers.google.com/speed/pagespeed/insights/?url=darrendavenwong.com)


**What isn’t working:**

- No Personality
    - Holy gray background batman, looks like the inside of Karl the Fog, #e6e6e6
- I’ve been described as lively and outgoing this website looks the underside of a shoe

- Case Studies Lack Substance
    - Where are the compelling write ups? I care about my work but the way I talk about it on my site doesn’t correctly portray that
- The layout of the case studies are hard to read
- Code is literally from someone else
    - Sorry [Andy Taylor’s 1140px grid](https://andytaylor.me/2013/04/09/1140px-css-grid-retired/)
- Projects are dated
    - Do these projects show my skill set? Hayl no
- Poor Optimization
    - No Caching Static Images
    - Images are not compressed
    - No CDN (Do I really need one?)
- Version Control
    - I write HTML and CSS locally and drag it into my FTP
    - No conflict errors or warnings in CSS
    - It’s instantly live, no testing environment

Ok. Ok. I know I’m being very critical of my site which was made circa 2012 and to be fair it’s done some nice things. It loads fairly quickly, those are the metrics I’m reaching for with the new site (which may be a little unrealistic). I think it started to introduce my personality and style. Also just to kinda show where my head was at while making this site, I was taught Dreamweaver was the *only* way to make websites...

<img src="http://images.amazon.com/images/G/01/software/detail-page/B003B32A88-1.jpg">
<cite>Yucky <a href="http://www.amazon.com/Adobe-Dreamweaver-CS5-Old-Version/dp/B003B32AA6">via Amazon</a></cite>

### Next steps
This will be a good foundation to build my new home. Next, is to formulate the blueprint buy starting with a solid performance plan.