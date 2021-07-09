import React, {useEffect, useRef, useState} from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Image from "../../package/components/Image";
import {card_viatge_autor_small, top_img_tagged_card} from "../styles/components/CardStyles";
import Grid from "../components/Grid";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PAGE_BY_URI, GET_POSTS, GET_VIATGES_AUTOR} from "../contexts/apollo/queries";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_VIATGES_DESTACATS} from "../contexts/apollo/queriesTest";
import {Card, Carousel, Col, List, Row} from "antd";
import 'antd/dist/antd.css';
import {css} from "@emotion/react";
import Menu from "../components/Menu";
import HeaderInici from "../components/HeaderInici";
import {grid_style} from "../styles/components/GridStyles";
import {Meta} from "antd/lib/list/Item";
import {GET_NOVETATS} from "../contexts/apollo/queries/novetats";


const Page = ({title, uri, status, slug, featuredImage, notadestacada, descripcioviatgesdautor, Novetats,novetats,galeria, content:contenido,page,...props}) => {


    debugger
/*    if (page?.title === undefined) {
        return null
    }*/

    /*PAGE INFO*/
    // const {title, uri, status, slug, featuredImage, notadestacada, descripcioviatgesdautor, Novetats} = page;



    const router = useRouter();


    const PER_PAGE = 4;
    const [loadViatgesAutor, {loading: loadingVA, error: errorVA, data: dataVA}] = useLazyQuery(GET_VIATGES_AUTOR, {variables: {first: PER_PAGE}});

    const [loadViatgesDestacats, {loading: loadingVD, error: errorVD, data: dataVD}] = useLazyQuery(GET_VIATGES_DESTACATS,{variables:{first:16}});


    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [viatgesDestacats, setViatgesDestacats] = useState([]);
    //const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        loadViatgesAutor();
        loadViatgesDestacats();
    }, []);

    useEffect(() => {
        if (dataVA) {
            const {nodes, pageInfo} = dataVA.viatgesdautor;
            // setPageInfo(pageInfo);


            setViatgesAutor(viatgesAutor.concat(nodes));
        }
    }, [dataVA]);

    useEffect(() => {
        if (dataVD) {
            setViatgesDestacats(dataVD.viatges)

            debugger
        }
    }, [dataVD]);


    const goTo = (url) => (e) => {
        router.push(url)
    }


    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,

    };

    const carrosusel = (theme) => {
        const style = css`
            .slick-slide{
                padding:1rem;


            }

        `;
        return [style];
    }

    const slider = useRef();
    const [slide, setSlide] = useState(0);

    const images =[featuredImage?.node?.mediaItemUrl,'/foto1.png'];

    const images2 = galeria.galeriaImatges.map((image=> image.mediaItemUrl))

    debugger

    return (

        <div css={home_styles}>

           <HeaderInici title={title} img={images2}/>

            <MaxWidthContainer className={"block1"}>

                {
                    notadestacada.avisos &&
                    notadestacada.avisos.length > 0 &&
                    <div className={"alert"}>
                        <div className={'head'}>
                            <span css={{color: 'red'}}>*</span>
                            <span className={""}>AVISOS:</span>
                        </div>
                        <div className={'alert-group'}>
                            {
                                notadestacada.avisos.map((item) => {
                                    const {avis} = item;
                                    return (
                                        <div dangerouslySetInnerHTML={{__html: avis}}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }



                    <div className={"cita"}>
                        <div dangerouslySetInnerHTML={{__html: contenido }}/>
                    </div>



                <div className={'title'}>
                    <h2>
                        <span>Viatges</span><span>d’Autor /</span>
                    </h2>
                    <h5 className={'litle'}>Grups reduïts</h5>
                </div>
                {
                    descripcioviatgesdautor && descripcioviatgesdautor.descripcioViatgesDautor &&
                    <div css={{width: '60%'}} className={"subtitle fs-16 bold didot"}
                         dangerouslySetInnerHTML={{__html: descripcioviatgesdautor.descripcioViatgesDautor}}/>
                }



                <Grid css={grid_style("400px")}>
                    {
                        viatgesAutor.map((viatge) => {
                            const {
                                content,
                                date,
                                id,
                                slug,
                                status,
                                title,
                                viatgedautorId,
                                Campsviatge: customFields,
                                featuredImage: image
                            } = viatge;
                            const {
                                autor,
                                durada,
                                preu,
                                taxes,
                                suplement,
                                etapes,
                                fitxa,
                                vols,
                                sortides
                            } = customFields;


                            return (
                                <div  css={card_viatge_autor_small}>
                                    <div className={"card-text"}>
                                        <span className={"card-title"}>{title}</span>
                                        <div className={"card-data"}><img src={"/calendar_icon.png"}/>
                                            <span>
                                            {sortides.map((item) => item.datasortida)}
                                            </span>
                                        </div>
                                        <span className={"more-info"} onClick={goTo("viatge-dautor/" + slug)}>Més Informació    &#8594;</span>
                                    </div>
                                    <Image className={"photo"} alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                </div>
                            )
                        })
                    }

                </Grid>

                <div className={"more"}><a href={"viatges-dautor"} onClick={(e) => {
                    loadViatgesAutor({
                        variables: {
                            first: PER_PAGE,
                           /* after: pageInfo.endCursor,
                            last: null,
                            before: null*/
                        }
                    })
                }}>Veure més viatges d’autor  &#8594;</a></div>

            </MaxWidthContainer>



            <div className={"block2"}>

                <MaxWidthContainer className={'container'}>

                    <h2 className={"title"}>Destacats /</h2>

                    <Grid css={grid_style("300px")}>
                        {

                            viatgesDestacats?.nodes?.map((item) => {
                                const {dates} = item.Campsviatge;
                                return (
                                    <div onClick={goTo("viatge-destinacio/" + item.slug)} css={top_img_tagged_card}>
                                        <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}></Image>
                                        <div className={"text"}>
                                            <span className={"title"}>{item.title}</span>
                                            <span className={"tags"}>{item.subtitolViatge.subtitolviatge}</span>
                                            <span className={"calendar"}><img src={"/calendar_icon.png"}/> {dates}</span>
                                            <span className={"more_info"}>Més Informació <span className={"arrow"}>&#8594;</span>	</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Grid>

                    <div className={"next_prev"}>
                        {/* onClick={e => { setSlide(e); slider.current.prev(); }}*/}
                        <button > &#60; </button>
                        <button disabled>
                            /
                         {/*   <i className="fas fa-slash"></i>*/}
                        </button>
                        <button> > </button>
                    </div>

                </MaxWidthContainer>

            </div>

            <div className={"block3"}>
                <MaxWidthContainer>
                    <Row className={"row"}>

                        <Col sm={20} md={8} lg={6} className={"column"}>
                            <span css={{color: '#9B9B9B'}}>Malaika</span>
                            <h4 className={"title-novetats"}>{Novetats.titolNovetats}</h4>
                            <p className={"descripcio_novetats"}>{Novetats.descripcioNovetats} </p>

                        </Col>

                        <Col sm={20} md={16} lg={18} className={"column"}>

                            <div className={"normas"}>
                                <Row gutter={[40, 40]}>
                                    <Col sm={24} md={5} lg={5} className={'fecha'}>28/01/2021</Col>
                                    <Col sm={24} md={19} lg={19} className={'data'}>

                                        {
                                            novetats.nodes.map((item) => {
                                                return(
                                                    <>
                                                        <div dangerouslySetInnerHTML={{__html: item.title}} className={"data_title"}/>
                                                        <div dangerouslySetInnerHTML={{__html: item.content}} className={"data_content"}/>
                                                    </>


                                                )
                                            })
                                        }

                                        {
                                            novetats.nodes.map((item) => {
                                                return(
                                                    <>
                                                        <div dangerouslySetInnerHTML={{__html: item.title}} className={"data_title"}/>
                                                        <div dangerouslySetInnerHTML={{__html: item.content}} className={"data_content"}/>
                                                    </>


                                                )
                                            })
                                        }


                            {/*
                                        <p className={"data_title"}>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p className={"data_content"}>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"more"}> + informació</span>
                                        </p>
                                        */}


                                    </Col>
                                </Row>


                            </div>

                        </Col>


                    </Row>


                </MaxWidthContainer>
            </div>


            <div className={"block4"}>

                <MaxWidthContainer>

                    <Row className={"row"}>

                        <Col sm={20} md={24} lg={12}>
                            <p className={"info"}>I si vols estar informat de tot</p>
                        </Col>

                        <Col sm={20} md={24} lg={12}>

                            <div className={"subscribe"}>
                                <p>Subscriu-te al nostre Newsletter</p>
                                <p>Inscriviu-vos a les nostres llistes de correu i rebreu les novetats
                                    ofertes i promocions directament a la safata d’entrada.</p>
                            </div>

                            <div>
                                <input type={"text"} placeholder={"El teu email"}/>
                                <button>Subscriu-te</button>
                            </div>
                        </Col>
                    </Row>

                </MaxWidthContainer>

            </div>

            <Footer/>

        </div>
    );
};

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const page = await client.query({query: GET_PAGE_BY_URI, variables: {uri: '/inici/'}})
        .then((data) => {
            return data.data.pageBy;
        });

    const novetats = await client.query({query: GET_NOVETATS})
        .then((data) => {
            return data.data.novetats;
        });


    return {props: {...page,novetats}, revalidate: 3600};
}

export default Page;



