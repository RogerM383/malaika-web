import React, {useEffect, useState} from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../../package/components/Card";
import Image from "../../package/components/Image";
import {card_home_1, card_home_2} from "../styles/components/CardStyles";
import Grid from "../components/Grid";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "../contexts/apollo/queries";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three', 'four', 'five', 'six'];

    const router = useRouter();

    const goToFitxa = () => {
        router.push("/fitxa-viatge-autor")
    }

/*    const { loading: loadingPosts, error: errorPosts, data: dataPosts } = useQuery(GET_POSTS,{variables: {last: 20}});
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        if (dataPosts) {
            const posts = dataPosts.posts.nodes.slice(0,3);
            setPosts(posts);
            console.log(dataPosts)
        }
    },[dataPosts]);*/

    const goToViatges = () => {
        router.push("/destinacions")
    }

    return (
        <div css={home_styles}>
                      <Header
                title={"Groenlandia"}
                img={"Banner.png/"}>

            </Header>


            <MaxWidthContainer className={"block1"}>

                <div className={"alert "}>
                    <p className={"fs-16"}><span css={{color: 'red'}}>*</span><span className={"didot fs-18  my-5"}>AVISOS:</span> Nova normativa de de maletes VUELING cosulteu en aquest enllaç www.vueling.com/maletes</p>
                    <hr/>
                </div>

                <div className={"cita didot"}>
                    <p className={"fs-26 bold"}>Hi ha experiències que no passen desapercebudes, emocions que no s'obliden i que desitgem que perdurin per sempre.
                    </p>
                </div>

                <p className={"title"}>Viatges<br/> d’Autor / <span>Grups reduits</span></p>
                <p className={"subtitle fs-16 bold didot"}>Els nostres guies, amb gran experiència i coneixedors del destí, dissenyen diferents rutes de gran interès cultural, històric i patrimonial del lloc. Us faran viure increïbles experiències a més d'oferir valuosos detalls i explicar històries desconegudes sobre la zona que sens dubte els captivaran.
                </p>


                <Grid size={"300px"}>
                    {

                        elements.map((element) => {
                            return (
                                <Card onClick={goToFitxa} css={card_home_1}>
                                    <div className={"text"}>
                                        <span className={" db bold didot fs-16"}>ANDALUSIA CRUILLA DE CULTURES</span>
                                        <span className={"db sbold fs-12"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</span>
                                        <span className={"db bold didot fs-14"}>Més Informació    &#8594;</span>
                                    </div>

                                    <Image src={"home_card_1.png"}></Image>
                                </Card>
                            )
                        })
                    }

                </Grid>

                <div>
                    <p className={"bold fs-18 psmall more"}><a href={"viatge-autor"}>Veure més viatges d’autor  &#8594;</a></p>
                </div>


            </MaxWidthContainer>


            <div className={"block2"}>

                <MaxWidthContainer>

                    <p className={"title"}>Destacats /</p>
                    <Grid size={"300px"}>
                        {

                            elements.map((element) => {
                                return (
                                    <Card onClick={goToViatges} css={card_home_2}>
                                        <Image src={"home_card_1.png"}></Image>
                                        <div className={"text"}>
                                            <span className={"db didot bold fs-18"}>FLORÈNCIA, art i cultura</span>
                                            <span css={{marginBottom: '1.5rem'}} className={"db fs-12"}>Museus, gastonomia i música clàssica</span>
                                            <p className={"fs-12 sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                            <span className={" db didot fs-14 bold"}>Més Informació -></span>
                                        </div>


                                    </Card>
                                )
                            })

                        }
                    </Grid>

                    <div className={"next_prev"}>
                        <button> &#60; </button>
                        <button >/</button>
                        <button> ></button>
                    </div>


                </MaxWidthContainer>


            </div>


            <div className={"block3"}>
                <MaxWidthContainer>
                    <div className={"row"}>

                        <div className={"column"}>
                            <p css={{color: '#9B9B9B'}}>Farm Visit</p>
                            <p className={"bold primary fs-40"}>Novetats</p>
                            <p className={"fs-16"}>Us mantenim informtas de les novetats, normativa,
                                documentació, i tot allò que
                                pugui afectar al vostre viatge
                                o sigui del vostre interès. </p>
                            <input className={"fs-16"} type={"text"} placeholder={"Busca novetats"}/>
                        </div>


                        <div className={"column"}>
                            <div className={"normas  fs-16"}>
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


                </MaxWidthContainer>
            </div>


            <div className={"block4"}>

                <MaxWidthContainer>

                    <div className={"row"}>

                        <div className={"left"}>
                            <p className={"didot fs-30"}>I si vols estar informat de tot</p>
                        </div>

                        <div className={"right"}>
                            <div className={"subscribe"}>
                                <p className={"fs-18 sbold"}>Subscriu-te al nostre Newsletter</p>
                                <p className={"fs-12"}>Inscriviu-vos a les nostres llistes de correu i rebreu les novetats
                                    ofertes i promocions directament a la safata d’entrada.</p>
                            </div>
                            <div className={"form_subscribe"}>
                                <input className={"fs-12"} type={"text"} placeholder={"El teu email"}/>
                                <button className={"fs-12"}>Subscriu-te</button>
                            </div>
                        </div>
                    </div>

                </MaxWidthContainer>

            </div>


            <Footer></Footer>
        </div>

    );

};


export default Page;



