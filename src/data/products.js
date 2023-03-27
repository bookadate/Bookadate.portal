import product8 from '../assets/img/product8.jpg';
import product9 from '../assets/img/product 9.jpg';
import starter1 from '../assets/img/Starter1.jpg';
import starter2 from '../assets/img/Starter2.jpg';
import starter3 from '../assets/img/Starter3.jpg';
import bottle_of_red_wine from '../assets/img/product1.jpg';
import bottle_of_white_wine from '../assets/img/product2.jpg';
import drinks3 from '../assets/img/drink3.jpeg';
import salad from '../assets/img/Salad Starter.jpeg';
import setMenus from '../assets/img/setMenus.png';
import cdp3 from '../assets/img/cdp3.png';
import lunch from '../assets/img/lunch.png';
import mushroom from '../assets/img/Mushroom starter.jpeg';
import prawns from '../assets/img/Prawns Starter .jpeg';
import aperolSpritz from '../assets/img/aperolSpritz.jpeg';
import cocktails from '../assets/img/coctails.png';
import bottomlessDrinks from '../assets/img/bottomlessDrinks.jpeg';
import eggplant from '../assets/img/Mains Eggplant .jpeg';
import potatoesandpasta from '../assets/img/Mains Potatoes and Pasta .jpeg';
import salmonfish from '../assets/img/Mains Salmon Fish .jpeg';
import tickets from '../assets/img/tickets.jpeg';

