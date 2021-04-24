import React from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../../package/components/Card";
import Image from "../../package/components/Image";
import {card_home_1, card_home_2} from "../styles/components/CardStyles";
import Grid from "../components/Grid";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three','four','five', 'six'];

    return (
        <div css={home_styles}>
            <Header
                title={"Groenlandia"}
                img={"Banner.png/"}>

            </Header>

            <div className={"container"}>

                <div className={"block1"}>


                    <div className={"alert"}>
                        <p ><span css={{color:'red'}}>*</span><span className={"didot"}>AVISOS:</span>  Nova normativa de de maletes VUELING cosulteu en aquest enllaç www.vueling.com/maletes</p>
                        <hr/>
                    </div>

                    <div  className={"cita didot"}>
                        <p>Hi ha experiències que no passen desapercebudes, emocions que no s'obliden i que desitgem que perdurin per sempre.
                        </p>
                    </div>


                    <div>
                        <p className={"title"}>Viatges<br/> d’Autor / <span>Grups reduits</span></p>
                        <p className={"subtitle bold"}>Els nostres guies, amb gran experiència i coneixedors del destí, dissenyen diferents rutes de gran interès cultural, històric i patrimonial del lloc. Us faran viure increïbles experiències a més d'oferir valuosos detalls i explicar històries desconegudes sobre la zona que sens dubte els captivaran.
                        </p>
                    </div>




                    <Grid size={"250px"}>
                        {

                            elements.map((element)=>{
                                return(
                                    <Card css={card_home_1}>
                                        <div className={"text"}>
                                            <p className={"bold didot"}>ANDALUSIA CRUILLA DE CULTURES</p>
                                            <p className={"sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                            <p className={"bold didot"}>Més Informació 	&#8594;</p>
                                        </div>

                                        <Image src={"home_card_1.png"}></Image>
                                    </Card>
                                )
                            })
                        }

                    </Grid>
                </div>



                <div className={"block2"}>
                    <p className={"title"}>Destacats /</p>


                    <Grid size={"250px"}>
                        {

                            elements.map((element)=>{
                                return(
                                    <Card css={card_home_2}>
                                        <Image src={"home_card_1.png"}></Image>
                                        <div className={"text"}>
                                            <p>ANDALUSIA CRUILLA DE CULTURES</p>
                                            <p><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                            <p>Més Informació -></p>
                                        </div>


                                    </Card>
                                )
                            })

                        }
                    </Grid>


                </div>


                </div>




            <Footer></Footer>
        </div>

    );

};


export default Page;



