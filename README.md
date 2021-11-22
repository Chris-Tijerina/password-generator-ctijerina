# Password Generator - CTijerina

## Description 
This week’s Challenge required me to use a starter code to create a password generator that could be used with various criteria selected by the user. It was supposed to run entirely on the browser, fitting different sized screens, and also have dynamically updated HTML. 

Link to deployed app: https://chris-tijerina.github.io/password-generator-ctijerina/


The user story described the expectation this would have from a prospective user: 
>As an employee with access to sensitive data I want to randomly generate a password that meets certain criteria so that I can create a strong password that provides greater security


The acceptance criteria described what I should be sure to include in the app. Those requirements are listed below and my approach to them is paired with each requirement. 

>Given I need a new, secure password when I click the button to generate a password then I am presented with a series of prompts for password criteria

The framework for the button and ability to click it were already included and review of the code showed that I didn't need to make any changes to that functionality. I did however need to create the prompts by using ```window.prompt``` to allow the user to provide input as to which types of characters to include. I actually created a seperate area for criteria with a new function that could be recalled. I will explain that more in the section about validating. 

>When prompted for password criteria, then I select which criteria to include in the password. When prompted for the length of the password, then I choose a length of at least 8 characters and no more than 128 characters. When asked for character types to include in the password, then I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.

I added these acceptance criteria together because they were all part of the same portion of my scripting. After creating a prompt asking about each of these variables and whether or not the user needed them, I created a series of strings representing the criteria. I seperated the strings for lower and upper case letters, due to the fact that a person might need one or both of these criteria. If they were in the same string, there is a chance the random selection may not target them both, if needed. When I got to the special characters variable, I used the resource provided to look up the generally accepted special characters. I also went to various websites (UT Austin, Chase Bank, ATT, etc.) to see which special characters on the list that weren't present in those systems and removed them (such as ```{}[]?```). 

>When I answer each prompt, then my input should be validated and at least one character type should be selected.

This was an interesting part and pulled a lot of skills that we've used throughout the modules and some things that I had to look up on W3 Schools and StackOverflow. I started off making a series of if statements as we did in the Robot Gladiators assignment, but I realized that was going to be incredibly redundant and my likelihood of errors was going to be higher as each new problem I tried to tackle started to make things messy, so I created a function to run all of the validation with the name ```showPrompt```. I decided to use a ```switch``` statement to evaluate each criteria in a ```case``` and allow it to restart if the user entered an invalid answer. To eliminate the issues of capitalization on the words yes and no, I used a ```.toLowerCase``` method to make everything lowercase and then returned it. Outside of that function, I also created an ```if``` statement that would cover a situation in which the user did not select any criteria for the password and prompt them to redo it. 

>When all prompts are answered, then a password is generated that matches the selected criteria.

I initially had some difficulty with this portion, but after some checking into resources like W3 schools and StackOverflow, I was able to create a ```for``` loop that would run through a series of ```if``` statements tied to each criteria. If the user determined they needed a criteria, it would select a random number from the string associated with that criteria. The difficulty came in find the proper way to make sure that the password length was matched to the user's requested length. Initially, the ```for``` loop would create the same number of characters as the user requested from each of the criteria, resulting in very long passwords. There was also an issue of the password going beyond the length, as the loop wanted to continue through the ```if``` statements before checking the length. This was fixed by moving the ```i++``` into the ```if``` statements themselves and expanding each ```if``` condition to check for the length of the password with ```&& i < length```. Once the password was created with the proper requirements and the proper length, I wanted to increase the security of the password itself by randomizing the order of the characters. This required a bit of research and trial and error as I initially ran into trouble trying to use the Fisher Yates Method, as the string was not actually behaving like an array. So I used a ```split``` to turn the password string into an array. Once I had the array, I was able to use a ```for``` loop to exchange each character with another character of a random index in the array.


>When the password is generated, then the password is either displayed in an alert or written to the page.

Once I had my shuffled password, I chose to display it on the page itself instead of using an ```alert```. The reason I chose this was because the ```alert``` could be accidentally closed very easily and displaying it as text gave it a little bit more permanence. 