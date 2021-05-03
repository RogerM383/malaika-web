import React from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../../package/components/Card";
import Image from "../../package/components/Image";
import {card_home_1, card_home_2} from "../styles/components/CardStyles";
import Grid from "../components/Grid";
import {useRouter} from "next/router";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three', 'four', 'five', 'six'];

    const router = useRouter();

    const goToFitxa = () =>{
        router.push("/fitxa_viatge_autor")
    }

    return (
        <div css={home_styles}>
            <Header
                title={"Groenlandia"}
                img={"Banner.png/"}>

            </Header>

            <div className={"container"}>
                <div className={"block1"}>
                    <div className={"alert"}>
                        <p><span css={{color: 'red'}}>*</span><span className={"didot  my-5"}>AVISOS:</span> Nova normativa de de maletes VUELING cosulteu en aquest enllaç www.vueling.com/maletes</p>
                        <hr/>
                    </div>

                    <div className={"cita didot"}>
                        <p>Hi ha experiències que no passen desapercebudes, emocions que no s'obliden i que desitgem que perdurin per sempre.
                        </p>
                    </div>


                    <div>
                        <p className={"title"}>Viatges<br/> d’Autor / <span>Grups reduits</span></p>
                        <p className={"subtitle bold"}>Els nostres guies, amb gran experiència i coneixedors del destí, dissenyen diferents rutes de gran interès cultural, històric i patrimonial del lloc. Us faran viure increïbles experiències a més d'oferir valuosos detalls i explicar històries desconegudes sobre la zona que sens dubte els captivaran.
                        </p>
                    </div>


                    <Grid size={"400px"}>
                        {

                            elements.map((element) => {
                                return (
                                    <Card onClick={goToFitxa} css={card_home_1}>
                                        <div className={"text"}>
                                            <span className={" db bold didot fs-16"}>ANDALUSIA CRUILLA DE CULTURES</span>
                                            <span className={"db sbold fs-12"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</span>
                                            <span className={"db bold didot"}>Més Informació    &#8594;</span>
                                        </div>

                                        <Image src={"home_card_1.png"}></Image>
                                    </Card>
                                )
                            })
                        }

                    </Grid>
                </div>

            </div>


            <div className={"block2"}>
                <div className={"container"}>
                    <p className={"title"}>Destacats /</p>


                    <Grid size={"350px"}>
                        {

                            elements.map((element) => {
                                return (
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

                    <div className={"next_prev"}>
                        <button> &#60; </button>
                        <button> > </button>
                    </div>

                </div>

            </div>


            <div className={"block3"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"column"}>
                            <p css={{color:'#9B9B9B'}}>Farm Visit</p>
                            <p className={"bold primary fs-40"}>Novetats</p>
                            <p>Us mantenim informtas de les novetats, normativa,
                                documentació, i tot allò que
                                pugui afectar al vostre viatge
                                o sigui del vostre interès. </p>
                            <input type={"text"} placeholder={"Busca novetats"}/>
                        </div>
                        <div className={"column"}>
                            <div className={"normas"}>
                                <div className={"normas_item"}>
                                    <p>28/01/2021</p>
                                    <div>
                                        <p>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"primary"}> + informació</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={"normas_item"}>
                                    <p>28/01/2021</p>
                                    <div>
                                        <p>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"primary"}> + informació</span>
                                        </p>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>


            </div>


            <div className={"block4"}>

                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"columna"}>
                            <p className={"didot fs-30"}>I si vols estar informat de tot</p>
                        </div>
                        <div className={"columna"}>
                            <div className={"subscribe"}>
                                <p className={"fs-18 sbold"}>Subscriu-te al nostre Newsletter</p>
                                <p className={"fs-12"}>Sign Up for our mailing lists and get the latest
                                    offers and promotions straight in your inbox.</p>
                            </div>
                            <div className={"form_subscribe"}>
                                <input type={"text"} placeholder={"Your Email"}/>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <Footer></Footer>
        </div>

    );

};


export default Page;



