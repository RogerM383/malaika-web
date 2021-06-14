import React from 'react';
import {viatge_autor_fitxa} from "../../styles/pages/fitxa_viatge_autorStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../../package/components/Image";
import {card_itinerari, card_itinerari_finish} from "../../styles/components/CardStyles";
import Card from "../../../package/components/Card";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {bicolor_style} from "../../styles/components/BiColorBlock";
import {initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_SLUG, GET_VIATGE_DAUTOR_BY_SLUG} from "../../contexts/apollo/queriesTest";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


const PageViatgeDautor = ({children,page, ...props}) => {

    if(page?.title === undefined){
        return null
    }

    const {Campsviatge,slug,title,uri,content,featuredImage} = page
    const{autor,durada,etapes,inclou,noInclou,preu,suplement,taxes,grup,vols,mapa}=Campsviatge

    debugger


    return (
        <div css={viatge_autor_fitxa}>
            <Header title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer>
                <div className={"breadcrumb"}>VIATGES D’AUTOR > {title}</div>
            </MaxWidthContainer>

            <MaxWidthContainer className={"block1"}>

                <Row gutter={[60]}>
                    <Col className={"left_column"} sm={24} md={12} >
                        <div className={""}>
                            <p className={"title"}>{title}</p>
                            <p className={""} dangerouslySetInnerHTML={{__html: content}}/>
                            <button >Fitxa viatge pdf</button>

                        </div>
                    </Col>
                    <Col  className={"right_column"}  sm={24} md={12}>
                        <div>
                            <p>{grup}</p>
                            <p>{preu}</p>
                            <p>Taxes: {taxes}</p>
                            <p>Suplemento: {suplement}</p>
                        </div>

                        <Row className={"plane"}>
                            <Col span={2}>
                                <img src={"../plane_icon.png"}/>
                            </Col>
                            <Col span={22}>
                                {
                                    vols.map((item)=><p>{item.datavol}</p>)
                                }
                            </Col>




                        </Row>

                        <div className={"block_mapa"}>
                            <p className={"bold"}>ITINERARI</p>
                            <Image className={"mapa"} src={mapa.mediaItemUrl}/>
                        </div>



                    </Col>

                </Row>

            </MaxWidthContainer>


            {
                inclou &&
                <div className={"block2"} css={bicolor_style}>
                    <MaxWidthContainer>
                        <div className={"columna"}>
                            <p className={"title"}>Inclou</p>
                            <p className={""} dangerouslySetInnerHTML={{__html: inclou}}/>
                        </div>

                        <div className={"columna"}>
                            <p className={"title"}>No inclou</p>
                            <p className={""} dangerouslySetInnerHTML={{__html: noInclou}}/>
                        </div>

                    </MaxWidthContainer>

                </div>
            }

            <MaxWidthContainer className={"block3"}>
                <p className={"title"}>Itinerari</p>

                <Row gutter={[60]}>
                    <Col sm={24} md={12}>
                        {

                            etapes.slice(0, (etapes.length / 2) % 2 === 0 ? etapes.length / 2 : (etapes.length / 2)+1).map((item) => {
                                return (
                                    <Card css={card_itinerari}>
                                        <p className={"etapa_title"}>{item.etapa.dia}</p>
                                        <p className={""}>{item.etapa.ubicacio}</p>
                                        <p className={""} dangerouslySetInnerHTML={{__html: item.etapa.descripcio}}/>

                                    </Card>)
                            })

                        }
                    </Col>

                    <Col sm={24} md={12} >
                        {

                            etapes.slice( (etapes.length / 2) % 2 === 0 ? etapes.length / 2 : ((etapes.length / 2)+1)).map((item,i) => {
                                const number = etapes.length;
                                return (
                                    <Card css={ number !== i+1 ? card_itinerari : card_itinerari_finish}>
                                        <p className={"fs-24"}>{item.etapa?.dia}</p>
                                        <p className={" fs-20 sbold"}>{item?.etapa?.ubicacio}</p>
                                        <p className={""} dangerouslySetInnerHTML={{__html: item.etapa.descripcio}}/>
                                    </Card>)
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
    const page = data.viatgedautor;

    console.log(data);
    return { props:{page}, revalidate: 3600};
}



export default PageViatgeDautor;



