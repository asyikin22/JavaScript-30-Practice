
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
 
  
      
       

