import Noel from './components/Noel';
import NewYear from './components/NewYear';
import LunarNewYear from './components/LunarNewYear';

const pages = [
    {
        path: '/noel',
        name: 'Noel',
        component: Noel,
    },
    {
        path: '/newyear',
        name: 'NewYear',
        component: NewYear,
    },
    {
        path: '/lunarnewyear',
        name: 'LunarNewYear',
        component: LunarNewYear,
    },
];

export default pages;