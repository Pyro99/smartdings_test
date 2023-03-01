import {
  front_shopping_window,
  left_shopping_window,
  right_shopping_window,
  shirt_image,
  shoe_image,
} from './constants';

export const windowPages = [
  {
    id: 0,
    name: 'Left Shopping Window',
    accessories: Math.ceil(Math.random() * 20),
    url: left_shopping_window,
  },
  {
    id: 1,
    name: 'Right Shopping Window',
    accessories: Math.ceil(Math.random() * 20),
    url: right_shopping_window,
  },
  {
    id: 2,
    name: 'Front Shopping Window',
    accessories: Math.ceil(Math.random() * 20),
    url: front_shopping_window,
  },
  {
    id:"tshirts",
    name : 'T-shirts',
    accessories :20,
  },
  {
    id:"shoes",
    name : 'Shoes',
    accessories :20,
  }
];

export const ShirtList = {
  id: 1,
  brandName: 'H&M',
  description: 'Men Pure Cotton Shirt',
  price: 599,
  image: shirt_image,
};

export const ShoeList = {
  id: 1,
  brandName: 'Nike',
  description: "Men's Running Shoes",
  price: 5999,
  image: shoe_image,
};


export const prevData = [...windowPages];
export const filterData = windowPages.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
