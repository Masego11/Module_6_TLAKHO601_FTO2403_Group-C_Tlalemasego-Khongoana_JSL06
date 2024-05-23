# [JSL06] Submission: CodeCuisine Menu Display System Challenge

## Objectives:

- Create and use functions to dynamically populate the menu items on the page.
- Implement a callback function to handle adding items to the order.
- Use closures to maintain the state of the order.
- Utilize function expressions and anonymous functions.
- Call built-in functions and create custom functions to manage the menu and order system.

## Breakdown:
**Javascript**

- Got the menu container element from the HTML by ID
- introduced the for loop to loop through category and its item in the menu
- created the element 'h2' to represent the category
- Set text context of the category element to "category"
- Appended the category element to the menu container
- created the 'ul' element to represent a list of items
- appended 'itemsList' to the menu container
- created a function to loop through each item in the category to create list items
- created "li" list item elements
- Set the text content of the list item to item
-  added an event listener to add items to order
- appended the list item to the list of items
- intialized the order total to 0
- Fetched the order items list and order total elements from the HTML
- Create 'list' item for the order
- Set the text content of the list item to item name
- Append the list item to the order items list 
- Parsed current total from the text content of orderItemsTotal or default to 0 if it cannot be parsed
- retrieved item price by calling getItemppPrice()
- calculated added items by adding itemPrice to currentTotal
- Updated orderItemsTotal to reflect updatedTotal set to two decimal places.
- Introduced a function with items pricing 
- returned the price of an item if it is found within the function, and to return zero if not found
- intialized menu system through the use of a funtion
- called init function to start the menu system

**CSS**

- changed font to italics
- changes background colors to different shades of grey

## Challenges 
- Calculating and adding the total price
- Adding item pricing. 