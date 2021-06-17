import React from 'react';
import {viatge_destinacio_fitxa} from "../../styles/pages/fitxa_viatge_destinacioStyles";
import Header from "../../components/Header";
import Image from "../../../package/components/Image";
import Footer from "../../components/Footer";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {card_fitxa_destinacio, card_home_2, top_img_tagged_card} from "../../styles/components/CardStyles";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {bicolor_style} from "../../styles/components/BiColorBlock";
import {initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_SLUG, GET_VIATGES_DESTACATS} from "../../contexts/apollo/queriesTest";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';
import HeaderInici from "../../components/HeaderInici";





const PageViatgeDestinacio = ({page,destacats,...props}) => {

if(page?.title === undefined){
    return null
}

    const {Campsviatge,slug,title,uri,content,featuredImage,zones} = page
    const{autor,durada,etapes,inclou,noInclou,preu,suplement,taxes,grup,sortides,mapa}=Campsviatge

debugger



    const items = ['one', 'two'];

    const router = useRouter();

    const goTo = (slug)=>(e) =>{
        router.push(slug);
    }

    return (

                <div css={viatge_destinacio_fitxa}>
                    <HeaderInici img={featuredImage?.node?.mediaItemUrl}/>


                    <MaxWidthContainer>
                     <div className={"breadcrumb"}>DESTINACIONS > {zones?.nodes[0]?.name } > {title}</div>
                    </MaxWidthContainer>

                    <MaxWidthContainer className={"block1"}>

                        <Row gutter={[60]}>
                            <Col className={"left_column"} sm={24} md={12} >
                                <div >
                                    <p className={"title"}>{title}</p>
                                    <p  className={"content"}  dangerouslySetInnerHTML={{__html: content}}/>
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
                                      <p> "TODO coger el dato correcto"</p>
                                    </Col>




                                </Row>





                            </Col>

                        </Row>

                    </MaxWidthContainer>
                    {
                        inclou &&
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
                    }


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
                                                <Col sm={24} md={12}>
                                                    <Card onClick={goTo("/viatge-destinacio/"+item.slug)} css={top_img_tagged_card}>
                                                    <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}></Image>
                                                    <div className={"text"}>
                                                        <span className={"title"}>{item.zones?.nodes[0]?.name}</span>
                                                        <p className={"tags"}>{item.title}</p>
                                                        <span className={"calendar"}><img src={"/calendar_icon.png"}/>{dates}</span>
                                                        {/*<p>Més Informació -></p>*/}
                                                    </div>
                                                </Card>
                                                </Col>
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



