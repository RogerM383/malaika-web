import React, {useContext, useEffect, useState} from 'react';
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
import {GET_VIATGE_BY_SLUG, GET_VIATGES_DESTACATS, GET_VIATGES_ZONA} from "../../contexts/apollo/queriesTest";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';
import HeaderInici from "../../components/HeaderInici";
import {viatge_fitxa} from "../../styles/pages/fitxa_viatge_autorStyles";
import {LaunguageContext} from "../../contexts/LanguageContext";
import {GET_PAGE_BY_URI} from "../../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";
import {GET_BLOG_ENTRYS} from "../../contexts/apollo/queries/blog";





const PageViatgeDestinacio = ({data, ...props}) => {

    const items = ['one', 'two'];

    const router = useRouter();

    const [page, setPage] = useState(null);
    const [campsViatge, setCampsViatge] = useState(null);
    useEffect(() => {

        if (data) {
            setPage(data.viatge);
            setCampsViatge(data.viatge.Campsviatge);
        }
    },[data]);

    const [destacats, setDestacats] = useState(null);
    const [loadDestacats, { loading, errorD, data: dataDestacats }] = useLazyQuery(GET_VIATGES_ZONA);
    useEffect(() => {
        if (dataDestacats) {
            setDestacats(dataDestacats.zona.viatges);
        }
    },[dataDestacats]);

    useEffect(() => {
        if (page)
            loadDestacats({variables: {slug: page.zones.nodes[0].slug, first:2}});
    }, [page]);




    const {language,setLanguage} = useContext(LaunguageContext)

    useEffect(() => {
        if (page) {
            setLanguage({ ...language,  pageTranslation: page.translations.length >= 1 ? "viaje-destinacion/" + page.translations[0].slug : null});
        }
    }, [page]);


    const goTo = (slug)=>(e) =>{
        router.push(slug);
    }

    return (
                <div css={viatge_fitxa}>

                    <HeaderInici img={page?.featuredImage?.node?.mediaItemUrl}/>


                    <MaxWidthContainer>
                     <div className={"breadcrumb"}>DESTINACIONS > {page?.zones?.nodes[0]?.name } > {page?.title}</div>
                    </MaxWidthContainer>

                    <MaxWidthContainer className={"block1"}>

                        <Row>
                            <Col className={"left_column"} sm={24} md={12} >
                                <div>
                                    <div className={"title"}>
                                        <div style={{marginBottom: '1rem'}}>{page?.title}</div>
                                        <div style={{fontSize: '1.2rem'}}>{page?.subtitolViatge?.subtitolviatge}</div>
                                    </div>
                                    <div className={"content"}  dangerouslySetInnerHTML={{__html: page?.content}}/>
                                    {   campsViatge?.fitxa?.mediaItemUrl &&
                                        <button><a target={"_blank"} css={{color:'white'}} href={campsViatge?.fitxa?.mediaItemUrl}>Fitxa viatge pdf</a></button>
                                    }
                                    {
                                        campsViatge?.notaFitxa &&
                                        <span style={{fontStyle: 'italic', fontSize: '.7rem', display: 'block', marginTop: '1rem'}}>{campsViatge?.notaFitxa}</span>
                                    }
                                </div>
                            </Col>
                            <Col  className={"right_column"}  sm={24} md={12}>
                                <div>
                                    {
                                        campsViatge?.grup &&
                                        <p>GRUP: {campsViatge?.grup}</p>
                                    }
                                    {

                                        campsViatge?.preu &&
                                        <span>PREU: {campsViatge?.preu}</span>

                                    }

                                    {
                                        campsViatge?.taxes &&
                                        <span>Taxes d'aeroport: {campsViatge?.taxes}</span>
                                    }
                                    {
                                        campsViatge?.suplement &&
                                        <span>Suplement hab. individual: {campsViatge?.suplement}</span>
                                    }

                                </div>

                                {
                                    campsViatge?.dates &&
                                    <Row className={"plane"}>
                                        <Col span={2}>
                                            <img src={"../plane_icon.png"}/>
                                        </Col>
                                        <Col span={22}>
                                            <p> {campsViatge?.dates}</p>
                                        </Col>
                                    </Row>
                                }






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


                    <div className={"block3_destinacio"}>

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

                                            return (
                                                <Col sm={24} md={12}>
                                                    <div onClick={goTo("/viatge-destinacio/"+item.slug)} css={top_img_tagged_card}>
                                                    <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}></Image>

                                                        <div className={"text"}>
                                                            <span className={"title"}>{item.title}</span>
                                                            <span  className={"tags"}>{item.subtitolViatge.subtitolviatge}</span>
                                                            <span className={"calendar"}><img src={"/calendar_icon.png"}/> {dates} </span>
                                                            <span className={"more_info"}>Més informació <span className={"arrow"}>&#8594;</span>	</span>
                                                        </div>

                                                </div>
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

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { slug:"jordania-10-dies/" } } // See the "paths" section below
        ],
        fallback: true // See the "fallback" section below
    };
}

export const getStaticProps = async ({ params,...ctx }) => {
    const {data, initialState} = await getInitialData(params.slug);
    return {props: {data, initialState}, revalidate: 60};
}

const getInitialData = async (slug) => {
    const client = initializeApollo();
    //const {error, data} = await apolloClient.query({query: GET_PAGE_BY_URI, variables: { uri: '/blog/' }})

    const {error, data} = await client.query({query: GET_VIATGE_BY_SLUG, variables: { slug: slug }});
    const page = data.viatge;
    return { data: data, initialState: client.cache.extract()};
}

/*export async function getStaticProps({ params,...ctx }) {

    const client = initializeApollo();

    const {error, data} = await client.query({query: GET_VIATGE_BY_SLUG, variables: { slug: params.slug }});
    const page = data.viatge;

    console.log(page);

    const {error:error2, data:data2} = await client.query({query: GET_VIATGES_ZONA,variables: {slug:page.zones.nodes[0].slug,first:2}});
    const destacats =data2.zona.viatges;


    return { props:{page,destacats}, revalidate: 60};
}*/

export default PageViatgeDestinacio;



/*
const page = await client.query({query: GET_VIATGE_BY_SLUG, variables: { slug: params.slug }})
    .then((data) => {
        return data.data.viatge;
    });


const destacats = await client.query({query: GET_VIATGES_DESTACATS})
    .then((data) => {
        return data.data.viatges;
    });


return { props:{...page,...destacats}, revalidate: 60};
*/

