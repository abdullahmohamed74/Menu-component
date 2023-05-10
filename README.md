# Menu app

component to show the menu and categories, using react

## Steps

the flow of the application should look something like this:

- Create a Title component to display the app title.
- Import the menu items data from data.js into your project.
- Set up the menu items data as a state variable in the App.jsx component.
- Pass the menu items state value down to the Menu.jsx component and render a MenuItem component for each item in the menu items array.
- In the MenuItem component, display the image, title, price, and description.
- Set up functionality to get only the unique categories from the menu items data and store them in a separate array, including an "all" category to display all menu items.
- Set up the categories array as a state variable in the App.jsx component.
- Create a Categories component and render a button for each category in the categories array.
- Define a function that takes a category as a parameter and updates the state to show only the menu items that belong to that category.
- Attach the filter function to the category buttons in the Categories component.
- Repeat steps 9-10 until the user has selected a different category or chooses to exit the Menu component.

