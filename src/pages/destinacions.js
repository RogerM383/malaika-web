import React from 'react';
import {destinacio_style} from "../styles/pages/destinacionsStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_destinacio} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";
import {useRouter} from "next/router";


const Page = ({children, ...props}) => {
    const elements = ['one', 'two', 'three', 'four', 'five', 'six','seven','eight','nine'];

    const router = useRouter();

    const goToFitxa = (e) =>{
        router.push("/fitxa_viatge_destinacio");
    }

    return (
        <div css={destinacio_style}>

            <Header
                title={"ASIA"}
                img={"foto2.png/"}/>




            <div className={"container"}>


                <p className={"title didot"}>Ens apassiona <br/> l’Asia</p>

                <Grid size={"350px"}>
                    {

                        elements.map((element) => {
                            return (
                                <Card  onClick={goToFitxa} css={card_destinacio}>
                                    <Image src={"home_card_1.png"}></Image>
                                    <div className={"text"}>
                                        <span className={"didot bold"}>ANDALUSIA CRUILLA DE CULTURES</span>
                                        <p className={"fs-14"}>Palaus i cultura mil.lenària</p>
                                        <p className={"fs-14 sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                        <p className={"didot bold"}>Més Informació <span className={"arrow"}>&#8594;</span>	</p>
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



