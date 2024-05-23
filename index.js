
const menu = {
    Starters: ["Chicken Liver Salad", "Buffalo Winglets"],
    MainCourses: ["Pepperoni Pizza", "Oxtail & Dumplings", "Spaghetti Bolognese"],
    Desserts: ["Jelly Cake", "Cheesecake"]
};

function displayMenuItems(menu) {
const cuisineMenu = document.getElementById('menu');
    
for (const category in menu) {
    const categoryNames = document.createElement('h2');
    categoryNames.textContent = category;
    cuisineMenu.appendChild(categoryNames);

    const itemsList = document.createElement('ul');

    cuisineMenu.appendChild(itemsList);

menu[category].forEach(item => {
    const listItems = document.createElement('li');
    listItems.textContent = item;
    listItems.addEventListener('click', () => addToOrder(item));
    itemsList.appendChild(listItems)
    });
}        
           
};

function addToOrder(itemName) {
    let orderTotal = 0;

    const orderItemsList = document.getElementById('order-items');
    const orderItemsTotal = document.getElementById('order-total');
    const listItems = document.createElement('li');
 
    listItems.textContent = itemName;
    orderItemsList.appendChild(listItems);
  
    const currentTotal = parseFloat(orderItemsTotal.textContent) || 0;
    const itemPrice = getItemPrice(itemName);
    const updatedTotal = currentTotal + itemPrice;
    console.log(updatedTotal, itemPrice)
    orderItemsTotal.textContent = updatedTotal.toFixed(2);

}

function getItemPrice(itemName) {
    const pricing = {
        "Chicken Liver Salad": 80.50,
        "Buffalo Winglets": 90.30,
        "Pepperoni Pizza": 110.00,
        "Oxtail & Dumplings": 180.60,
        "Spaghetti Bolognese": 140.00,
        "Cheesecake": 87.80,
        "Jelly Cake": 72.90,
        
    };
    return pricing[itemName] || 0;
};

function initMenuSystem(menu) {
    displayMenuItems(menu);
}


initMenuSystem(menu);
