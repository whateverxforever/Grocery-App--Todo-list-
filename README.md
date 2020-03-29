# Grocery List To-Do App!
## Description
![](https://raw.githubusercontent.com/whateverxforever/Grocery-App--Todo-list-/master/public/screenshot.PNG)
This repository contains a single page **REACT** grocery list application. In this application the user can add all the grocery items in a to-do fashion and then can later mark them complete by clicking on the grocery once the job is done. 

User is also provided with a filter function, using which he can filter out the remaining groceries based on whether they are already bought or not.

The user can delete added items by clicking on the delete button adjacent to the said item. When an item as marked as complete by clicking on it, the items color changes to red and a line is striked through the item. You can toggle between marked and unmarked by clicking on the item again.

Based on the items left unmarked in the list, there is counter to the right which changes its color based on the ratio of items left / total items indicating the progress from red->yellow->green. 



## Installation
If you don't feel like manually installing the app you can check out the app at [grocery app heroku](https://grocery-todo.herokuapp.com/) else follow the below steps:
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copy in the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- In your terminal, cd into the directory you just created
- Type ```npm install``` to install all dependencies
- Last, but not least, type ```npm start``` to run the app locally.

- To look at the code, just open up the project in your favorite code editor!
## Folder Structure

After creation, your project should look like this:

```
grocery-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    lol2.png
    manifest.json
    robots.txt
    screenshot.png
  src/
    components/
        GroceryItem/
	    GroceryItem.js
	    package.json
	    style.css
	GroceryList/
	    GroceryList.js
	    package.json
	    style.css  
	InputForm/
	    InputForm.js
	    package.json
	    style.css
	ProgressBar/
	    ProgressBar.js
	    package.json
	    style.css  
	ToggleButtons/
	    ToggleButtons.js
	    package.json
	    style.css            
    App.css
    App.js
    App.test.js
    index.css
    index.js
    
```

## Components 
### Grocery Item 
It is a class component and is being used to display a particular item, and the action of toggling and deleting them
### Grocery List
Grocery List is a functional component and take cares of the list as a whole, *Grocery Item* is an iterative child for it.
### Input Form
Input form is a functional component and uses **useState** hook for maintaining its state. It is responsible for getting the input from the user and then storing it in the main state.
### Progress Bar
Progress bar is again a functional component and is responsible for showing the user, the items left to buy in the list
### Toggle Buttons
Toggle Buttons is a functional component and are used to filter the list based on the 3 available criteria : **All**,**Active**,**Completed**


