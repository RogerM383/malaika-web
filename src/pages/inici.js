import React, {useEffect, useState} from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../../package/components/Card";
import Image from "../../package/components/Image";
import {card_home_1, card_home_2, top_img_tagged_card} from "../styles/components/CardStyles";
import Grid from "../components/Grid";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PAGE_BY_URI, GET_POSTS, GET_VIATGES_AUTOR} from "../contexts/apollo/queries";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_VIATGES_DESTACATS} from "../contexts/apollo/queriesTest";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';


const Page = ({page, ...props }) => {

    if(page?.title === undefined){
        return null
    }

    debugger
    const router = useRouter();

    /*PAGE INFO*/
    const { title, uri, status, slug, content, featuredImage, notadestacada, descripcioviatgesdautor,Novetats} = page;

    const PER_PAGE = 6;
    const [loadViatgesAutor, { loading: loadingVA, error: errorVA, data: dataVA }] = useLazyQuery(GET_VIATGES_AUTOR,{variables: {first: PER_PAGE}});
    const [loadViatgesDestacats, { loading: loadingVD, error: errorVD, data: dataVD }] = useLazyQuery(GET_VIATGES_DESTACATS);


    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [viatgesDestacats, setViatgesDestacats] = useState([]);
    //const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        loadViatgesAutor();
        loadViatgesDestacats();
    }, []);

    useEffect(() => {
        if (dataVA) {
            const { nodes, pageInfo } = dataVA.viatgesdautor;
           // setPageInfo(pageInfo);
            setViatgesAutor(viatgesAutor.concat(nodes));
        }
    },[dataVA]);

    useEffect(() => {
        if (dataVD) {
            setViatgesDestacats( dataVD.viatges)
        }
    },[dataVD]);





    const goTo = (url) => (e) => {
        router.push(url)
    }

    return (
        <div css={home_styles}>

            <Header title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer className={"block1"}>

                {
                    notadestacada.avisos &&
                    notadestacada.avisos.length > 0 &&
                    <div className={"alert"}>
                        <div className={'head'}>
                            <span css={{color: 'red'}}>*</span>
                            <span className={"didot fs-18  my-5"}>AVISOS:</span>
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

                <div className={"cita didot"}>
                    <p className={"fs-26 bold"} dangerouslySetInnerHTML={{__html: content}}/>

                </div>

                <div className={'title'}>
                    <h2>
                        <span>Viatges</span><span>d’Autor /</span>
                    </h2>
                    <h5 className={'litle'}>Grups reduits</h5>
                </div>
                {
                    descripcioviatgesdautor && descripcioviatgesdautor.descripcioViatgesDautor &&
                    <div css={{width:'60%'}} className={"subtitle fs-16 bold didot"}
                         dangerouslySetInnerHTML={{__html: descripcioviatgesdautor.descripcioViatgesDautor}}/>
                }


                <Grid size={"300px"}>
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

                            debugger
                            return (
                                <Card className={'card-vautor'} css={card_home_1}>
                                    <div className={"card-text"}>
                                        <span className={"card-title"}>{title}</span>
                                        <div className={"card-data"}><img src={"/calendar_icon.png"}/><span>
                                            {sortides.map((item) => item.datasortida)}
                                        </span></div>
                                        <span className={"more-info"} onClick={goTo("viatge-dautor/"+slug)}>Més Informació    &#8594;</span>
                                    </div>
                                    <Image className={"photo"} alt={image?.altText} src={image?.node?.mediaItemUrl}/>
                                </Card>
                            )
                        })
                    }

                </Grid>

                <div className={"bold fs-18 psmall more"}><a href={"viatges-dautor"}>Veure més viatges d’autor  &#8594;</a></div>

            </MaxWidthContainer>


            <div className={"block2"}>

                <MaxWidthContainer className={'container'}>

                    <h2 className={"title"}>Destacats /</h2>

                    <Grid size={"300px"}>
                       {

                            viatgesDestacats?.nodes?.map((item) => {
                                const {dates} = item.Campsviatge;
                                return (
                                    <Card onClick={goTo("viatge-destinacio/"+item.slug)} css={top_img_tagged_card}>
                                        <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}></Image>
                                        <div className={"text"}>
                                            <span className={"title"}>{item.title}</span>
                                            <span  className={"tags"} dangerouslySetInnerHTML={{__html: item.content}}/>
                                            <span className={"calendar"}><img src={"/calendar_icon.png"}/> {dates}</span>
                                            <span className={"more_info"}>Més Informació <span className={"arrow"}>&#8594;</span>	</span>
                                        </div>
                                    </Card>
                                )
                            })
                        }
                    </Grid>

                    {/*<div className={"next_prev"}>
                        <button> &#60; </button>
                        <button >/</button>
                        <button> ></button>
                    </div>*/}

                </MaxWidthContainer>

            </div>

            <div className={"block3"}>
                <MaxWidthContainer>
                    <Row className={"row"} >

                        <Col  sm={20} md={8} lg={6}  className={"column"}>
                            <span css={{color: '#9B9B9B'}}>Malaika</span>
                            <h4 className={"title-novetats"}>{Novetats.titolNovetats}</h4>
                            <p className={"fs-16"}>{Novetats.descripcioNovetats} </p>

                        </Col>

                        <Col sm={20} md={16} lg={18}  className={"column"}>

                            <div className={"normas"}>
                                <Row gutter={[40,40]}>
                                    <Col sm={24} md={5} lg={5} className={'fecha'}>28/01/2021</Col>
                                    <Col sm={24} md={19} lg={19}  className={'data'} >
                                        <p className={"data_title"}>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p className={"data_content"}>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"primary"}> + informació</span>
                                        </p>
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

                        <Col  sm={20} md={24} lg={12}  >
                            <p className={"info"}>I si vols estar informat de tot</p>
                        </Col>

                        <Col  sm={20} md={24} lg={12} >

                            <div className={"subscribe"}>
                                <p>Subscriu-te al nostre Newsletter</p>
                                <p>Inscriviu-vos a les nostres llistes de correu i rebreu les novetats
                                    ofertes i promocions directament a la safata d’entrada.</p>
                            </div>

                            <div >
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
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/inici/' }});
/*    .then((data) => {
        return data.data.pageBy;
    });*/

    console.log( data.data);

    return {props: {page:data.data.pageBy}, revalidate: 3600};
}

export default Page;



