
# Animal Sound Kit (Practice 1)
* This fun little project demosntrate how a user can play with animal sound kit. When a key is pressed on the keyboard, this will happen:
     * Animal sound associated with that key will be played: cat, cow, dog, horse, lion sheep (Keys: A, S, D, F, G, H)
     * The button displayed on webpage will get bigger when a key is clicked and a green border will be applied to it.
 * You can refer to the keycode used here: https://www.toptal.com/developers/keycode
 * HTML file:
      1. Create one big div with class-keys
      2. Create 6 divs inside that big div with class-key
      3. Inside each of those div, add keyboard (kbd) tag and span tag
      4. Download 6 animals sounds, create 6 audio elements after that one big div.
         
* CSS file:
  1. Style the HTML elements accordingly for body, HTML, 2 classes (keys, key) and keyboard tag.
  2. The two elements that will interact with JavaScript is '.playing' and the 'transition' property in class-key(.key)
  3. Use relative lenght (rem) over absolute length(px)
  4. Set flex: 1 so the button will grow and occupy the whole space along main axis.
 
* JS file:
  1. Create a function playSound. Note that when the audio is played, the key will scale up and a green background will appear to highlight that the key is indeed pressed. 
  2. Create a function to remove the transition. This is to return the key to its original state when it's not clicked or when the audio is no longer playing. 

# Clickity Clock! (Practice 2)

* These files demonstrate how I built a real-time clock in which the needles will rotate according to what time it currently is.
* Each needle of the clock will point to current time, hours and seconds.
* I have embedded a digital clock I got from https://www.clocklink.com/gallery/view/html5-048 to help you to visualize and see how the needles correspond to current Malaysian time.

**HTML File** <br>
1. Create one clock div
2. Create the face of the clock with another div
3. Create another 3 div that represents the needles of clock
   * class = hours-needle
   * class = hours-needle
   * class = hours-needle
  
**CSS File** <br>
1. Style the body, .clock, .clock-face, .needle, 
2. The 'transform' property will interact with javascript and give its functionality where it will get the needles to rotate.
3. transform-origin is set to 100% so the pivot point will change to the right hand side of the needle instead of its center. 
4. I have set the text on the needle that represent hours and minutes to the far left so you can see which needles represent hours, minutes and seconds as they rotate and the time progresses.

**JavaScript File** <br>
1. Create 3 variables for hours, minutes and seconds.
   * Get elements with classes of hours, minutes and seconds using query selector ad assign them to their variables.
3. Create a  setDate function
   * 'now' is created to get the current time and date
   * getSeconds, getMinutes and getHours are method of Date object to get current seconds, minutes and hours
4. Call the setDate function every second using setInterval function.
5. Style.transform property is used to rotate the needle by the calculated number of degrees
   * It is set using template literal - it must be wrapped inside backticks ``
6. How to get the degrees for rotation of seconds, minutes and hours:
   * Seconds is divided by 60 to get percentage of the current minute
   * Multiplied by 360 to get the degrees
   * 90 is added as an offset to align it correctly with transformation property in CSS (So it will go full 360 as the time progresses)
  
# CSS Variables (Practice 3)
These codes demonstrate how we can use CSS variable and adds functionality in JavaScript. So what is CSS Variables?
* It contains and stores specific values to be used throughout the document
* Root selector (:root) is used to define the variable globally

I have separated the files into two parts. I have clearly highlighted it in the html, css and js file to make sure you are not confused when reading them and to help you identify which is which:
* The first part: It shows how user can change the theme of the heading by toggling the theme button
    1. Create HTML file and style it accordingly, add root selector in CSS that defines the primary color, secondary color and text color of the heading 
    2. JS File: Retrieve references to the HTML button element, add event listener that will change theme color when button is clicked. 
* The second part: It shows how we can adjust the spacing, blurriness and background color of an image based on the value inputted by users.
    1. Wrap the word 'javascript' in span - this is the part that will change color when user change the base color
    2. cretae a div with class 'control', within it, create 3 label element and 3 input element for spacing, blur effect and background color. Add anotehr div for image
    3. Define the variable padding, background color and blur effect in CSS file. don't forget to apply variable on the word 'javascript'
    4. JS file:
       * Create a variable that select all inputs in HTML element
       * Add event listener that listens for change of value in the input
       * Define the handleUpdate function that will update the CSS variable when value of the input changes. 
     

# Array (Practice 4)
* This file demonstrates how I use array method to manipulate data. Those methods are:
   1. Filter people who were born in the 1500 using __'filter'__ method
   2. Creating an array of inventor with thier first name and last name using __'map'__ method
   3. Sorting the name of inventor by thier birth year, from the oldest to the youngest by using __'sort'__ method.
   4. Calculate how many years did all the inventors live by using __'reduce'__ method.
   5. Sort inventors by the years they have lived from the oldest to the youngest using __'sort'__ method
   6. Sum up the instances of each item in the data using __'reduce'__ method. It will tally up the total of each item.

 
# Array (Practice 7)
* This file demonstrates more methods in manipulating data in array. Those methods are:
   1. Find out if there is at least one person who is 35 years old by using  __'map'__ method
        * before finding that out, I calculate the age of 5 people listed in the array and store the calculated age in variable called 'modified array'
        * I then used  __'some'__ method to find out if there is anyone at least 35 years old and the value returned in the console will be either 'false' or 'true'. in this case, it's true.
   2. I use  __'every'__ method to find out if everyone is 18, in this instance the value is false
   3. Find comment that has id:111111 using  __'find'__ method and an arrow function (the shortest method)
   4. Find comment that has id:555555 using  __'find'__ method and an anonymous function + conditional statement
   5. Find ID that has commet 'Rice is my fav food ever' using __'find'__ method
   6. Delete a comment that has id:222222 using __'delete'__ method. The new array will be reflected in the console - that particular comment is no longer there in the list
 
  
      
       

