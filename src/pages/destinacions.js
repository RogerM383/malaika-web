import React from 'react';
import {destinacio_style} from "../styles/pages/destinacionsStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_destinacio, card_viatge} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";


const Page = ({children, ...props}) => {
    const elements = ['one', 'two', 'three', 'four', 'five', 'six','seven','eight','nine'];

    return (
        <div css={destinacio_style}>

            <Header
                title={"ASIA"}
                img={"Banner.png/"}/>




            <div className={"container"}>


                <p className={"title didot"}>Ens apassiona l’Asia</p>

                <Grid size={"300px"}>
                    {

                        elements.map((element) => {
                            return (
                                <Card css={card_destinacio}>
                                    <Image src={"home_card_1.png"}></Image>
                                    <div className={"text"}>
                                        <p className={"didot bold"}>ANDALUSIA CRUILLA DE CULTURES</p>
                                        <p className={"sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                        <p className={"didot bold"}>Més Informació 	&#8594;</p>
                                    </div>


                                </Card>
                            )
                        })

                    }
                </Grid>
            </div>

            <Footer></Footer>


        </div>

    );
};


export default Page;



