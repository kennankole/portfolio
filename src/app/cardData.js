import veganMeals from './images/veganMeals.png';
import spaceX from './images/spaceX.png';
import royalMeals from './images/royalMeals.png';
import maths from './images/maths.png';
import css from '../images/css.png';
import html from '../images/html.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import javascript from '../images/javascript.png';
// import postgresql from '../images/postgresql.png';
// import ruby from '../images/Ruby.png';
// import rails from '../images/rails.png';

const cardData = {
  card1: {
    id: 1,
    image: veganMeals,
    title: 'Vegan meals',
    description: 'This project uses meals API to create a  vegan meal  website that allows users to query vegan meals and  get their tips on how to cook it.',
    language: {
      HTML: html,
      JavaScript: javascript,
      CSS: css,
      React: react,
    },
    liveLink: 'https://vegan-meals.onrender.com/',
    github: 'https://github.com/kennankole/vegan-meals',
  },
  card2: {
    id: 2,
    image: spaceX,
    title: 'Space-X',
    description: 'This web application offers space travel services for both commercial and scientific purposes. It allows users to reserve rockets and participate in specific space missions',
    language: {
      HTML: html,
      JavaScript: javascript,
      CSS: css,
      React: react,
      Redux: redux,
    },
    liveLink: 'https://space-traval-x.netlify.app/',
    github: 'https://github.com/Mujeeb4582/Space-X',
  },
  card3: {
    id: 3,
    image: royalMeals,
    title: 'Royal Meals',
    description: ' This is a food website that gives  user different layers of interaction such as liking a meal,  commenting and reading about a meal.',
    language: {
      HTML: html,
      JavaScript: javascript,
      CSS: css,
    },
    liveLink: 'https://ridwanullahi-code.github.io/royal-meals-website/',
    github: 'https://github.com/Ridwanullahi-code/royal-meals-website',
  },
  card4: {
    id: 4,
    image: maths,
    title: 'Math magician',
    description: 'Math magician is an online calculator application that allows users to perform basic math operation as well as get inspiring quotes about Mathematics.',
    language: {
      HTML: html,
      React: react,
      CSS: css,
    },
    liveLink: 'https://jovial-kheer-27d9be.netlify.app/',
    github: 'https://github.com/kennankole/math-magician',
  },
};
export default cardData;
