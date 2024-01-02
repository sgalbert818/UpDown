const foodMenu = [
    {
        category: 'starters',
        menu: [
            {
                id: 1,
                title: 'pretzel bites',
                category: 'starters',
                price: 12,
                desc: 'Buttery pretzel bites served with beer cheese, honey mustard, and cinnamon cream cheese frosting.',
            },
            {
                id: 2,
                title: 'nachos',
                category: 'starters',
                price: 16,
                desc: 'A bed of tortilla chips topped with salsa, beef or chicken, black beans, lettuce, pico, sour cream, queso, black olives, and guacamole.',
            },
            {
                id: 3,
                title: 'basket of fries',
                category: 'starters',
                price: 8,
                desc: 'A basket of french fries. Toss in spicy dill, cajun, zesty ranch, or southwest seasoning for $1.50. Comes with ketchup and ranch.',
            },
            {
                id: 4,
                title: 'spinach dip',
                category: 'starters',
                price: 12,
                desc: 'Warm spinach artichoke dip made in house with parmesan, asiago, swiss, and fontina cheeses. Served with carrots, celery, and choice of tortilla or pita chips.',
            },
            {
                id: 5,
                title: 'chips + dip',
                category: 'starters',
                price: 12,
                desc: 'Tortilla chips served with salsa, guacamole, and queso.',
            },
        ]
    }, 
    {
        category: 'pizza',
        menu: [
            {
                id: 1,
                title: 'buffalo chicken pizza',
                category: 'pizza',
                price: 16,
                desc: 'Grilled chicken tossed in wing sauce. Served with a side of ranch, blue cheese or topped with blue cheese crumbles.',
            },
            {
                id: 2,
                title: 'bbq pizza',
                category: 'pizza',
                price: 18,
                desc: 'Grilled chicken tossed in BBQ sauce with diced onions and our house blend cheese.',
            },
            {
                id: 3,
                title: 'hawaiian',
                category: 'pizza',
                price: 14,
                desc: 'Topped with Canadian bacon, pineapple and cream cheese.',
            },
            {
                id: 4,
                title: 'bacon cheeseburger',
                category: 'pizza',
                price: 16,
                desc: 'Splash of mustard, hamburger, roma tomato, red onion, jalapeno bacon, dill pickle chips, sprinkled with cheddar.',
            },
            {
                id: 5,
                title: 'ballpark',
                category: 'pizza',
                price: 14,
                desc: 'Garlic butter, mustard, cajun sausage, peppperoncini. sauerkraut, cheddar cheese.',
            },
            {
                id: 6,
                title: 'el diablo',
                category: 'pizza',
                price: 12,
                desc: 'Spicy red sauce, spicy beef, cajun sausage, and jalapeno.',
            },
            {
                id: 7,
                title: 'breakfast for dinner',
                category: 'pizza',
                price: 13,
                desc: 'Alfredo sauce, maple bacon, breakfast sausage, scrambled egg, chopped onions, and green peppers.',
            },
            {
                id: 8,
                title: 'five cheese',
                category: 'pizza',
                price: 10,
                desc: 'Romesco sauce, fresh mozzarella, fontina, asiago, shaved parmesan.',
            },
            {
                id: 9,
                title: 'veggie supreme',
                category: 'pizza',
                price: 12,
                desc: 'Mushroom, onion, green pepper, black olive, sweer red pepper, and artichoke hearts.',
            },
            {
                id: 13,
                title: 'tex mex',
                category: 'pizza',
                price: 12,
                desc: 'Ground beef, tomatoes, olives, cheddar, shredded lettuce, served with sides of salsa and sour cream.',
            },
            
        ]
    },
    {
        category: 'desserts',
        menu: [
            {
                id: 1,
                title: 'funnel cake fries',
                category: 'desserts',
                price: 8,
                desc: 'Fried to perfection. Topped with powdered sugar and served with strawberry puree.',
            },
            {
                id: 2,
                title: 'ice cream sundae',
                category: 'desserts',
                price: 10,
                desc: 'Two scoops of vanilla bean ice cream topped with chocolate syrup, chopped peanuts, house made whipped cream, and a cherry.',
            },
            {
                id: 3,
                title: 'caramel pretzel bites',
                category: 'desserts',
                price: 8,
                desc: 'Pretzel bites tossed in salted caramel sugar served with caramel sauce, chocolate fudge, and whipped cream.',
            }, 
        ]
    },
]

