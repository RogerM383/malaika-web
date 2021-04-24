import React from 'react';
import {viatge_autor_fitxa} from "../styles/pages/fitxa_viatge_autorStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";


const Page = ({children, ...props}) => {


    return (
        <div css={viatge_autor_fitxa}>
            <Header img={"Banner.png/"}/>

            <div className={"container"}>

                <div className={"breadcrumb"}>VIATGES D’AUTOR >  JAPÓ TRADICIONAL</div>

                <div className={"row block1"}>
                    <div className={"column"}>
                        <p className={"title"}>Japó Tradicional</p>
                        <p>Ciutats imperials i Alps</p>
                        <p>Viatge a Japó amb un ampli recorregut que ens porta desde les modernes ciutats al món rural i els Alps.</p>
                        <p className={"bold"}> DESTACA  </p>
                        <li>Visita Monte Fuji</li>
                        <li> Les geisas de Kyoto</li>
                        <li> Santuari Itsukushima</li>

                        <button>Fitxa viatge pdf</button>

                    </div>


                    <div className={"column"}>
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


            <div className={"block2"}>
                <div className={"container"}>
                    <div className={"columna"}>
                        <p className={"fs-30 bold"}>Inclou</p>
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
                        <p className={"fs-30 bold"}>No inclou</p>
                        <p className={"fs-20"}>Begudes i menjars no indicades com i a ncluses
                            Visites i excursiones no mencionades com incloses
                            Propines i extras personals
                            Taxes entrada/sortida al país o aeropuerts,
                            Ampliación de cobertures assegurança i anulació
                        </p>
                    </div>
                </div>


            </div>


            <div className={"block3"}>

            </div>

            <Footer/>
        </div>

    );

};


export default Page;



