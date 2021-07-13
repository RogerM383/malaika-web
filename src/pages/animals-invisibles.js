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
import {animalsInvisiblesStyles} from "../styles/pages/animalsInvisiblesStyles";


const AnimalsInvisiblesPage = ({title, uri, status, slug, featuredImage, notadestacada, descripcioviatgesdautor, Novetats, novetats, galeria, content: contenido, page, ...props}) => {


    const router = useRouter();
    const PER_PAGE = 4;

    const [loadViatgesDestacats, {loading: loadingVD, error: errorVD, data: dataVD}] = useLazyQuery(GET_VIATGES_DESTACATS, {variables: {first: 16}});
    const [viatgesDestacats, setViatgesDestacats] = useState([]);

    useEffect(() => {
        loadViatgesDestacats();
    }, []);

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


    return (

        <div css={animalsInvisiblesStyles}>

            <HeaderInici title={title} img={featuredImage?.node?.mediaItemUrl}/>
            <MaxWidthContainer className={'container'}>
                <div className={"block1"}>


                    <Image className={"logo_animals"} src={'/animal-invisibles.png'}></Image>

                    <h2 className={"title"}>Els nostres viatges /</h2>

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
                        <button> &#60; </button>
                        <button disabled>
                            /
                        </button>
                        <button> ></button>
                    </div>

                </div>
            </MaxWidthContainer>

            <Footer/>

        </div>
    );
};

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();

    const page = await client.query({query: GET_PAGE_BY_URI, variables: {uri: '/animals-invisibles/'}})
        .then((data) => {
            return data.data.pageBy;
        });

    return {props: {...page}, revalidate: 3600};
}

export default AnimalsInvisiblesPage;