const products = [
  {
    id: 1,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Set Menus',
    productLine: 1,
    img: setMenus,
    category: 'starter',
    createDate: '26.02 2023',
    status: 'Confirmed',
    statusColor: 'green',
    description: '10% Discount',
    productDetails: 'Tomato varieties & mozzarella',
    sales: 100,
    advertisingCycle:'24 days',
    price: 3,
    stock: 62,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
  },
  {
    id: 2,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Canapes',
    productLine: 2,
    category: 'starter',
    img: cdp3,
    createDate: '26.02 2023',
    status: 'Confirmed',
    statusColor: 'orange',
    description: '10% Discount',
    productDetails: 'Fresh herbs and Feta cheese',
    sales: 100,
    advertisingCycle:'24 days',
    price: 3,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 48,
  },
  {
    id: 3,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Set Lunch',
    productLine: 3,
    img: lunch,
    category: 'starter',
    createDate: '26.02.2023',
    status: 'Confirmed',
    statusColor: 'orange',
    description: '20%',
    productDetails: 'Fresh prawns and salmon salad',
    sales: 70,
    advertisingCycle:'12 days',
    price: 3,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 57,
  },
  {
    id: 4,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Glass of Prosecco',
    productLine: 4,
    img: '/assets/img/goose-breast-thumb.jpg',
    category: 'desserts',
    createDate: '26.02.2023',
    status: 'Pending Order ',
    statusColor: 'orange',
    description: 'Complimentary',
    productDetails: 'Chocolate cake with berries',
    sales: 1014,
    advertisingCycle:'30 days',
    price: 7,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 41,
  },
  {
    id: 23,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'All you can drink Aperol Spritz',
    productLine: 5,
    category: 'drinks',
    img: aperolSpritz,
    createDate: '26.02.2023',
    status: 'Pending Order',
    statusColor: 'green',
    description: '25% Discount',
    productDetails: 'Glass of Prosecco',
    sales: 188,
    advertisingCycle:'30 days',
    advertiseStatus:'Advertised',
    price: 15,
    priceShow: '£ 15',
    advertiseStart: new Date('02/26/2023 12:00'),
    advertiseEnd: new Date('04/02/2020'),
    stock: 23,
  },
  {
    id: 81,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Tickets',
    productLine: 8,
    img: tickets,
    category: 'mains',
    createDate: '27.02.2023',
    status: 'Pending Order',
    statusColor: 'green',
    description: '20%',
    productDetails: 'Baked vegetables topped with  parmesan cheese',
    sales: 188,
    advertisingCycle:'30 days',
    price: 12,
    priceShow: '£ 15',
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 21,
  },
  {
    id: 5,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Bottle of Red wine',
    productLine: 5,
    category: 'Cupcakes',
    img: bottle_of_red_wine,
    createDate: '02.06.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'French Bordeaux Cabernet Sauvignon 2005',
    productDetails: 'French Bordeaux Cabernet Sauvignon 2005',
    sales: 985,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 23,
  },
  {
    id: 6,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Bottle of White Wine',
    productLine: 6,
    img: bottle_of_white_wine,
    category: 'Desserts',
    createDate: '14.07.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'New Zealand Sauvignon Blanc 2014',
    productDetails: 'New Zealand Sauvignon Blanc 2014',
    sales: 962,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 34,
  },
  {
    id: 7,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Napoleonshat',
    productLine: 7,
    img: '/assets/img/napoleonshat-thumb.jpg',
    category: 'Desserts',
    createDate: '05.02.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Cheesecake with fresh berries and mint for dessert',
    productDetails: 'Cheesecake with fresh berries and mint for dessert',
    sales: 921,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 31,
  },
  {
    id: 8,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Cheesecake',
    productLine: 8,
    img: product8,
    category: 'Cakes',
    createDate: '18.08.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'Delicious vegan chocolate cake',
    productDetails: 'Delicious vegan chocolate cake',
    sales: 887,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 21,
  },
  {
    id: 9,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Financier',
    productLine: 9,
    img: product9,
    category: 'Cakes',
    createDate: '15.03.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    productDetails:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 865,
    advertisingCycle:'30 days',
    price: 11,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 53,
  },
  {
    id: 10,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Genoise',
    productLine: 10,
    img: '/assets/img/genoise-thumb.jpg',
    category: 'desserts',
    createDate: '11.06.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Christmas fruit cake, pudding on top',
    productDetails: 'Christmas fruit cake, pudding on top',
    sales: 824,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 55,
  },
  {
    id: 11,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Gingerbread',
    productLine: 11,
    img: '/assets/img/gingerbread-thumb.jpg',
    category: 'Cakes',
    createDate: '10.04.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'Wedding cake decorated with donuts and wild berries',
    productDetails: 'Wedding cake decorated with donuts and wild berries',
    sales: 714,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 12,
  },
  {
    id: 12,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Magdalena',
    productLine: 12,
    img: '/assets/img/magdalena-thumb.jpg',
    category: 'Cakes',
    createDate: '22.07.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Christmas fruit cake, pudding on top',
    productDetails: 'Christmas fruit cake, pudding on top',
    sales: 702,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 14,
  },
  {
    id: 13,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Parkin',
    productLine: 8,
    img: '/assets/img/parkin-thumb.jpg',
    category: 'Cakes',
    createDate: '22.08.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    productDetails:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 689,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 78,
  },
  {
    id: 14,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Streuselkuchen',
    productLine: 23,
    img: '/assets/img/streuselkuchen-thumb.jpg',
    category: 'Cakes',
    createDate: '22.07.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Delicious vegan chocolate cake',
    productDetails: 'Delicious vegan chocolate cake',
    sales: 645,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 55,
  },
  {
    id: 15,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Tea loaf',
    productLine: 22,
    img: '/assets/img/tea-loaf-thumb.jpg',
    category: 'Cakes',
    createDate: '10.09.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'Cheesecake with fresh berries and mint for dessert',
    productDetails: 'Cheesecake with fresh berries and mint for dessert',
    sales: 632,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 20,
  },
  {
    id: 16,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Merveilleux',
    productLine: 24,
    img: '/assets/img/merveilleux-thumb.jpg',
    category: 'Cakes',
    createDate: '18.02.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'Chocolate cake with mascarpone',
    productDetails: 'Chocolate cake with mascarpone',
    sales: 621,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 6,
  },
  {
    id: 17,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Fruitcake',
    productLine: 25,
    img: '/assets/img/fruitcake-thumb.jpg',
    category: 'Cakes',
    createDate: '12.01.2019',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Chocolate cake with berries',
    productDetails: 'Chocolate cake with berries',
    sales: 595,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 17,
  },
  {
    id: 18,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Bebinca',
    productLine: 26,
    img: '/assets/img/bebinca-thumb.jpg',
    category: 'Cakes',
    createDate: '04.02.2019',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: 'Homemade cheesecake with fresh berries and mint',
    productDetails: 'Homemade cheesecake with fresh berries and mint',
    sales: 574,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 16,
  },
  {
    id: 19,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Cremeschnitte',
    productLine: 29,
    img: '/assets/img/cremeschnitte-thumb.jpg',
    category: 'desserts',
    createDate: '04.03.2018',
    status: 'Reservations Confirmed',
    statusColor: 'green',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    productDetails: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 562,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 9,
  },
  {
    id: 20,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Soufflé',
    productLine: 30,
    img: '/assets/img/souffle-thumb.jpg',
    category: 'Cupcakes',
    createDate: '16.01.2018',
    status: 'Reservations Confirmed',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    productDetails: 'Wedding cake with flowers Macarons and blueberries',
    sales: 524,
    advertisingCycle:'30 days',
    price: 12,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 14,
  },
  {
    id: 21,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Cocktails',
    productLine: 5,
    category: 'drinks',
    img: cocktails,
    createDate: '02.06.2018',
    status: 'Reservations Confirmed',
    statusColor: 'primary',
    description: '2-4-1 Cocktail Discount',
    productDetails: 'French Bordeaux Cabernet Sauvignon 2005',
    sales: 985,
    advertisingCycle:'30 days',
    advertiseStatus:'Activated',
    price: 14,
    priceShow: '£ 14',
    advertiseStart: new Date('02/04/2023 12:00'),
    advertiseEnd: new Date('28/05/2023 18:00'),
    stock: 23,
  },
  {
    id: 22,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Bottomless Drinks',
    productLine: 5,
    category: 'drinks',
    img: bottomlessDrinks,
    createDate: '02.06.2018',
    status: 'Reservations Confirmed',
    statusColor: 'primary',
    description: 'Complimentary Drinks',
    productDetails: 'Bottle of White Wine',
    sales: 985,
    advertisingCycle:'30 days',
    advertiseStatus:'Activated',
    price: 12,
    priceShow: 'Free',
    advertiseStart: new Date('28/05/2023 12:00'),
    advertiseEnd: new Date('25/06/2023 06:00'),
    stock: 23,
  },
  {
    id: 82,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Tickets',
    productLine: 2,
    category: 'mains',
    img: tickets,
    createDate: '01.04.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: '15%',
    productDetails: 'New Potatoes and red chilli peppers ',
    sales: 1240,
    advertisingCycle:'30 days',
    price: 3,
    priceShow: '£ 15',
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 48,
  },
  {
    id: 83,
    tax: 1,
    shipping: 1.5,
    active: true,
    customerName: 'Paul',
    customerEmail: 'dummyemail@email.com',
    time: '12: 00 pm',
    telephone: '024322448',
    title: 'Tickets',
    productLine: 2,
    category: 'mains',
    img: tickets,
    createDate: '01.04.2018',
    status: 'Reservations Pending',
    statusColor: 'orange',
    description: '10%',
    productDetails: 'Fresh salmon with seasoned seaweed',
    sales: 1240,
    advertisingCycle:'30 days',
    price: 3,
    priceShow: '£ 15',
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    stock: 48,
  },
];

export const bestSellerProducts = [
  {id:1, name:'menu 2', sales:188, ac:'30 days'},
  {id:2, name:'canapé', sales:100, ac:'24 days'},
  {id:3, name:'menu 1', sales:70, ac:'12 days'},
  {id:3, name:'menu 1', sales:70, ac:'12 days'},
  {id:3, name:'Bottle of Chablis', sales:70, ac:'12 days'},
  {id:3, name:'Bottle of Chablis', sales:70, ac:'12 days'},
  {id:3, name:'Bottle of Chablis', sales:70, ac:'12 days'},
  {id:2, name:'canapé', sales:100, ac:'24 days'},
  {id:2, name:'canapé', sales:100, ac:'24 days'},
  {id:2, name:'canapé', sales:100, ac:'24 days'},
  {id:3, name:'menu 1', sales:70, ac:'12 days'},
  {id:1, name:'menu 2', sales:188, ac:'30 days'},
  {id:3, name:'Complimentary drink', sales:70, ac:'12 days'},
]
export default products;