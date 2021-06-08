import React, {useEffect, useState} from 'react';
import {home_styles} from "../styles/pages/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../../package/components/Card";
import Image from "../../package/components/Image";
import {card_home_1, card_home_2} from "../styles/components/CardStyles";
import Grid from "../components/Grid";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PAGE_BY_URI, GET_POSTS, GET_VIATGES_AUTOR} from "../contexts/apollo/queries";
import {apolloClient} from "../contexts/apollo/ApolloContext";


const Page = ({ id, title, uri, status, slug, content, featuredImage, notadestacada, descripcioviatgesdautor, ...props }) => {

    const PER_PAGE = 6;
    const [loadViatgesAutor, { loading: loadingVA, error: errorVA, data: dataVA }] = useLazyQuery(GET_VIATGES_AUTOR,{variables: {first: PER_PAGE}});
    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        loadViatgesAutor();
        //loadTextos();
    }, []);

    useEffect(() => {
        if (!loadingVA && dataVA) {
            const { nodes, pageInfo } = dataVA.viatgesdautor;
            setPageInfo(pageInfo);
            setViatgesAutor(viatgesAutor.concat(nodes));
        }
    },[dataVA]);


    const elements = ['one', 'two', 'three', 'four', 'five', 'six'];

    const router = useRouter();

    const goToFitxa = () => {
        router.push("/fitxa-viatge-autor")
    }

    const goToViatges = () => {
        router.push("/destinacions")
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
                    <p className={"fs-26 bold"}>Hi ha experiències que no passen desapercebudes, emocions que no s'obliden i que desitgem que perdurin per sempre.
                    </p>
                </div>

                <div className={'title'}>
                    <h2>
                        <span>Viatges</span><span>d’Autor /</span>
                    </h2>
                    <h5 className={'litle'}>Grups reduits</h5>
                </div>
                {
                    descripcioviatgesdautor && descripcioviatgesdautor.descripcioViatgesDautor &&
                    <div className={"subtitle fs-16 bold didot"}
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
                                fitxa
                            } = customFields;
                            return (
                                <Card className={'card-vautor'} css={card_home_1}>
                                    <div className={"card-text"}>
                                        <span className={"card-title"}>{title}</span>
                                        <div className={"card-data"}><img src={"/calendar_icon.png"}/><span>{durada}</span></div>
                                        <span className={"more-info"} onClick={goToFitxa}>Més Informació    &#8594;</span>
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

                            elements.map((element) => {
                                return (
                                    <Card onClick={goToViatges} css={card_home_2}>
                                        <Image src={"home_card_1.png"}></Image>
                                        <div className={"text"}>
                                            <span className={"db didot bold fs-18"}>FLORÈNCIA, art i cultura</span>
                                            <span css={{marginBottom: '1.5rem'}} className={"db fs-12"}>Museus, gastonomia i música clàssica</span>
                                            <p className={"fs-12 sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                            <span className={" db didot fs-14 bold"}>Més Informació -></span>
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
                    <div className={"row"}>

                        <div className={"column"}>
                            <span css={{color: '#9B9B9B'}}>Farm Visit</span>
                            <h4 className={"bold primary fs-40"}>Novetats</h4>
                            <p className={"fs-16"}>Us mantenim informtas de les novetats, normativa,
                                documentació, i tot allò que
                                pugui afectar al vostre viatge
                                o sigui del vostre interès. </p>
                            {/*<input className={"fs-16"} type={"text"} placeholder={"Busca novetats"}/>*/}
                        </div>


                        <div className={"column"}>
                            <div className={"normas"}>
                                <div className={"normas_item"}>
                                    <div className={'fecha'}>28/01/2021</div>
                                    <div className={'data'}>
                                        <p>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"primary"}> + informació</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={"normas_item"}>
                                    <p>28/01/2021</p>
                                    <div>
                                        <p>Obligatorietat de test PCR per entrar a la Gran Bretanya</p>
                                        <p>La nova normativa britànica obliga a les persones que vulguin entrar al
                                            pais a la presentació del test PCR.
                                            <span className={"primary"}> + informació</span>
                                        </p>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>


                </MaxWidthContainer>
            </div>


            <div className={"block4"}>

                <MaxWidthContainer>

                    <div className={"row"}>

                        <div className={"left"}>
                            <p className={"didot fs-30"}>I si vols estar informat de tot</p>
                        </div>

                        <div className={"right"}>
                            <div className={"subscribe"}>
                                <p className={"fs-18 sbold"}>Subscriu-te al nostre Newsletter</p>
                                <p className={"fs-12"}>Inscriviu-vos a les nostres llistes de correu i rebreu les novetats
                                    ofertes i promocions directament a la safata d’entrada.</p>
                            </div>
                            <div className={"form_subscribe"}>
                                <input className={"fs-12"} type={"text"} placeholder={"El teu email"}/>
                                <button className={"fs-12"}>Subscriu-te</button>
                            </div>
                        </div>
                    </div>

                </MaxWidthContainer>

            </div>


            <Footer></Footer>
        </div>

    );

};

export const getStaticProps = async (ctx) => {
    const data = await apolloClient.query({query: GET_PAGE_BY_URI, variables: { uri: '/inici/' }})
    .then((data) => {
        return data.data.pageBy;
    });
    console.log(data)



    return {props: data, revalidate: 3600};
}

export default Page;



