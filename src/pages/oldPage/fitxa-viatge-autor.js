import React from 'react';
import {viatge_autor_fitxa} from "../styles/pages/fitxa_viatge_autorStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";
import {card_itinerari, card_itinerari_finish} from "../styles/components/CardStyles";
import Card from "../../package/components/Card";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {bicolor_style} from "../styles/components/BiColorBlock";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three'];

    return (
        <div css={viatge_autor_fitxa}>
            <Header img={"foto3.png/"}/>

            <MaxWidthContainer>
                <div className={"breadcrumb"}>VIATGES D’AUTOR > JAPÓ TRADICIONAL</div>
            </MaxWidthContainer>

            <MaxWidthContainer className={"block1"}>

                    <div className={"row "}>
                        <div className={"column fs-24"}>
                            <p className={"title"}>Japó Tradicional</p>
                            <p className={"sbold "}>Ciutats imperials i Alps</p>
                            <p className={""}>Viatge a Japó amb un ampli recorregut que ens porta desde les modernes ciutats al món rural i els Alps.</p>
                            <p className={"bold"}> DESTACA </p>
                            <li>Visita Monte Fuji</li>
                            <li> Les geisas de Kyoto</li>
                            <li> Santuari Itsukushima</li>


                                <button >Fitxa viatge pdf</button>



                        </div>


                        <div className={"column"}>
                            <div className={"fs-18"}>

                                <p>GRUP: 8-16 PERSONES</p>

                                <div>
                                    <span> PREU : 3575.00€ (per persona en habitació doble)</span>
                                    <span> Taxes d'aeroport 245.00€</span>
                                    <span> Suplement hab. individual: 660.00€</span>

                                </div>

                                <div className={"plane"}>
                                    <img src={"plane_icon.png"}/>del 7 AL 12 D’octubre 2021
                                </div>

                                <div className={""}>
                                    <p className={"bold"}>ITINERARI</p>
                                    <Image src={"/map.png"}/>
                                </div>
                            </div>



                        </div>
                    </div>


            </MaxWidthContainer>



            <div className={"block2"} css={bicolor_style}>
                <MaxWidthContainer>

                        <div className={"columna"}>
                            <p className={"didot fs-30 bold"}>Inclou</p>
                            <p className={"fs-20"}>Vol Barcelona - Tokio/ - Barcelona.
                                Trasllats d’ entrada i sortida aeroport-hotel
                                Tots els transportes no inclososalapan Rail Pass com
                                visitas a ciutats en bus regulars, trens de rodalies.
                                Japan Rail Pass de 14 díes.
                                Alllotjament i menjars indicats a l’apartat allotjaments
                                Visites segons itinerari descrit.
                                Guía local de lengua castellana.

                            </p>

                        </div>

                        <div className={"columna"}>
                            <p className={"didot fs-30 bold"}>No inclou</p>
                            <p className={"fs-20"}>Begudes i menjars no indicades com i a ncluses
                                Visites i excursiones no mencionades com incloses
                                Propines i extras personals
                                Taxes entrada/sortida al país o aeropuerts,
                                Ampliación de cobertures assegurança i anulació
                            </p>
                        </div>

                </MaxWidthContainer>



            </div>


            <MaxWidthContainer className={"block3"}>
                <p className={"title"}>Itinerari</p>

                <div className={"row"}>
                    <div className={"column"}>
                        {

                            elements.map((item) => {
                                return (
                                    <Card css={card_itinerari}>
                                        <p className={"fs-24"}><span className={"bold"}>Dia1</span> 7 octubre</p>
                                        <p className={" fs-20 sbold"}>Barcelona - Tokyo</p>
                                        <li className={"fs-20"}>Arribada de matinada i trasllat al nostre hotel.</li>
                                        <li className={"fs-20"}>sopar lleuger y allotjament</li>
                                    </Card>)
                            })

                        }
                    </div>

                    <div className={"column"}>
                        {

                            elements.map((item,i) => {
                                const number = elements.length;
                                return (
                                    <Card css={ number !== i+1 ? card_itinerari : card_itinerari_finish}>
                                        <p className={"fs-24"}><span className={"bold"}>Dia {i}</span> {number} octubre</p>
                                        <p className={" fs-20 sbold"}>Barcelona - Tokyo</p>
                                        <li className={"fs-20"}>Arribada de matinada i trasllat al nostre hotel.</li>
                                        <li className={"fs-20"}>sopar lleuger y allotjament</li>
                                    </Card>)
                            })

                        }
                    </div>
                </div>


                <div className={"separator"}></div>


            </MaxWidthContainer>

            <Footer/>
        </div>

    );

};


export default Page;



