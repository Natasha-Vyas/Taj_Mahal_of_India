import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  brandName = '';
  categories: any[] = [];
  openIndex: number | null = null;
  hoverIndex: number | null = null;
  private static readonly DATA = {
    brandName: 'Taj Mahal of India',
    menu: [
      {
        menu: [
          {
            superCategory: [
              {
                category: [
                  {
                    categoryName: 'Indian Bread Naan',
                    routeName: 'Indian Bread Naan',
                    note: '',
                    items: [
                      { itemName: 'Naan', itemDescription: 'Freshly baked in charcoal clay oven', itemPrice: '2.50' },
                      { itemName: 'Garlic Naan', itemDescription: 'Bread topped with garlic & cilantro and baked in oven', itemPrice: '2.95' },
                      { itemName: 'Onion Naan', itemDescription: 'Stuffed with chopped onions &cliantro & mild spices', itemPrice: '2.95' },
                      { itemName: 'Paratha', itemDescription: 'Multi flavor flaky homemade bread', itemPrice: '2.50' },
                      { itemName: 'Pashwari Naan', itemDescription: 'Stuffed with dry fruits', itemPrice: '4.95' },
                      { itemName: 'Aloo Paratha', itemDescription: 'Stuffed with spices & potato', itemPrice: '4.95' },
                      { itemName: 'Keema Naan', itemDescription: 'Stuffed with the Meat & Herbs', itemPrice: '4.95' },
                      { itemName: 'Cheese Naan', itemDescription: 'Stuffed with Mozarella Cheese', itemPrice: '4.95' },
                      { itemName: 'Zatar Naan', itemPrice: '2.95' }
                    ]
                  },
                  {
                    categoryName: 'Rice & Biryani',
                    routeName: 'Rice & Biryani',
                    note: '',
                    items: [
                      { itemName: 'Basmati Rice', itemPrice: '2.00' },
                      { itemName: 'Green peas with rice', itemPrice: '4.99' },
                      { itemName: 'Pulao Rice', itemDescription: 'Highly aromatic saffron rice', itemPrice: '4.99' },
                      { itemName: 'Chicken Biryani', itemDescription: 'Chicken cooked with aromatic rice saffron raisins almond garnished with crispy onion flakes', itemPrice: '10.99' },
                      { itemName: 'Lamb Biryani', itemDescription: 'Tender lamb cooked aromatic rice saffron raisins almond garnished with crispy onion flakes', itemPrice: '12.99' },
                      { itemName: 'Shrimp Biryani', itemDescription: 'shrimp cooked with aromatic rice saffron raisins almond garnished with crispy onion flakes', itemPrice: '13.99' },
                      { itemName: 'Mix Veg. Egg Pulau rice', itemPrice: '9.99' },
                      { itemName: 'Vegetable Biryani', itemDescription: 'Vegetable Rice', itemPrice: '9.99' }
                    ]
                  },
                  {
                    categoryName: 'Tandoori Indian B.B.Q',
                    routeName: 'Tandoori Indian B.B.Q',
                    note: '',
                    items: [
                      { itemName: 'Mix Grill', itemDescription: 'Chicken tandoori, chicken &lamb tikka, sheek kabob & prawn', itemPrice: '12.95' },
                      { itemName: 'Tandoori Chicken', itemDescription: 'World-famous chicken with bone marinated in mild herbs & spices, then roasted in oven', itemPrice: '10.95' },
                      { itemName: 'Chicken Tikka', itemDescription: 'Boneless chicken pieces, marinated in mild herbs species & roasted in the oven', itemPrice: '10.95' },
                      { itemName: 'Sheek Kabob', itemDescription: 'Finely ground meat mixed with fresh herbs then roasted in the oven', itemPrice: '10.95' },
                      { itemName: 'Shrimp Tandoori', itemDescription: 'Jumbo shrimp marinated in Tandoori spices & herbs then roasted', itemPrice: '13.95' },
                      { itemName: 'Fish Tandoori ', itemDescription: 'Boneless fresh fish marinated with ginger tandoori herbs & spices then roasted', itemPrice: '13.95' }
                    ]
                  },
                  {
                    categoryName: 'Condiments',
                    routeName: 'Condiments',
                    note: '',
                    items: [
                      { itemName: 'Raita', itemDescription: 'Yogurt shredded cucumber & carrot', itemPrice: '2.50' },
                      { itemName: 'Mango Chutney', itemDescription: 'Homemade mango chutney', itemPrice: '3.00' },
                      { itemName: 'Mango Pickle (spicy)', itemPrice: '2.50' },
                      { itemName: 'Lime Pickle (spicy)', itemPrice: '2.50' },
                      { itemName: 'Mix pickle', itemPrice: '2.50' },
                      { itemName: 'Tamarind chutney', itemPrice: '2.50' },
                      { itemName: 'Mint chutney', itemPrice: '2.50' }
                    ]
                  },
                  {
                    categoryName: 'Desserts',
                    routeName: 'Desserts',
                    note: '',
                    items: [
                      { itemName: 'Rasa Malai', itemDescription: 'Our own freshly made soft cheese patties drenched in thick sweet milk laced', itemPrice: '2.95' },
                      { itemName: 'Gulab Jamun', itemDescription: 'Made from fresh milk then dipped in flavor syrup', itemPrice: '2.95' },
                      { itemName: 'Kulfi', itemDescription: 'Homemade traditional Indian icecream', itemPrice: '2.95' },
                      { itemName: 'Mango Icecream', itemPrice: '2.95' },
                      { itemName: 'Gajar Halwa', itemDescription: 'A traditional carrot & raisin halwa served warm', itemPrice: '2.95' },
                      { itemName: 'Rice Pudding', itemPrice: '2.95' }
                    ]
                  },
                  {
                    categoryName: 'Special Order',
                    routeName: 'Special Order',
                    note: '',
                    items: [
                      { itemName: 'Vindaloo', itemDescription: 'Meat & potato cooked in spicy sauce& lemon juice', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Madras', itemDescription: 'Cooked in tomato onion sauce top with cilantro', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Karachi', itemDescription: 'meat pieces stir-fried with herbs spices tomato bell pepper ginger cilantro', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Jhal Freize', itemDescription: 'Meat pieces stir with herbs spices tomato bell pepper ginger cilantro', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Roganjosh', itemDescription: 'Tender meat with spices onion & tomato', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Dopiaza', itemDescription: 'meat with extra onion slices', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Tikka Masala', itemDescription: 'Tandoori meat cooked in a cream', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Makhani', itemDescription: 'Mesquite broiled meat cooked in tomato', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Korma', itemDescription: 'Boneless meat cooked in yogurt saffron cream sauce garnished with almond flakes & raisins', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Razalla', itemDescription: 'Cooked in an almond creamy sauce with potato saffron raisins spices &a lot of chilies flavor', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Dhansak', itemDescription: 'Sweet & Sour spicy chicken curry cooked with thick lentil sauce & lemon juice', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Bhuna', itemDescription: 'boneless meat cooked in spices tomato bell pepper & cilantro', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Achaar', itemDescription: 'Marinated in vinegar & hot red chilies garlic cooked in very exotic sauce', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Coconut Malai Curry', itemDescription: 'lots exotic flavor & thick coconut sauce', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Keema Curry', itemDescription: 'Garnished with cilantro ground sauce', price3: '12.95' },
                      { itemName: 'Sag', itemDescription: 'Fresh spinach cooked in curry sauce', price1: '10.95', price2: '11.95', price3: '12.95' },
                      { itemName: 'Green Curry Mintha', price1: '10.95', price2: '11.95', price3: '12.95' }
                    ]
                  },
                  {
                    categoryName: 'Drinks',
                    routeName: 'Drinks',
                    note: '',
                    items: [
                      { itemName: 'Mango Lassi', itemDescription: 'Mango & Yogurt', itemPrice: '3.50' },
                      { itemName: 'Sweet & Salty Lassi', itemPrice: '3.00' },
                      { itemName: 'Masala Chai', itemDescription: 'Indian tea brewed with Cardamom ginger milk', itemPrice: '2.50' },
                      { itemName: 'Indian Iced Tea', itemPrice: '2.50' },
                      { itemName: 'Tea & Coffee', itemPrice: '2.50' },
                      { itemName: 'Coke, Diet Coke, Fanta, Sprite, and Perrier water', itemPrice: '2.50' },
                      { itemName: 'Mango or Orange Juice', itemPrice: '3.00' },
                      { itemName: 'Lemonade (Homemade)', itemPrice: '2.50' }
                    ]
                  },
                  {
                    categoryName: 'Appetizers',
                    routeName: 'Appetizers',
                    note: '',
                    items: [
                      { itemName: 'Vegetable Samosa', itemDescription: 'patties filled with potato', itemPrice: '2.95' },
                      { itemName: 'Meat Samosa', itemDescription: 'patties filled with meat (beef)', itemPrice: '3.95' },
                      { itemName: 'Onion Bhaji', itemDescription: 'deep-fried onion balls', itemPrice: '2.50' },
                      { itemName: 'Hummus', itemDescription: 'garbanzo dip with olive oil dressing served with naan', itemPrice: '4.95' },
                      { itemName: 'Papadam', itemDescription: 'crispy lentil waier served with tamarind and mint chutney', itemPrice: '2.00' },
                      { itemName: 'Vegetable soup', itemPrice: '3.50' },
                      { itemName: 'Chicken Vegetable Soup', itemPrice: '3.95' },
                      { itemName: 'Mix Salad', itemPrice: '4.50' },
                      { itemName: 'Chicken Tandoori Salad', itemPrice: '7.50' },
                      { itemName: 'Masala Dosa', itemDescription: 'Green peas made from rice lentils (available after 5pm everyday)', itemPrice: '8.50' },
                      { itemName: 'Bhel Puri', itemDescription: 'Onion, tomato, cilantro, and mixed bhel (available after 5pm everyday )', itemPrice: '5.00' },
                      { itemName: 'Idly', itemDescription: 'lentil and rice, patties served with chutney and sambar (available after 5pm everyday)', itemPrice: '4.95' },
                      { itemName: 'Sambar', itemPrice: '3.95' }
                    ]
                  },
                  {
                    categoryName: 'Vegetable Delights',
                    routeName: 'Vegetable Delights',
                    note: '',
                    items: [
                      { itemName: 'Sag Tofu', itemDescription: 'Spinach with tofu', itemPrice: '9.95' },
                      { itemName: 'Sag Paneer', itemDescription: 'Spanish with cheese & cream', itemPrice: '9.95' },
                      { itemName: 'Sag Aloo', itemDescription: 'Spanish & potato', itemPrice: '8.95' },
                      { itemName: 'Sag Channa', itemDescription: 'Spinach & garbanzo beans', itemPrice: '8.95' },
                      { itemName: 'Sag Dal', itemDescription: 'Spinach with lentil', itemPrice: '8.95' },
                      { itemName: 'Navaranat Korma', itemDescription: 'Mix Vegetables in creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Mix Vegetables Masala', itemDescription: 'Tikka Masala creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Mix Vegetable Curry', itemDescription: 'In Curry', itemPrice: '8.95' },
                      { itemName: 'Mix Vegetable Coconut', itemPrice: '8.95' },
                      { itemName: 'Mix Vegetables Lentil', itemDescription: 'Mix vegetables in lentil sauce', itemPrice: '8.95' },
                      { itemName: 'Eggplant Bhurta', itemDescription: 'Roasted eggplant cooked in spices in herbs', itemPrice: '8.95' },
                      { itemName: 'Dal Tadka', itemDescription: 'Lentils with butter & garlic', itemPrice: '9.95' },
                      { itemName: 'Dal Makhani', itemDescription: '5 kinds of mixed lentils cooked in spices tomato &creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Channa Masala', itemDescription: 'Garbanzo cooked in tomato&Spices', itemPrice: '8.95' },
                      { itemName: 'Okra Bhuna', itemDescription: 'Okra cooked with onion tomato in curry sauce', itemPrice: '8.95' },
                      { itemName: 'Cabbage & Peas', itemDescription: 'Shredded cabbages & peas in light spices', itemPrice: '8.95' },
                      { itemName: 'Tofu & Peas', itemDescription: 'In creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Matar Paneer', itemDescription: 'Peas & cheese cooked in creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Aloo Matar', itemDescription: 'Peas & potato cooked in curry sauce', itemPrice: '8.95' },
                      { itemName: 'Malai Kofta', itemDescription: 'cooked in creamy sauce', itemPrice: '9.95' },
                      { itemName: 'Bombay Aloo', itemDescription: 'Potato onion cooked in curry sauce', itemPrice: '8.95' },
                      { itemName: 'Aloo Gobi', itemDescription: 'Cauliflower with potato in curry sauce', itemPrice: '8.95' },
                      { itemName: 'Aloo Gobi Masala', itemDescription: 'Cauliflower with potato cooked in tikka masala sauce', itemPrice: '9.95' },
                      { itemName: 'Panner Tikka Masala', itemDescription: 'Homemade cheese pieces cooked in Tikka Masala Sauce', itemPrice: '9.95' },
                      { itemName: 'Tofu Tikka Masala', itemDescription: 'Tofu cooked in tikka masala sauce', itemPrice: '9.95' },
                      { itemName: 'Tofu Coco Mali curry', itemPrice: '8.95' },
                      { itemName: 'Green chilly Bhuna', itemPrice: '8.95' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  ngOnInit(): void {
    this.brandName = MenuComponent.DATA.brandName;
    this.categories =
      MenuComponent.DATA.menu?.[0]?.menu?.[0]?.superCategory?.[0]?.category ?? [];
    this.openIndex = 0;
  }

  // clicked header toggles open/close for one category
  toggleCategory2(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
