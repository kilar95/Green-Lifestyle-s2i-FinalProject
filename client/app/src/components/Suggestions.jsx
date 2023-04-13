import React from 'react'
import { useSelector } from 'react-redux'

const Suggestions = ({ setShowSuggestions }) => {
    const user = useSelector(state => state.userReducer.user)


    return (
        <div className='results'>
            <h2>Congratulations on finishing the quiz!</h2>
            <h3>What can you do to improve your score?</h3>

            {
                user.result > 30 ?
                    <p>Your score is already pretty good! You scored 30/40, that means that you are currently following habits that directly benefit the environment!</p>
                    :
                    user.results > 20 ?
                        <p>You are on the right track! But there is more that you can do, keep reading to find out what you can improve!</p>
                        :
                        <p>Your score is pretty low, but do not worry! You can decide to change some aspects of your lifestyle and start living a green eco-friendly existence whenever you feel ready!
                            You will find some important suggestions down below. Follow some of them (or even all of them if you are feeling bold) to improve your green lifestyle score now!</p>
            }

            <h4>Here are some good practices to keep in mind: </h4>
            <li>
                Always remember to <b>limit your meat consumption</b> to reduce your carbon emissions.<br></br>
                Did you know that the best choice in terms of GHG (green house gas emissions) would be to eat a <b>plant based diet</b>?
                Food production is responsible for one-quarter of the world’s greenhouse gas emissions.
                You can check the amount of green house gas emissions coming from some of the most common food sources by clicking <a href="https://ourworldindata.org/food-choice-vs-eating-local" target="_blank"> <b>here</b></a>.
            </li>
            <br></br>
            <li>
                If you have to travel short distances try <b>walking</b> or using a <b>bike</b>, it's green and it's also good for your health!
                There are a lot of other green choices in terms of transportation, such as <b>skates</b>, <b>electric scooter</b> or electric <b>car sharing</b>.
                Moreover, you can try using fuels that emit less CO2 than fuels currently being used. <b>Alternative sources </b>can include biofuels; hydrogen; electricity from renewable sources,
                such as wind and solar; or fossil fuels that are less CO2-intensive than the fuels that they replace.
            </li>
            <br></br>
            <li>
                To power your home choose an energy provider that uses <b>renewable energy</b> sources such as solar, hydro, biomass and wind energy.
            </li>
            <br></br>
            <li>
                <b>Save water</b> whenever you can!
                Using water-saving techniques can save you money and diverts less water from our rivers, bays, and estuaries, which helps keep the environment healthy.
                Clicking <a href="https://friendsoftheearth.uk/sustainable-living/13-best-ways-save-water" target="_blank"> <b>here</b></a> you can <b>check out</b> some tips to help you conserve water.
            </li>
            <br></br>
            <li>
                <b>Buy second hand!</b> Second-hand clothes, for example, have a hugely positive social and environmental impact.
                They reduce carbon emissions, save lots of resources, water, and energy. They also prevent old clothing from ending up in landfills or incinerators.
                Besides, your wallet will benefit from it!
            </li>
            <br></br>
            <li>
                <b>Recycle!</b> Recycling is good for the enviroment for several reasons: it reduces the need for raw materials;
                it saves energy, it reduces landfill waste, pollution and conserves natural resources!
            </li>

            <p>If you want to learn more about how to reduce your environmental impact visit <a href="https://youth.europa.eu/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank"><b>this link</b></a>.</p>

            <button className="main-button" onClick={() => setShowSuggestions(false)}>Back Home</button>
        </div>
    )
}

export default Suggestions