import React from 'react';
import {blog_article_styles} from "../styles/pages/blog_articleStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";
import MaxWidthContainer from "../components/MaxWidthContainer";


const Page = ({children, ...props}) => {


    return (
        <div css={blog_article_styles}>

            <Header
                title={"New Ideas For A Low Cost Vacation On Water"}
                img={"blog_card.png/"}></Header>

<MaxWidthContainer>
    <div className={"block_text"}>
        <p >If you really enjoy spending your vacation ‘on water’ or would like to try something new and exciting for the first time, then you can consider a houseboat vacation. There are so many fun things to do and so many great landscapes to see on a houseboat vacation! But before making further plans, let’s take a look at the options that you have for a low-cost vacation on water: you could rent a houseboat this year and try out an altogether exotic kind of vacation this year, or you could indulge in a houseboat timeshare.</p>
        <p >What is a houseboat timeshare? Most people who have used a houseboat timeshare say that it is a great way to spend your vacation at a very high-quality resort, in a place where you couldn’t get reservations so easily that too at a very low price! Doesn’t that sound great? But let’s see how and why houseboat timeshares can offer you with such fabulous opportunities of low-cost vacationing on water.</p>



        <div className={"row"}>
            <div className={"column border_top"}>
                <div></div>
            </div>
            <div className={"column"}>
                <p className={"fs-18 bold"}>Las Vegas has more than 100,000 hotel rooms to choose from. There is something for every budget, and enough entertainment within walking distance to keep anyone occupied for months, never mind the usual weekend stay or honeymoon.</p>
            </div>
        </div>



        <p>The Centers for Disease Control & Prevention (CDC) on Saturday began distributing cards at airports receiving flights returning directly from Hong Kong warning travelers returning to the United States from Hong Kong & Guangdong Province, People’s Republic of China & Hanoi, Vietnam that they may have been exposed to cases of severe acute respiratory syndrome (SARS).</p>
        <p>The cards are being handed out by quarantine officials at Chicago, O’Hare International Airport; Los Angeles; old York City, JFK International Airport; Newark; & San Francisco. These airports are the only U.S. airports receiving direct flights from Hong Kong. No U.S. airports receive direct flights from Hanoi or the Guangdong Province. CDC officials expect to expand the distribution of cards to Anchorage, Alaska & the territory of Guam later today.</p>


        <div className={"row doble_image"}>
            <div className={"column"}>
                <Image src={"/blog_card.png"}></Image>
            </div>
            <div className={"column"}>
                <Image src={"/blog_card.png"}></Image>
            </div>
        </div>



        <div className={"steps_block"}>

            <div className={"steps"}>
                <p className={"fs-1 bold"}>1) Try not to get drunk</p>
                <p>Some of the people that are playing, and that have few rounds to play in the tournament don’t count the drinks they have during their games and at the very end of the day they don’t have power to continue till the last game, which is a pity to loose such a big opportunity, so, don’t drink a lot and be prepare for the last round, also come up with all your senses in order. If you drink, do it measurable and just to loose the nerves before the games but also have some other drinks like soda, water, coffee and others to hydrate your self. 2) Is it important where I sit? Yes it is, in a tournament try not to sit next to the dealer, take a place in where you will feel that you are in front of the dealer to have the feeling that he is giving you a game. Also in a place where you will feel comfortable with your self and you will have a perspective of the other players.</p>
            </div>

            <div className={"steps"}>
                <p className={"fs-1 bold"}>3) Make your self comfortable while playing</p>
                <p>Some of the people that are playing, and that have few rounds to play in the tournament don’t count the drinks they have during their games and at the very end of the day they don’t have power to continue till the last game, which is a pity to loose such a big opportunity, so, don’t drink a lot and be prepare for the last round, also come up with all your senses in order. If you drink, do it measurable and just to loose the nerves before the games but also have some other drinks like soda, water, coffee and others to hydrate your self. 2) Is it important where I sit? Yes it is, in a tournament try not to sit next to the dealer, take a place in where you will feel that you are in front of the dealer to have the feeling that he is giving you a game. Also in a place where you will feel comfortable with your self and you will have a perspective of the other players.</p>
            </div>

            <div className={"steps"}>
                <p className={"fs-1 bold"}>5) Also your words and mimic are important during the game.</p>
                <p>Some of the people that are playing, and that have few rounds to play in the tournament don’t count the drinks they have during their games and at the very end of the day they don’t have power to continue till the last game, which is a pity to loose such a big opportunity, so, don’t drink a lot and be prepare for the last round, also come up with all your senses in order. If you drink, do it measurable and just to loose the nerves before the games but also have some other drinks like soda, water, coffee and others to hydrate your self. 2) Is it important where I sit? Yes it is, in a tournament try not to sit next to the dealer, take a place in where you will feel that you are in front of the dealer to have the feeling that he is giving you a game. Also in a place where you will feel comfortable with your self and you will have a perspective of the other players.</p>
            </div>

        </div>


    </div>

</MaxWidthContainer>

            <div className={"video_blog"}>
                <Image src={"blog_article.png"}></Image>
            </div>

            <MaxWidthContainer>
                <div className={" block_text"}>

                    <p>The rules of travel have altered so much in the last few years, with strict regulation regarding air travel, questionable car searches that may vary in regulation from state to state, and the feeling of never really being ultimately sure what is appropriate or improper in the travel world any longer. In most cases, if you decide to fly the formerly affable skies, your airline or airport website will have an accurate and up to date list regarding what is okay and what is not okay regarding your luggage. As if packing for a trip wasnt difficult enough, now we all have to do it with cloudy and blurry regulations and a list we print out from the airlines.</p>
                    <p>The first measure of travel complacency is simple; dont try to squeeze on a carry on that you know is not really a carry on. You will get yourself into the frustrating position of trying to argue your way onto the airplane with an large bag that just wont do. Youre not going to succeed. Once upon a time you would, but not anymore. Now, you will simply be forced to check it and risk being charged an additional fee for having too many luggage items. Plus, youre going to end up travelling without your usual band of comfort items that you could have had if you just scaled down into standard sized carry on luggage. The simple fact is that there used to be wiggle room, and now, there is none.</p>

                </div>
            </MaxWidthContainer>


            <Footer/>
        </div>

    );

};


export default Page;



