import React from 'react';
import {viatge_autor_style} from "../styles/pages/viatge_autorStyles";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_discover, card_viatge_autor} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three', 'four', 'five', 'six'];

    const router = useRouter();

    const goToFitxa = () =>{
        router.push("/fitxa-viatge-autor")
    }
    return (
        <div css={viatge_autor_style}>

            <Header
                title={"Viatges d’autor"}
                img={"foto1.png/"}>

            </Header>


            <MaxWidthContainer>

                    <div className={"info didot fs-18 bold"}>
                        <p>Gràcies als viatges d'autor, els nostres guies amb gran experiència i coneixedors del destí, dissenyen
                            diferents rutes de gran interès cultural, històric i patrimonial del lloc, ells els guiaran, il·lustraran
                            i faran viure increïbles experiències a més d'oferir valuosos detalls i explicar històries desconegudes
                            sobre la zona que sens dubte els captivaran. </p>
                        <p>
                            Amb aquests viatges en grups reduïts, esperem que els nostres clients gaudeixin de cada segon del viatge, guardin uns records inoblidables i es puguin enriquir de les veritables històries dels llocs més màgics del planeta.
                        </p>

                    </div>


                    <Grid size={"100%"}>
                        {

                            elements.map((element) => {
                                return (
                                    <div onClick={goToFitxa} css={card_viatge_autor}>

                                        <div className={"row"}>
                                            <div className={"column"}>
                                                <Image className={"photo"} src={"home_card_1.png"}></Image>
                                            </div>


                                            <div className={"column"}>
                                                <span className={"title fs-24 bold didot"}>LA HABANA REVOLUCIONÀRIA</span>

                                                <div className={"timetable"}>
                                                    <div className={"plane"}>
                                                        <img src={"/calendar_icon.png"}/>
                                                        <span className={"db bold fs-16 days"}> 8 dies</span>
                                                    </div>

                                                    <div className={"plane"}>
                                                        <div><img src={"/plane_icon.png"}/></div>
                                                        <ul className={"fs-16"}>
                                                            <li>del 7 AL 12 D’octubre 2021</li>
                                                            <li>del 7 AL 12 D’octubre 2021</li>
                                                            <li>del 7 AL 12 D’octubre 2021</li>
                                                        </ul>
                                                    </div>
                                                </div>



                                                <div className={"more_info"}>
                                                    <span className={"db fs-18"}>Guiat per en DAVID RULL, Doctor en Història Antiga</span>
                                                    <span className={"didot bold fs-18"}>Més Informació <span className={"primary"}>&#8594;</span> </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </Grid>


            </MaxWidthContainer>



            <div className={"block2"}>
                <MaxWidthContainer>

                        <p className={"didot fs-14 discover"}>DESCOBREIX</p>


                        <div css={card_discover}>
                            <div className={"row"}>
                                <h1 className={"column bold fs-50 didot title"}>Temple de ramses II</h1>
                                <p className={"column fs-13 sofia text"}>Carved out of the mountain on the west bank of the Nile between 1274
                                    and 1244 BC, this imposing main temple of the Abu Simbel complex was as much dedicated to the deified
                                    Ramses II himself as to Ra-Horakhty, Amun and Ptah. The four colossal statues of the…
                                    <span className={"primary"}>Visit Site </span>
                                </p>
                            </div>

                            <Image src={"Banner.png/"}/>
                            <p css={{float:'right'}}>Foto cedida per Manel Vallès</p>
                        </div>

                        <div className={"next_prev"}>
                            <button> &#60; </button>
                            <button> > </button>
                        </div>


                </MaxWidthContainer>

            </div>

            <Footer></Footer>

        </div>

    );

};


export default Page;



