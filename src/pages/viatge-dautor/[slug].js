import React, {useContext, useEffect, useState} from 'react';
import {viatge_fitxa} from "../../styles/pages/fitxa_viatge_autorStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../../package/components/Image";
import {card_itinerari, card_itinerari_finish} from "../../styles/components/CardStyles";
import Card from "../../../package/components/Card";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {bicolor_style} from "../../styles/components/BiColorBlock";
import {initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_SLUG, GET_VIATGE_DAUTOR_BY_SLUG} from "../../contexts/apollo/queriesTest";
import {Row, Col, Table} from 'antd';
import 'antd/dist/antd.css';
import HeaderInici from "../../components/HeaderInici";
import {LaunguageContext} from "../../contexts/LanguageContext";


const PageViatgeDautor = ({children, pagina, ...props}) => {


    /*debugger
    if(page?.title === undefined){
        return null
    }

    const {Campsviatge,slug,title,uri,content,featuredImage,translations} = page
    const{autor,durada,etapes,inclou,noInclou,preu,suplement,taxes,grup,vols,mapa,fitxa}=Campsviatge*/

    const {language,setLanguage} = useContext(LaunguageContext)


    // ------------------------------------------------------------------------------------------
    const [page, setPage] = useState(null);
    const [campsViatge, setCampsviatge] = useState(null);

    useEffect(() => {
        if (pagina) {
            setPage(pagina);
            setCampsviatge(pagina.Campsviatge);
        }
    },[pagina]);
    // ------------------------------------------------------------------------------------------


    useEffect(() => {
        if (page) {
            setLanguage({
                ...language,
                pageTranslation: page.translations.length >= 1 ? "viaje-de-autor/" + page[0]?.slug : null
            })
        }
    }, [page]);





    debugger


    return (
        <div css={viatge_fitxa}>
            <HeaderInici title={page?.title} img={page?.featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer>
                <div className={"breadcrumb"}>Viatges d'autor > {page?.title}</div>
            </MaxWidthContainer>

            <MaxWidthContainer className={"block1"}>

                <Row >
                    <Col className={"left_column"} sm={24} md={12} >
                        <div >
                            <p className={"title"}>{page?.title}</p>
                            <p  className={"content"}  dangerouslySetInnerHTML={{__html: page?.content}}/>
                            {
                                campsViatge?.fitxa?.mediaItemUrl &&
                                <button><a target={"_blank"} css={{color: 'white'}} href={campsViatge?.fitxa?.mediaItemUrl}>Fitxa viatge pdf</a></button>
                            }
                        </div>
                    </Col>

                    <Col  className={"right_column"}  sm={24} md={12}>
                        <div>
                            <p>GRUP: {campsViatge?.grup}</p>
                            <span>PREU: {campsViatge?.preu}</span>
                            <span>Taxes d'aeroport: {campsViatge?.taxes}</span>
                            <span>Suplement hab. individual: {campsViatge?.suplement}</span>
                        </div>


                        {   campsViatge?.vols &&
                            <Row className={"plane"}>
                                <Col span={2}>
                                    <img className={"mapa"} src={"../plane_icon.png"}/>
                                </Col>
                                <Col span={22}>

                                    <Row gutter={[10,5]}>


                                    {
                                        campsViatge?.vols.map((item)=>{
                                            return(
                                                <>
                                                    <Col xs={10} sm={9} md={9} lg={8} xl={9} ><span key={item.vol.ubicacio} className={"vol"}>{item.vol.ubicacio}</span></Col>
                                                    <Col xs={4} sm={5} md={5} lg={5} xl={9}  ><span key={item.vol.datavol} className={"vol"} >{item.vol.datavol}</span></Col>
                                                    <Col xs={4} sm={4} md={5} lg={5} xl={3} ><span key={item.vol.numvol} className={"vol"} >{item.vol.numvol}</span></Col>
                                                    <Col xs={6} sm={5} md={5} lg={6}  xl={3}><span key={item.vol.horari} className={"vol vol-right"} >{item.vol.horari}</span></Col>

                                                </>


                                                )

                                        })

                                    }

                                    </Row>
                                </Col>
                            </Row>
                        }



                        {/* DIFERENCIA CON DESTINACIONS*/}
                        <div className={"block_mapa"}>
                            <p className={"bold"}>ITINERARI</p>
                            {
                                campsViatge &&
                                <Image className={"mapa"} src={campsViatge?.mapa.mediaItemUrl}/>
                            }
                        </div>



                    </Col>

                </Row>

            </MaxWidthContainer>


            {
                campsViatge?.inclou &&
                <div className={"block2"} css={bicolor_style}>
                    <MaxWidthContainer>
                        <Row>
                            <Col className={"left"} sm={24} md={12}>

                                <div className={"inclou"}>
                                    <p className={"title"}>Inclou</p>
                                    <p className={""} dangerouslySetInnerHTML={{__html: campsViatge?.inclou}}/>
                                </div>

                            </Col>

                            <Col className={"right"} sm={24} md={12}>
                                <div className={"inclou"}>
                                    <p className={"title"}>No inclou</p>
                                    <p className={""} dangerouslySetInnerHTML={{__html: campsViatge?.noInclou}}/>
                                </div>
                            </Col>
                        </Row>
                    </MaxWidthContainer>
                </div>
            }

            <MaxWidthContainer className={"block3_autor"}>
                <p className={"title"}>Itinerari</p>

                <Row gutter={[60]} className={"row_itinerari"}>
                    <Col sm={24} md={12}>
                        {

                            campsViatge?.etapes.slice(0, (campsViatge?.etapes.length / 2) % 2 === 0 ? campsViatge?.etapes.length / 2 : (campsViatge?.etapes.length / 2)+1).map((item) => {
                                debugger
                                return (
                                    <div css={card_itinerari} key={item.etapa.titol}>
                                        <p className={"etapa_title"}>{item.etapa.dia}  <span className={"etapa_ubicacio"}>{item.etapa.ubicacio}</span></p>
                                        <p className={"etapa_title"}> <span className={"etapa_ubicacio"}>{item.etapa.subtTol}</span></p>
                                        <p className={""} dangerouslySetInnerHTML={{__html: item.etapa.descripcio}}/>

                                    </div>)
                            })

                        }
                    </Col>

                    <Col sm={24} md={12} >
                        {

                            campsViatge?.etapes.slice( (campsViatge?.etapes.length / 2) % 2 === 0 ? campsViatge?.etapes.length / 2 : ((campsViatge?.etapes.length / 2)+1)).map((item,i) => {
                                const number = campsViatge?.etapes.length;
                                return (
                                    <div css={ number !== i+1 ? card_itinerari : card_itinerari_finish} key={i}>
                                        <p className={"etapa_title"}>{item.etapa?.dia} <span className={"etapa_ubicacio"}>{item?.etapa?.ubicacio}</span></p>

                                        <p className={""} dangerouslySetInnerHTML={{__html: item.etapa.descripcio}}/>
                                    </div>)
                            })

                        }
                    </Col>
                </Row>





            </MaxWidthContainer>



            <Footer/>
        </div>

    );

};


export async function getStaticPaths() {

    return {
        paths: [
            { params: { slug:"atapuerca-i-burgos/" } } // See the "paths" section below
        ],
        fallback: true // See the "fallback" section below
    };
}

export async function getStaticProps({ params,...ctx }) {

    const client = initializeApollo();

    const {error, data} = await client.query({query: GET_VIATGE_DAUTOR_BY_SLUG, variables: { slug: params.slug }});
    const pagina = data.viatgedautor;
    const initialState = await getInitialData(params.slug);
    console.log(data);
    return { props: { pagina, initialState }, revalidate: 60};
}

const getInitialData = async (slug) => {
    const apolloClient = initializeApollo();
    const {error, data} = await apolloClient.query({query: GET_VIATGE_DAUTOR_BY_SLUG, variables: { slug: slug }});
    return apolloClient.cache.extract();
}

export default PageViatgeDautor;



