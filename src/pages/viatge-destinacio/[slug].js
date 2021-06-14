import React from 'react';
import {viatge_destinacio_fitxa} from "../../styles/pages/fitxa_viatge_destinacioStyles";
import Header from "../../components/Header";
import Image from "../../../package/components/Image";
import Footer from "../../components/Footer";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {card_fitxa_destinacio, card_home_2} from "../../styles/components/CardStyles";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {bicolor_style} from "../../styles/components/BiColorBlock";
import {initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_SLUG, GET_VIATGES_DESTACATS} from "../../contexts/apollo/queriesTest";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';
import { Typography, Switch } from 'antd';
const { Paragraph, Text } = Typography;



const PageViatgeDestinacio = ({page,destacats,...props}) => {

if(page?.title === undefined){
    return null
}

    const {Campsviatge,slug,title,uri,content,featuredImage,zones} = page
    const{autor,durada,etapes,inclou,noInclou,preu,suplement,taxes,grup,sortides,mapa}=Campsviatge

debugger



    const items = ['one', 'two'];

    const router = useRouter();

    const goToFitxa = (e) =>{
        router.push("/viatge-destinacio-destinacio");
    }

    return (

                <div css={viatge_destinacio_fitxa}>
                    <Header img={featuredImage?.node?.mediaItemUrl}/>


                    <MaxWidthContainer>
                     <div className={"breadcrumb"}>DESTINACIONS > {zones?.nodes[0]?.name } > {title}</div>
                    </MaxWidthContainer>

                    <MaxWidthContainer className={"block1"}>

                        <Row gutter={[60]}>
                            <Col sm={24} md={12}>
                                <p className={"title"}>{title}</p>
                                <p className={""} dangerouslySetInnerHTML={{__html: content}}/>
                                <button className={"fs-24"}>Fitxa viatge pdf</button>
                            </Col>

                            <Col sm={24} md={12}>
                                        <p>{grup}</p>
                                        <p>{preu}</p>
                                        <p>Taxes: {taxes}</p>
                                        <p>Suplemento: {suplement}</p>

                                        <div className={"plane"}>
                                            <img src={"../plane_icon.png"}/> "TODO coger el dato correcto"
                                        </div>
                            </Col>
                        </Row>



                    </MaxWidthContainer>


                    <div css={bicolor_style} className={"block2"} >
                        <MaxWidthContainer>
                            <div className={"columna"}>
                                <p className={"didot fs-30 bold"}>Inclou</p>
                                <p className={"fs-20"}>{inclou} </p>
                            </div>

                            <div className={"columna"}>
                                <p className={"didot fs-30 bold"}>No inclou</p>
                                <p className={"fs-20"}>{noInclou}
                                </p>
                            </div>
                        </MaxWidthContainer>


                    </div>


                    <div className={"block3"}>

                        <MaxWidthContainer>
                            <Row gutter={[40,40]}>
                            <Col  xs={24} sm={24} md={24} lg={10} xl={10} >
                                <p className={"title"}>Altres viatges que et poden interessar</p>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={14} xl={14} >
                                <Row gutter={[40,40]}>
                                    {
                                        destacats?.nodes?.map((item) => {
                                            const {dates} = item.Campsviatge;
                                            debugger
                                            return (
                                                <Col sm={24} md={12}><Card onClick={goToFitxa} css={card_fitxa_destinacio}>
                                                    <Image src={item.featuredImage.node.mediaItemUrl}></Image>
                                                    <div className={"text"}>
                                                        <span className={" db didot bold text fs-18"}>{item.zones?.nodes[0]?.name}</span>
                                                        <p className={"fs-14"}>{item.title}</p>
                                                        <div className={"calendar"}>
                                                            <img src={"/calendar_icon.png"}/>
                                                            <p className={"fs-14 sbold"}>{dates}</p>
                                                        </div>

                                                        {/*<p>Més Informació -></p>*/}
                                                    </div>
                                                </Card></Col>
                                            )
                                        })

                                    }
                                </Row>
                            </Col>
                        </Row>
                        </MaxWidthContainer>

                    </div>

                    <Footer/>
                </div>



    );

};



export async function getStaticPaths() {

    return {
        paths: [
            { params: { slug:"jordania-10-dies/" } } // See the "paths" section below
        ],
        fallback: true // See the "fallback" section below
    };
}

export async function getStaticProps({ params,...ctx }) {

    const client = initializeApollo();

    const {error, data} = await client.query({query: GET_VIATGE_BY_SLUG, variables: { slug: params.slug }});
    const page = data.viatge;

    const {error:error2, data:data2} = await client.query({query: GET_VIATGES_DESTACATS});
    const destacats =data2.viatges;


    console.log(data);
    return { props:{page,destacats}, revalidate: 3600};
}

export default PageViatgeDestinacio;



