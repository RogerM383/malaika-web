import React, {useContext, useEffect, useRef, useState} from 'react';
import {viatge_autor_style, nav_buttons} from "../styles/pages/viatge_autorStyles";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_discover, card_viatge_autor} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI, GET_TEXTOS, GET_VIATGES_AUTOR} from "../contexts/apollo/queries";
import {useLazyQuery, useQuery} from "@apollo/client";
import Slider from "react-slick";
// Import css slick files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderInici from "../components/HeaderInici";
import {Carousel} from "antd";
import {css} from "@emotion/react";
import {LaunguageContext} from "../contexts/LanguageContext";

const Page = ({ id, title, uri, status, slug, content, featuredImage, ...props }) => {

    const router = useRouter();
    const {language,setLanguage} = useContext(LaunguageContext);

    const PER_PAGE = 6;
    const [loadViatgesAutor, { loading: loadingVA, error: errorVA, data: dataVA }] = useLazyQuery(GET_VIATGES_AUTOR);
    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [pageInfo, setPageInfo] = useState(null);

    const [loadTextos, { loading: loadingTextos, error: errorTextos, data: dataTextos }] = useLazyQuery(GET_TEXTOS);
    const [textos, setTextos] = useState([]);

    useEffect(() => {

        if(language?.language){
            loadViatgesAutor({variables: {first: PER_PAGE, where:"ES"}});
            loadTextos({variables: {language:"ES"}});
        }

    }, []);



    useEffect(() => {

     /*   setLanguage({ ...language , pageTranslation:props.translations[0].slug})*/
        props.translations &&
        setLanguage({
            ...language ,
            pageTranslation:props.translations.length >= 1 ? props.translations[0].slug : null })
    }, [props.translations]);



    useEffect(() => {
        if (dataVA) {
            const { nodes, pageInfo } = dataVA.viatgesdautor;
            setPageInfo({...pageInfo});
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

    const goTo = (slug) => (e) =>{
       router.push("/viaje-de-autor/"+slug)
    }

    // --- Slider ------------------------------------------------------------------------------------------------------
    const settings = {
      //  dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const slider = useRef();
    const [slide, setSlide] = useState(0);

    const carrosusel = (theme) => {
        const style = css`
            .slick-dots{
                display: none!important;

            }

        `;
        return [style];
    }


    const t = [1,2,3,4,5];

    const handlePage = (e) =>{
        loadViatgesAutor({
            variables: {
                first: PER_PAGE * e,
                 after: pageInfo.endCursor,
    /*             last: null,
                 before: null*/
            }
        })
    }

    return (
        <div css={viatge_autor_style}>

           <HeaderInici title={title} img={featuredImage?.node?.mediaItemUrl}/>

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
                            featuredImage: image,
                            subtitolViatge
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
                        debugger

                        return (
                            <div onClick={goTo(slug)} className={'cva'} css={card_viatge_autor}>
                                <div>
                                    <div className={'photo-wrapper'}>
                                        <Image className={"photo"} alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                    </div>

                                    <div className={'card-info'}>

                                        <div>
                                            <span className={"title"}>{title}</span>
                                            { subtitolViatge?.subtitolviatge && <span className={'subtitle'}><span css={{color: 'red'}}>*</span>{subtitolViatge?.subtitolviatge}</span>}
                                        </div>

                                        <div className={"timetable"}>

                                            <div className={"calendar"}>
                                                <div><img src={"/calendar_icon.png"}/></div>
                                                <span className={"days"}>{durada}</span>
                                            </div>

                                            <div className={"plane"}>
                                                <div><img src={
                                                                campsViatge?.vols[0].vol.tipustrajecte === "Vol"
                                                                    ? "/plane_icon.png"
                                                                    : "/tren.png"
                                                                }/></div>
                                                <ul className={"fs-16"}>
                                                    {
                                                        sortides?.map( (item) => {

                                                            return (
                                                               <li>{item.datasortida}</li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>

                                        </div>

                                        <div className={"more_info"}>
                                            <span className={"author"}>{autor}</span>
                                            <span className={"button"} onClick={goTo(slug)} >Más información <span className={"primary"}>&#8594;</span> </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })

                }


              {/*  <Pagination onChange={handlePage} defaultCurrent={1} total={50} />*/}

                <div className={'navButons'} css={nav_buttons}>
                    {
                        pageInfo?.hasNextPage &&
                        <a className={'next'} onClick={(e) => {
                            loadViatgesAutor({
                                variables: {
                                    first: PER_PAGE, after: pageInfo.endCursor, last: null, before: null, where:"ES"
                                }
                            })
                        }}>
                            {'Cargar más viajes'}
                        </a>
                    }
                </div>

            </MaxWidthContainer>



            <div className={"block2"}>

                <MaxWidthContainer>

                    <p className={"discover"}>DESCUBRE</p>

                    <div className={"info"}>
                        <Carousel {...settings}
                                  adaptiveHeight={true}
                                  css={carrosusel}
                                   ref={ref => {console.log(ref); slider.current = ref; }} >
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
                                                {image?.node?.mediaItemUrl &&
                                                <Image alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                                }

                                                <p css={{float: 'right'}}></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>


                        <div className={"next_prev"}>
                            <button onClick={e => { setSlide(e); slider.current.prev(); }}> &#60; </button>
                            <button disabled>
                                /
                                {/*   <i className="fas fa-slash"></i>*/}
                            </button>
                            <button onClick={e => { setSlide(e); slider.current.next(); }}> > </button>
                        </div>
                    </div>




                </MaxWidthContainer>

            </div>

            <Footer/>

        </div>

    );

};

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/viajes-de-autor/' }})
    .then((data) => {
        return data.data.pageBy;
    });

    return {props: data, revalidate: 60};
}

export default Page;



