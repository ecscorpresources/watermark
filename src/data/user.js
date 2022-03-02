import bird from '../assets/img/02.png';
import horror from '../assets/img/03.png';
import survive from '../assets/img/04.png';
import dragon from '../assets/img/05.png';

import horror1 from '../assets/img/32.png';
import bird1 from '../assets/img/33.png';
import survive1 from '../assets/img/34.png';

export default [
  {
    id: 1,
    name: 'Kelvin',
    reading: [bird, horror, survive, dragon, horror],
    purchased: [dragon, horror, survive],
    totalPublished: 3,
    totalSold: 2488,
    netIncome: 124400,
    payedOut: 83200,
    published: [
      {
        img: horror1,
        category: ['Fiction', 'Horror'],
        title: 'Horror Stories',
        dateCreated: 'July 13, 2020',
        datePublished: 'July 19, 2020',
        quantitySold: 930,
        income: 46500,
        payedOut: 32200,
      },
      {
        img: bird1,
        title: 'Summer Bird Blue',
        category: ['Fiction', 'Romance', 'Thriller'],
        dateCreated: 'Sep 13, 2020',
        datePublished: 'Sep 22, 2020',
        quantitySold: 1074,
        income: 53700,
        payedOut: 41700,
      },
      {
        img: survive1,
        title: 'Surviving The Abyss',
        category: ['Fiction', 'Thriller'],
        dateCreated: 'Nov 13, 2020',
        datePublished: 'Nov 18, 2020',
        quantitySold: 484,
        income: 24200,
        payedOut: 9300,
      },
    ],
  },
];
