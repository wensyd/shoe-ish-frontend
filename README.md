# Shoe-ish- Frontend - Project 4
#### By Wensy DeSousa

## Project Summary

Shoe-ish is a full-stack application created using a masonite backend and react frontend. Shoe-ish will allow a user to find their most favorite shoes and add them to a collection which can be marked off as purchased making this the ultimate shoe wish app. 

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /shoes | get | get all shoes (index)|
| /shoes/:id | get | get a particular shoe (show)|
| /shoes/new | get | return form to create a new shoe (new)|
| / | post | get post request to /shoes, create new and redirect to index (create)|
| /shoes/:id/edit | get | edit a particular shoe (edit)|
| /shoes/:id | put | put request to /shoes/:id (update)|
| /shoes/:id | delete | deletes a particular shoe (destroy)|

## User Stories

-user can view all pictures on main page (index).
-user can select picture and it redirects to show page for that particular picture. 
-user can edit picture, title, description of each shoe.
-user can delete picture.
-user can update picture.
-user can go back to main page from show page.
-user can create new picture/file/shoe. 
-user can mark the shoe complete with checkbox.

## List of Technologies

-html
-css
-Milligram-sass
-React
-JS


## Wireframes




## Challenges

- Challenges that came up were with the checkbox display on the main page with an icon. The checkbox was not showing the boolean values. I also had challenges when it came to displaying an if statement within the jsx. The if statement needed to be embedded within the jsx in order to display the boolean value. Once that was completed I also learned that within react every tag should be self-closing or have a closing tag. This was a challenge because the icons were not showing once the icons were embedded within the jsx, so I had to add the closing / in order for it show. I also had a challenge on with the form not saving the value given at the checkbox. This was resolved by adding checked to the form input and adding a separate handle change function which listens for when the checkbox is checked or not. Once this new handleChange function was created and updated, the checkbox was working. During this process I also learned more detail about the ternary operator and optional chaining operator. 