const drinkMenu = [
    {
        category: 'on draft',
        menu: [
            {
                id: 1,
                title: 'coors light',
                category: 'on draft',
                price: 6,
                desc: '4.2% ABV - 10 IBU - Coors Brewing Company - Golden, CO',
            },
            {
                id: 2,
                title: 'blue moon',
                category: 'on draft',
                price: 7,
                desc: '5.4% ABV - 9 IBU - Blue Moon Brewing Company - Denver, CO',
            },
            {
                id: 3,
                title: 'mango cart',
                category: 'on draft',
                price: 7,
                desc: '4% ABV - 10 IBU - Golden Road Brewing - Los Angeles, CA',
            }
        ]
    }, 
    {
        category: 'cocktails',
        menu: [
            {
                id: 1,
                title: 'cosmo',
                category: 'cocktails',
                price: 9,
                desc: 'A classic cocktail made with titos, carnberry juice, lime juice, and a splash of triple sec.',
            },
            {
                id: 2,
                title: 'moscow mule',
                category: 'cocktails',
                price: 9,
                desc: 'Titos vodka with ginger beer and a splash of fresh lime juice.',
            },
            {
                id: 3,
                title: 'tequila sunrise',
                category: 'cocktails',
                price: 10,
                desc: 'Casamigos tequila with orange juice, grenadine, and a cherry.',
            },
            {
                id: 4,
                title: 'espresso martini',
                category: 'cocktails',
                price: 12,
                desc: 'Titos vodka, kahlua, and espresso.',
            },
            {
                id: 5,
                title: 'house margarita',
                category: 'cocktails',
                price: 12,
                desc: 'Casamigos tequila with our house-made margarita mix. Regular, skinny, or spicy.',
            },
            {
                id: 6,
                title: 'mint mojito',
                category: 'cocktails',
                price: 11,
                desc: 'Rum, simple syrup, and soda muddled with fresh mint.',
            },
        ]
    },
    {
        category: 'bottles + cans',
        menu: [
            {
                id: 1,
                title: 'white claws',
                category: 'bottles + cans',
                price: 8,
                desc: 'Mango, Peach, Lime, Passionfruit, or Watermelon - 4.5% ABV',
            },
            {
                id: 2,
                title: 'high noon',
                category: 'bottles + cans',
                price: 10,
                desc: 'Peach or Watermelon - 4.5% ABV',
            },
            {
                id: 3,
                title: 'nutrl',
                category: 'bottles + cans',
                price: 8,
                desc: 'Orange, Pineapple, or Watermelon - 4.5% ABV',
            },
        ]
    },
    {
        category: 'shots',
        menu: [
            {
                id: 1,
                title: 'green tea shot',
                category: 'shots',
                price: 6,
                desc: 'A classic combination of jameson, peach schnapps, and sour mix.',
            },
            {
                id: 2,
                title: 'PB + J',
                category: 'shots',
                price: 7,
                desc: 'Raspberry liqueur and skrewball peanut butter whiskey.',
            },
            {
                id: 3,
                title: 'mexican mouthwash',
                category: 'shots',
                price: 8,
                desc: 'Casamigos tequila and rumpleminze.',
            },
            {
                id: 4,
                title: 'vegas bomb',
                category: 'shots',
                price: 10,
                desc: 'Crown royale peach, peach schnapps, cranberry juice, and redbull.',
            },
        ]
    }
]


const menuCategory = document.querySelector('.menu-category-box');
const menuItem = document.querySelector('.menu-item');
const foodBtn = document.querySelector('.food-menu-btn');
const drinkBtn = document.querySelector('.drink-menu-btn');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(foodMenu);
});

drinkBtn.addEventListener('click', function() {
    drinkBtn.style.borderColor = colorButton();
    foodBtn.style.borderColor = 'black';
    displayMenuItems(drinkMenu);
})

foodBtn.addEventListener('click', function() {
    foodBtn.style.borderColor = colorButton();
    drinkBtn.style.borderColor = 'black';
    displayMenuItems(foodMenu);
})

function displayMenuItems(menuInput) {
    let categories = []
    let arrayLength = menuInput.length;
    for (i=0; i<menuInput.length; i++) {
        categories.push(`<div class="menu-category-header">
                        <h1>${menuInput[i].category}</h1>
                        </div>`);
        for (j=0; j<menuInput[i].menu.length; j++) {
            if (menuInput[i].category == (menuInput[0].category)) {
                categories.splice(1, 0, (`<div class="section">
                <div class="menu-item">
                    <div class="menu-item-title">
                        <h2>${menuInput[i].menu[j].title}</h2>
                        <h2>${menuInput[i].menu[j].price}</h2>
                    </div>
                    <div class="menu-item-description">
                        <h4>${menuInput[i].menu[j].desc}</h4>
                    </div>
                </div>
            </div>`));
            } else if ((menuInput[i].category == (menuInput[i].menu[j].category)) && (i != (menuInput.length-1))) {
                categories.splice((categories.length) - ((arrayLength-i-(arrayLength-1))), 0, (`<div class="section">
                <div class="menu-item">
                    <div class="menu-item-title">
                        <h2>${menuInput[i].menu[j].title}</h2>
                        <h2>${menuInput[i].menu[j].price}</h2>
                    </div>
                    <div class="menu-item-description">
                        <h4>${menuInput[i].menu[j].desc}</h4>
                    </div>
                </div>
            </div>`));
            } else if (i=arrayLength-1) {
                categories.push(`<div class="section">
                <div class="menu-item">
                    <div class="menu-item-title">
                        <h2>${menuInput[i].menu[j].title}</h2>
                        <h2>${menuInput[i].menu[j].price}</h2>
                    </div>
                    <div class="menu-item-description">
                        <h4>${menuInput[i].menu[j].desc}</h4>
                    </div>
                </div>
            </div>`);
            }
        }
    }
    categories = categories.join('');
    menuCategory.innerHTML = categories;
    console.log(arrayLength);
}

function colorButton() {
    let num = Math.floor(Math.random() * 5);
    let color = ''
    if (num == 0) {
        color = '#ff4095'
    }
    if (num == 1) {
        color = '#ff7c13'
    }
    if (num == 2) {
        color = '#ffff00'
    }
    if (num == 3) {
        color = '#86ff00'
    }
    if (num == 4) {
        color = '#00aeff'
    }
    return color;
}