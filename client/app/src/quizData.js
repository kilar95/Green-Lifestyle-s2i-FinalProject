import busIcon from './assets/imgs/bus.png'
import carIcon from './assets/imgs/car.png'
import trainIcon from './assets/imgs/train.png'
import bikeIcon from './assets/imgs/bike.png'
import veganIcon from './assets/imgs/vegan.png'
import vegetarianIcon from './assets/imgs/vegetarian.png'
import pescaterianIcon from './assets/imgs/pescatarian.png'
import carnivoreIcon from './assets/imgs/carnivore.png'
import yesIcon from './assets/imgs/yes.png'
import noIcon from './assets/imgs/no.png'
import renewablesIcon from './assets/imgs/renewables.png'
import fossilFuelsIcon from './assets/imgs/fossil-fuels.png'
import mixIcon from './assets/imgs/mix.png'
import noneIcon from './assets/imgs/none.png'
import fewIcon from './assets/imgs/few.png'
import lotIcon from './assets/imgs/lot.png'
import homeIcon from './assets/imgs/home.png'
import officeIcon from './assets/imgs/office.png'
import hybridIcon from './assets/imgs/hybrid.png'
import otherIcon from './assets/imgs/other.png'

const questions = [
    {
        topic: "Transportation",
        question: "How do you usually get around?",
        options: [
            { id: 1, text: 'Bus', icon: busIcon },
            { id: 2, text: 'Car', icon: carIcon },
            { id: 3, text: 'Train', icon: trainIcon },
            { id: 4, text: 'Bike', icon: bikeIcon }
        ]
    },
    {
        topic: "Diet",
        question: "You are a...",
        options: [
            { id: 1, text: 'Vegan', icon: veganIcon },
            { id: 2, text: 'Vegetarian', icon: vegetarianIcon },
            { id: 3, text: 'Pescatarian', icon: pescaterianIcon },
            { id: 4, text: 'Carnivore', icon: carnivoreIcon }
        ]
    },
    {
        topic: "Recycling",
        question: "Do you recycle?",
        options: [
            { id: 1, text: 'Yes', icon: yesIcon },
            { id: 2, text: 'No', icon: noIcon }
        ]
    },
    {
        topic: "Energy Usage",
        question: "How do you power your home?",
        options: [
            { id: 1, text: 'Renewables', icon: renewablesIcon },
            { id: 2, text: 'Fossil fuels', icon: fossilFuelsIcon },
            { id: 3, text: 'Mix', icon: mixIcon },
        ]
    },
    {
        topic: "Flights",
        question: "How many flights do you take per year?",
        options: [
            { id: 1, text: 'None', icon: noneIcon },
            { id: 2, text: 'A few', icon: fewIcon },
            { id: 3, text: 'A lot', icon: lotIcon }
        ]
    },
    {
        topic: "Second Hand",
        question: "Do you usually purchase second hand items?",
        options: [
            { id: 1, text: 'Yes', icon: yesIcon },
            { id: 2, text: 'No', icon: noIcon }
        ]
    },
    {
        topic: "Water",
        question: "Do you actively try to save water?",
        options: [
            { id: 1, text: 'Yes', icon: yesIcon },
            { id: 2, text: 'No', icon: noIcon }
        ]
    },
    {
        topic: "Workplace",
        question: "What is your usual workplace?",
        options: [
            { id: 1, text: 'Home', icon: homeIcon },
            { id: 2, text: 'Office', icon: officeIcon },
            { id: 3, text: 'Hybrid', icon: hybridIcon },
            { id: 4, text: 'Other', icon: otherIcon }
        ]
    }
]

export default questions;