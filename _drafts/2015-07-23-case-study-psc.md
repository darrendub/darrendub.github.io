---
layout: post
title: Case Study - Paradise Soccer Club
description: A case study of a ecommerce website for Paradise Soccer Club
category: weblog
comments: true
---


### Summary

Paradise Soccer Club connects the beautiful game with the lifestyle of Hawai’i. I worked with PSC to build a website and e-commerce store to connect their brand to their fans across the world. 

### Passing the ball

Max and I grew up in the same town in Hawaii but I didn’t get to know him until I moved away to San Francisco (funny how that happens). He played soccer with my best friend and that’s how we met. Hawaii does not have a professional sports teams, so many of its youth turn to the beautiful game as their favorite pastime. Max saw an opportunity to blend the culture of Hawaii with the sport of futbol, which is how Paradise Soccer Club began.

It all started with his Instagram account which currently has 7,000+ followers. He curates photos and videos to connect with his fans but Max had bigger dreams. He opened his physical storefront in Kailua, Oahu on June 21, 2013 to open arms from the community. His social media presence and collaborations with Hawaii’s premier lifestyle brands exploded his reach. A year after opening the store we launched paradisesoccerclub.com with an expertly timed USA Men’s soccer kit during the 2014 Men’s World Cup which received massive coverage from many fashion blogs.

More importantly PSC isn’t just about selling merchandise, it’s about giving back to the community. He hosts soccer tournaments with cash prizes, he holds FIFA tournaments and gives away merchandise to its winners. His store and brand has been and will always be an ohana for those who love the beautiful game.

*Images/videos of events*


## The Problem
<!-- I was hired to create a website to tell the PSC story and connect those visitors to his products. In the process we developed a fully functioning marketing and commerce site. -->

### Getting Started
I started talking with Max in June 2013, we identified a lot of areas where I could help. It was clear he wanted a website, as a place to send his Instagram followers. As we spoke further he started to talk about his brand new storefront his own shop and producing his own branded merchandise. This website would also serve as a selling channel and would be a place to increase his marketing efforts. 

*Place email correspondence here*

It’s important to note that PSC is run and operated by Max alone. He doesn’t have content generators, inventory managers, marketing analysts, he didn’t even have a website. I was happy to help out a friend and excited to help push this brand forward. 

I started by asking a few questions:

#### What do you want the site to achieve?
He wanted to communicate his brand and his product offerings to his fans. He also wanted a place to sell his products. 

#### Who is your target audience?
He identified that his core audience would be teens to twenty-somethings passionate about soccer. He also identified families as children getting interested in soccer could grow into customers. At this point, PSC's only digital presence was their Instagram account, which was very popular. A lot of traffic would be driven from his social media so it was important to really nail the mobile experience. 

#### Will you need to update it?
He didn't have a need to update the sites code but wanted to actively post a blog portion about sales and events.

#### What is the current site setup?
He was using Godaddy to park his domain with no hosting. He identified some of the sites architecture:

- Homepage
- About Us
- Contact Us
- Events
- Blog
- Shop

This was defintely enough to get started. 


## Solution 

<!-- *Solution: What did you do? This covers your process, your strategic prowess, your technical capabilities, your team dynamic, your style.* -->

#### Phases
Since we started talking a couple days before the opening of his storefront it was clear we were not going to be able to release a fully functioning site before the launch. There was still a lot to talk about and a lot of direction to be hashed out. We decided to roll the site out in phases. 

#### Phase One: The Great Image
The first phase was to announce the grand opening of the store front. Max wanted something: "Simple, clean, with logo front and center or a pic." We had a tight turn around so I turned to Tumblr to quickly execute against the first phase. 

![Phase One]({{ site.baseurl }}/public/img/2015-07-23-psc/phase-one.png "Phase One")

I even created a rotating slideshow that changed out the background image, this was out of scope but made the basic site a little more engaging.

#### Phase Two: Fake it till you make it

Phase two was the first attempt to fulfill his need to update the blog but not the rest of the site. He was very active on Instagram and I knew this would be the easiest way for him to post, so I hooked up his account to tumblr so that everytime he posted to Instagram he had the option to post to his blog. This worked out pretty well and is still how the blog portion operates today. This second phase was also where I laid the ground work of the sites architecture. At this point we are still using Tumblr for hosting and since we were not building a full fledged theme we were limited to its basic html/css capabilities even external css was a struggle 😔 (more on that later). But it was enough to rough out some early ideas of the site.

