import './style.scss';

const template = require('./hotelrooms.pug');

const hotelrooms = 
  [
    "Luxury",
    "Standart",
    "Economy",
  ];


document.querySelector("hotelRooms").innerHTML = template(hotelrooms);