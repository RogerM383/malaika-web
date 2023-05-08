import React, {useContext, useEffect, useState} from 'react';
import {destinacio_style} from "../../styles/pages/destinacionsStyles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {card_destinacio, top_img_tagged_card} from "../../styles/components/CardStyles";
import Image from "../../../package/components/Image";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_TERM_SLUG} from "../../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";
import {GET_ZONED_PAGES, GET_PAGE_BY_URI} from "../../contexts/apollo/queries/pages";
import {destinacions_styles} from "../../styles/pages/destinacioStyle";
import {GET_VIATGES_DESTACATS, GET_VIATGES_ZONA} from "../../contexts/apollo/queriesTest";
import {Col, Row} from "antd";
import HeaderInici from "../../components/HeaderInici";
import {LaunguageContext} from "../../contexts/LanguageContext";


const PageDestinacions = ({id, title, uri, status, slug, featuredImage, translations,content, date, ...props}) => {

    debugger
    const router = useRouter();

    const {language,setLanguage} = useContext(LaunguageContext)
    useEffect(() => {

        translations &&
        setLanguage({
            language: {code: 'ES'},
            pageTranslation: translations.length >= 1 ? "destinacions/"+translations[0].slug : null
        })

    }, []);


    const PER_PAGE = 6;
    const [pageInfo, setPageInfo] = useState(null);



    /***********************************************************************/
    const [loadViatges, { loading: loadingVD, error: errorVD, data }] = useLazyQuery(GET_VIATGES_ZONA,{variables: {slug:slug}});

    useEffect(() => {
        if(slug)
        loadViatges();
    }, [slug]);

    useEffect(() => {
        if (data) {
            setViatges( data?.zona?.viatges)
        }
        debugger
    },[data]);

    const [viatges, setViatges] = useState([]);

    /****WORKAROUND*******************************************************************/


    const goTo = (url) => (e) => {
        router.push(url)
    }

    const elements =[1,2,3,4,5,6,7,8,9,10]

    return (
        <div css={destinacions_styles}>

            <HeaderInici title={title?.toUpperCase()} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer className={"block1"}>

                <h2 className={"title"}>
                    <p dangerouslySetInnerHTML={{__html: content}}/>
                </h2>

                <Row gutter={[40,40]}>
                    {

                        viatges?.nodes?.map((item) => {
                            const {dates} = item.Campsviatge;
                            return (
                                <Col sm={24} md={12} lg={8} >
                                    <div  onClick={goTo("/viaje-destinacion/"+item.slug)} css={top_img_tagged_card}>
                                        <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}/>
                                        <div className={"text"}>
                                            <span className={"title"}>{item.title}</span>
                                            <span  className={"tags"}>{item.subtitolViatge.subtitolviatge}</span>
                                            <span className={"calendar"}><img src={"/calendar_icon.png"}/> {dates} </span>
                                            <span className={"more_info"}>Más información <span className={"arrow"}>&#8594;</span>	</span>
                                        </div>
                                    </div>
                                </Col>

                            )
                        })

                    }

                </Row>


            </MaxWidthContainer>

            <Footer></Footer>


        </div>


    );
};

export async function getStaticPaths() {
    const client = initializeApollo();
/*    const {error, data} =  await client.query({ query: GET_ZONED_PAGES });
    const paths = data.terms.nodes.map( (node) => {
        let term = node.slug;
        let aux;
        for (let page of node.pages.edges) {
            if (page.node.uri) {
                aux = {params: {uri: page.node.uri, term: term}};
            }
        }
        return aux;
    });

    return { paths, fallback: true }*/


    return {
        paths: [
            { params: { uri:"asia/" } } // See the "paths" section below
        ],
        fallback: true // See the "fallback" section below
    };

}

export async function getStaticProps({ params,...ctx }) {
    const {uri, term} = params;
    const client = initializeApollo();
    const {error, data} = await client.query({query: GET_PAGE_BY_URI, variables: { uri: uri }});

/*    const {error:error2, data:data2} = await client.query({query:  GET_VIATGE_BY_TERM_SLUG, variables: {first: 6, slug:"Oceania"}});
    console.log("data2")
    console.log(data2)*/


    const page = data.pageBy;
    return { props: {...page}, revalidate: 60 };
}

export default PageDestinacions;



