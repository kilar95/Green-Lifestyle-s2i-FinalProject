const data = {
    transportation: {
        car: {
            score: 0,
            description: "you regurarly travel by car"
        },
        bus: {
            score: 2,
            description: "you regularly travel by bus"
        },
        train: {
            score: 3,
            description: "you regularly travel by trains or subway"
        },
        bike: {
            score: 5,
            description: "you regularly get around on bikes or on foot"
        },
    },
    diet: {
        vegan: {
            score: 5,
            description: "you eat no animal products"
        },
        vegetarian: {
            score: 4,
            description: "you eat no meat or fish"
        },
        pescatarian: {
            score: 3,
            description: "you don't eat meat but you eat seafood"
        },
        carnivore: {
            score: 0,
            description: "you often eat meat and fish"
        }
    },
    recycling: {
        true: {
            score: 5,
            description: "you recycle waste"
        },
        false: {
            score: 0,
            description: "you do not recycle waste"
        }
    },
    energyUsage: {
        renewables: {
            score: 5,
            description: "your household is powered by renewable energy, like wind, solar, geothermal and hydropower"
        },
        fossilFuels: {
            score: 0,
            description: "your household is powered by fossil energy, like oil, coal and natural gas"
        },
        mix: {
            score: 3,
            description: "your household is powered by renewable energy and fossil energy"
        }
    },
    flightsPerYear: {
        none: {
            score: 5,
            description: "you take no flights during the year"
        },
        aFew: {
            score: 3,
            description: "you usually don't take more than 6 flights per year"
        },
        aLot: {
            score: 0,
            description: "you take more than 6 flights per year"
        }
    },
    secondHand: {
        true: {
            score: 5,
            description: "when you need an item you usually purchase it second-hand"
        },
        false: {
            score: 0,
            description: "you prefer buying new products"
        }
    },
    waterSaving: {
        true: {
            score: 5,
            description: "you usually try to save water by taking shorter showers, turning off the water while brushing your teeth or shaving, checking pipes for leaks etc."
        },
        false: {
            score: 0,
            description: "you don't actively try to adopt habits aimed at avoiding wasting water"
        }
    },
    workplace: {
        home: {
            score: 5,
            description: "you work from home"
        },
        office: {
            score: 2,
            description: "you go to the office each day"
        },
        hybrid: {
            score: 3,
            description: "you work from home and sometimes go to the office"
        },
        other: {
            score: 0,
            description: "you have a job that requires you to move a lot"
        }
    }
}

module.exports = data;
