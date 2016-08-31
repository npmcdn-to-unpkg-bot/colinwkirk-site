# colinwkirk-site
Personal website of Colin W. Kirk


npm i to get artifacts (may need to install some globals)

npm run build_prod to build minified prod build

npm run serve to start server on port 80

####Some notes on the site's code:
This is not meant to be lightweight or elegant. In many ways, the point of this site was to dive into Angular2 and intentionally overcomplicate some elements as a way to show my own capabilities. The vast majority of this site could be done much more easily with static HTML pages.

I decided to use Bootstrap for some of the elements because it's standard in the industry. In Angular2, this turns out to complicate some things right off the bat since Bootstrap doesn't play well with Angular, so I used the library [ng2-bootstrap ](https://github.com/valor-software/ng2-bootstrap) by Valor Software.

I also wanted components to be as granular as possible, so there are a number of nested components and helper classes.

For example, I split out the different sections of my resume into helper classes that contain the relevant information, and use ngFor and ngIf to populate the actual html. 

The biggest challenge turned out to be the Contact form. I launch it in a bootsrap Modal from the fixed bootstrap navbar. Right off the bat, this causes issues with the z-index and makes the modal a quick way to brick the site if you're not careful. In straight JS, I could have used jQuery to just attach the modal to the body tag in the DOM, but in Angular, it's bad practice to directly manipulate the DOM, so I had to use a service to open the modal.

Inside the modal, I dynamically create the contact form, taking in some data to fill certain things: the header, the top line of the modal, and the text that displays in the submit/cancel buttons.

When you hit sumbit, the form actually contacts a node miroservice via REST to create the email programatically using for Amazon's Simple Email Service (SES). 

####Some notes on the UI design
I spent some time as a graphic design major; I'm hardly a professional, but it's still something I'm fairly comfortable with.

This was my design process: I started with the background image. I thought, "Hey, Cosmic Cow is an alias I use a lot, and I like space. Let's find something cool on [HubbleSite.org](HubbleSite.org)." So I found a great image of the [Carina Nebula](http://hubblesite.org/newscenter/archive/releases/2010/13/image/a/) and decided that would be my jumping off point.

I then start tinkering around in Adobe Comp on my iPad until I was happy with the design. I used color picker to get colors from the image itself and decide on the color theme.

I then mocked up the front page in HTML/CSS with Bootstrap3.

Then I started transitioning it into Angular2.