![Phase Two]({{ site.baseurl }}/public/img/2015-07-23-psc/phase-two.png "Phase Two")

#### Phase Three: Always Responding
The last and final phase was a full site with a complete e-commerce store, about us section, blog, and newsletter sign up. 

Narrowed down the site map

- Home
- About
- Shop
- Contact 

It was time to graduate the site, taking it off tumblr and on to its own hosting, using SASS to build, developing the pages and most importantly creating the store


#### Square Market
I decide on using Square to power the PSC online store. This made sense for a few reasons:
Didn't need to reinvent the wheel
I was looking into various options: Stripe, Shopify, and Snipcart. [chart of differences?] 
While each had their merits I discovered that he was already using Square in his store to sell his products and manage inventory. It made a lot of sense to tie into this system to keep everything in one place. Square makes it super easy to spin up an online store and you can generate embed codes for each item. You upload a few images, set the quantity, and boom you're off selling. 

#### Patterns
Hero Image
Blocks


#### Mobile
Max has a lot of followers on Instagram and would be driving traffic to the site from his account. In our early talks we discussed the importance of the site being optimized for mobile. I began building patterns at the mobile size 

#### Navigation
One element I had a bit of fun with was the nav. I introduced a subtle transition between the different screen sizes. 
[GIF of nav]

#### Blog
I connected his Instagram feed to the blog using Tumblr so that everytime he posted to Instagram it would show up on the site. He could also use Tumblr to write longer posts.


*Outcome: What were the results? Did you build a new audience? Strengthen and grow an existing one? Increase sales? Great. Data, please.*

## Result

- 6 responsive web pages
- Storefront opened June 21, 2013
- Online store opened August 08, 2014
- $8,000 generated from online sales
- Online store generated $2,300 in first three days
- Two days after we launched the online store sales increased by 4x
- Most popular item online is the Merica Jersey (accounts for 40% of all sales)
- Connected his brand to fans across the U.S. 

*Reflection: If a reader has stuck around to this point, you can trust them with a bit more vulnerability. Here’s where you share the insights and voices of individual team members — planners, designers, developers, even your client — through brief, focused reflections on the job. What worked? What didn’t? What doubts did you have? What surprised you? What would you have done differently had you more time or more knowledge at the beginning? What did you learn and how will you use that knowledge in the future? This, really, is the most important and substantial piece of the puzzle for a prospect. If they’re seriously evaluating, they’ve probably heard plenty in the problem → solution → outcome department, but your honest and sincere reflection upon it will be what helps them get to know you and want to work with you.*

## Not all square
This didn't come with a few drawbacks. One is that our online shoppers don't actually purchase the item on our site, they very subtly get sent to our Online shop on Square. After discussing our options, Max and I were ok with this as Square would be responsible for the heavy lifting of the credit card transactions. Another issue was since the embed code was called using JavaScript there could be a lag of the items being generated on our site. I am looking into hosting the items on our end for a snappier web experience. 

All in all our decision to leverage square for the online store has been a good one. We're using an existing platform that he is using in the physical store and we can depend on the security of a well known payments company to handle our online and in-store purchases. 

## Tumblr and Foundation
Were good to get started but delayed the process later on

## Stop trying to make newsletter happen
While building the site I thought it would be great to begin capturing email addresses in hopes of being about to build an active funnel/cycle to market to existing customers and new customers. I used mailchimp which couldn't of been simplier. I linked a form input to a mailchimp generated landing page and voila we were capturing potential customers. 

Where we went wrong. Max didn't fully commit to generating content through email. After all it takes a lot of time and effort to create, deliver, and nurture amazing campaigns. We sent two emails total which were well recieved but our list is still too small to make an impact. In the future I'd like to help him stream line this process, possibly generating emails from his Instagram account. 

## Content Management Sike
I asked max early on if he thought he would be updating the site regularly and he didn't see a need to. But as we discovered after we launched he wanted to add more products, changed some of the copy and since I alone has built the site I was the most equipped to make these changes. Max confided in me that he is not the most tech savvy person and the thought of him being dropped in a wordpress site was terrifying. I think if I had more time and more CMS prowess I would have been able to train and empower Max to be in command of his site. 

## Phases, or nah
I think rolling the site out in phases was a great idea. It helped Max get his feet wet into his brand new website. However it took a while to reach the final site. I think if I had asked more pointed questions up front I could have identified his needs quickly and we would have arrived at the brand new site sooner. All in all it was a good process and Max is happy with his site. 
