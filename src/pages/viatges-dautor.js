import React, {useEffect, useState} from 'react';
import {viatge_autor_style, nav_buttons} from "../styles/pages/viatge_autorStyles";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_discover, card_viatge_autor} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {apolloClient} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI, GET_TEXTOS, GET_VIATGES_AUTOR} from "../contexts/apollo/queries";
import {useLazyQuery, useQuery} from "@apollo/client";
import Slider from "react-slick";
// Import css slick files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = ({ id, title, uri, status, slug, content, featuredImage, ...props }) => {

    const router = useRouter();
    const PER_PAGE = 6;
    const [loadViatgesAutor, { loading: loadingVA, error: errorVA, data: dataVA }] = useLazyQuery(GET_VIATGES_AUTOR,{variables: {first: PER_PAGE}});
    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [pageInfo, setPageInfo] = useState(null);

    const [loadTextos, { loading: loadingTextos, error: errorTextos, data: dataTextos }] = useLazyQuery(GET_TEXTOS,{variables: {first: PER_PAGE}});
    const [textos, setTextos] = useState([]);

    useEffect(() => {
        loadViatgesAutor();
        loadTextos();
    }, []);

    useEffect(() => {
        if (dataVA) {
            const { nodes, pageInfo } = dataVA.viatgesdautor;
            setPageInfo(pageInfo);
            setViatgesAutor(viatgesAutor.concat(nodes));
        }
    },[dataVA]);

    useEffect(() => {
        if (dataTextos) {
            const { nodes, pageInfo } = dataTextos.textos;
            setTextos(nodes);
            debugger
        }
    },[dataTextos]);

    const goToFitxa = () =>{
        router.push("/fitxa-viatge-autor")
    }

    // --- Slider ------------------------------------------------------------------------------------------------------
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const t = [1,2,3,4,5];

    return (
        <div css={viatge_autor_style}>

            <Header title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer className={'container'}>

                <div className={"info"} dangerouslySetInnerHTML={{__html: content}}/>

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
                            fitxa
                        } = customFields;
                        debugger

                        return (
                            <div className={'cva'} css={card_viatge_autor}>
                                <div>
                                    <div className={'photo-wrapper'}>
                                        <Image className={"photo"} alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                    </div>

                                    <div className={'card-info'}>

                                        <span className={"title"}>{title}</span>

                                        <div className={"timetable"}>

                                            <div className={"calendar"}>
                                                <div><img src={"/calendar_icon.png"}/></div>
                                                <span className={"days"}>{durada}</span>
                                            </div>

                                            <div className={"plane"}>
                                                <div><img src={"/plane_icon.png"}/></div>
                                                <ul className={"fs-16"}>
                                                    {
                                                        etapes.map( (item) => {
                                                            const {etapa} = item;
                                                            return (
                                                               <li>{etapa.dia}</li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>

                                        </div>

                                        <div className={"more_info"}>
                                            <span className={"author"}>{autor}</span>
                                            <span className={"button"} onClick={goToFitxa} >Més Informació <span className={"primary"}>&#8594;</span> </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })

                }

                <div className={'navButons'} css={nav_buttons}>
                    {
                        pageInfo?.hasNextPage &&
                        <button className={'next'} onClick={(e) => {
                            loadPosts({
                                variables: {
                                    first: PER_PAGE, after: pageInfo.endCursor, last: null, before: null
                                }
                            })
                        }}>
                            {'Carregar més viatges'}
                        </button>
                    }
                </div>

            </MaxWidthContainer>



            <div className={"block2"}>

                <MaxWidthContainer>

                    <p className={"discover"}>DESCOBREIX</p>

                        <Slider {...settings}>
                            {
                                textos.map((text) => {
                                    const {
                                        content,
                                        date,
                                        id,
                                        slug,
                                        status,
                                        title,
                                        featuredImage: image
                                    } = text;
                                    return (
                                        <div>
                                            <div css={card_discover}>
                                                <div className={"text-info"}>
                                                    <h2 className={"title"}>{title}</h2>
                                                    <div className={'text'} dangerouslySetInnerHTML={{__html: content}}/>
                                                </div>
                                                <Image alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                                <p css={{float: 'right'}}></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                    <div className={"next_prev"}>
                        <button> &#60; </button>
                        <button> > </button>
                    </div>


                </MaxWidthContainer>

            </div>

            <Footer/>

        </div>

    );

};

export const getStaticProps = async (ctx) => {
    const data = await apolloClient.query({query: GET_PAGE_BY_URI, variables: { uri: '/viatges-dautor/' }})
    .then((data) => {
        return data.data.pageBy;
    });
    console.log(data)
    return {props: data, revalidate: 3600};
}

export default Page;



