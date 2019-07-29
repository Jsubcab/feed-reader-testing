# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

# How to install it

You will need to clone the git to your application on your terminal or download the zip file and unzipped.

# How to run it

Initiate the 'index.html' file located in the main folder of 'feed-reader-testing'. Once started, you must to scroll down for checking if the test pass every control point.

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

Im gonna split the explanation numbering the test I did:

### Test 1
First test is about to check if the object allFeeds has URL is assigned and it wasnt empty.

### Test 2
In this second part, that is exactly the same of the first test, but checking the name (must be assigned and cannot be empty).

### Test 3
I wrote a new test suite named "The menu" that checked if the menu was hide it by default. For this test I needed to call the class "menu-hidden".

### Test 4
This test is related to the third one, but in this case I need to use the function click for checking if the menu was hide it everytime I was clicking the button of the menu.

### Test 5
Here I created test suite called "Initial Entries". This suite included a test which checked to see if there is a single .entry element in the .feed container.

### Test 6
Finally I created the test suite "New Feed Selection". This one was more tricky because the loadFeed() is asynchronous, so I used 2 feeds: prevFeedData and newFeedData to check if the content changed.
