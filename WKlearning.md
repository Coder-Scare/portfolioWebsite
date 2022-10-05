# Wes-Key Learning

![](images/Project%201%20Wes-Key%20Learning.png)


## The Objective:
    - To create a website that advertises my tuition services.
    - A place for to drive traffic and turn potential clients to leads.
    - Provide more information on what Wes-Key Learning is, what the service aims to accomplish and who I am.
    - Show my services via video and images.
    - Provide existing reviews of the service.
    - Display contact information with links to Wes-Key Learning social media pages.

---
## Landing Page
![](Videos/Wes-Key%20Sticky%20Nav%20Bar%20GIF.gif)

### Technology Used

The Landing page is what the user sees first. I used semantic HTML5 throughout this project. In addition some JavaScript and CSS was used to make the navigation bar fixed after scrolling down by a certain amount of pixels. This enables the user to always have access to navigation, regardless of where they are on the website.

There is also a short video that autoplays as soon as the website loads on the browser. The links on the navigation link to different areas of the landing page as well as a few other pages that can be found on the website.

---

## About Section
![](images/Project%201/Wes-Key%20About.png)

The about section has information on Wes-Key Learning and what we offer. I used CSS and HTML to keep the information in the center as well as add purple colour to some text. I added appropriate spacing to the text so it can be read easily.

---

## Image Slideshow
![](images/Project%201/Wes-Key%20Slideshow%20images.png)

### Technology Used

Included a slideshow of images to show prospective clients how my online tuition services look like. Used a bunch of divs in my HTML, CSS and JavaScript to create this timed automatic slideshow. Each image will display for approximately 5 seconds before changing to the next slide. I also used JavaScript to add toggle control of each slide, once clicked this resets the timer before the slide automatically changes.

---

## Meet Wesley Section

![](images/Project%201/Wes-Key%20Meet-Wes.png)

This section has information about me and my experience as a tutor. I added a link to my Linkedin using a font awesome icon as well as a link to my Tutor Association profile.

---

## Contact Section

![](images/Project%201/Wes-Key%20Contact%20Us.png)

### Technology Used

Used the form tags in HTML, CSS for styling and some PHP for server side interaction. The goal of this form is to take enquiries from potential clients and send them to the hosting sever inbox. The information gathered is formatted appropriately and pushed to desired locations using PHP. Once the form is filled correctly and the submit button is clicked, the enquires are then sent to me as an email. It is sent to the email address associated with my website's domain. The message is then redirected to a gmail account I setup.



### Current Problem

My main issue is that I get a lot of unwanted messages from BOTS and other unwanted entities. This means that some real leads are lost amongst a considerable amount of unwanted advertising messages.

I tried adding traps and form validation to deal with this issue. 

#### Traps and Validaition Added:
1. I added a hidden part of the form that cannot be seen by real users. If BOTS filled this hidden part in I added PHP Validation that prevented the form from being submitted properly.

2. Added form validation to HTML to ensure the correct information was being inputted to the form. 

Although these helped to reduce the amount of unwanted messages I was receiving, it still was not enough. 

### Possible Solutions

#### Solution 1

One possible solution is to add captcha. These are an added piece of security once the submit button has been clicked and before the form is sent. This will hopefully filter out nearly all the BOTS and make it less desirable for those sending unwanted messages to do so. 

#### Solution 2

Another solution is to learn and get a lot better with PHP in order to properly validate the backend of the form. This adds to the frontend validation you see in the HTML. 

---

## Reviews Section

![](images/Project%201/Wes-Key%20Reviews.png)

The review section has a slideshow of reviews for potential leads to see. It provides them with an insight on what others think about my tuition services. The footer has my social media links, email address and mobile number.

### Technology Used

Same technology used for the slideshow of images above is used here. Each slide shows for approximately 4 seconds before automatically changing to the next slide. Again, the toggle capabilities are available here as well. 

---

## Pricing (Page)

![](images/Project%201/Wes-Key%20Pricing%20Page.png)

This page shows the cost of my services and what I offer. 

## Technology used

Used CSS flexbox to put the information side by side. This orientation changes when the browser screen is smaller or resizes making it responsiive. 

---

## Online Safety (Page)

![](images/Project%201/Wes-Key%20Online%20Safety%20Page.png)

Another page detailing how I go about online safety whilst delivering online tutition.

---
## Terms and Conditions (Page)

![](images/Project%201/Wes-Key%20Terms%20and%20conditions%20Page.png)

A pages that provides information on Wes-Key Learning's Terms and Conditions.

---

## Responsive Webpage

![](Videos/Wes-Key%20Responsive%20GIF.gif)

The entire website is responsive and can be viewed properly on all screen sizes. It also functions as it should on all screen sizes. 

### Technology Used
I used media queries in CSS and other properties to successfully achieve this.

---

## Drop-Down Menu on Mobile Devices and Small Screens
![](Videos/Wes-Key%20Dropdown%20GIF.gif)

Drop down menu is available on smaller screens and mobile devices.

### Technology Used

Used HTML, CSS and JavaScript to successfully implement this. Added a toggle onclick function and extra JavaScript to use hamburger button as an open and close button. Also, if any other links are clicked in the menu the menu will take you to that desired location and then close. The hamburger button is animated and changes from a hamburger button to an X on click. This was implemented using CSS and JavaScript.

---

## Conclusion

This is version 2 of my website and I have implemented all that I know so far. I am currently working on version 3 below and a snapshot of the homepage is below.

## Wes-Key Learning Landing Page (Version 3)
![](images/Project%201/Wes-Key%20Version3.png)

I am looking to add a review section where users can add reviews themselves as well as a login section. Furthermore, I am going to add an improved contact form with a better form validation to completely prevent BOTS and drive actual leads to my buisness.
