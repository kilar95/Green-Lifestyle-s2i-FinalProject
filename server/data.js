const data = {
    transportation: {
        car: {
            score: 5,
            description: "you regurarly travel by car"
        },
        bus: {
            score: 4,
            description: "you regularly travel by bus"
        },
        train: {
            score: 2,
            description: "you regularly travel by trains or subway"
        },
        bike: {
            score: 0,
            description: "you regularly get around on bikes or on foot"
        },
    },
    diet: {
        vegan: {
            score: 1,
            description: "you eat no animal products"
        },
        vegetarian: {
            score: 2,
            description: "you eat no meat or fish"
        },
        pescatarian: {
            score: 4,
            description: "you don't eat meat but you eat seafood"
        },
        meatEater: {
            score: 5,
            description: "you often eat meat and fish"
        }
    },
    recycling: {
        true: {
            score: 0,
            description: "you recycle waste"
        },
        false: {
            score: 5,
            description: "you do not recycle waste"
        }
    },
    energyUsage: {
        renewables: {
            score: 1,
            description: "your household is powered by renewable energy, like wind, solar, geothermal and hydropower"
        },
        fossilfuels: {
            score: 5,
            description: "your household is powered by fossil energy, like oil, coal and natural gas"
        },
        mix: {
            score: 3,
            description: "your household is powered by renewable energy and fossil energy"
        }
    },
    flightsPerYear: {
        none: {
            score: 0,
            description: "you take no flights during the year"
        },
        low: {
            score: 2,
            description: "you usually don't take more than 3 flights per year"
        },
        medium: {
            score: 3,
            description: "you usually take between 4 and 8 flights per year"
        },
        high: {
            score: 5,
            description: "you take more than 8 flights per year"
        }
    },
    secondHand: {
        true: {
            score: 0,
            description: "when you need an item you usually purchase it second-hand"
        },
        false: {
            score: 5,
            description: "you prefer buying new products"
        }
    },
    waterSaving: {
        true: {
            score: 0,
            description: "you usually try to save water by taking shorter showers, turning off the water while brushing your teeth or shaving, checking pipes for leaks etc."
        },
        false: {
            score: 5,
            description: "you don't actively try to adopt habits aimed at avoiding wasting water"
        }
    },
    workplace: {
        home: {
            score: 0,
            description: "you work from home"
        },
        office: {
            score: 4,
            description: "you go to the office each day"
        },
        hybrid: {
            score: 3,
            description: "you work from home and sometimes go to the office"
        },
        other: {
            score: 5,
            description: "you have a job that requires you to move a lot"
        }
    }
}

module.exports = data;
