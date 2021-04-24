import React from 'react';
import {viatge_destinacio_fitxa} from "../styles/pages/fitxa_viatge_destinacioStyles";
import Header from "../components/Header";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_fitxa_destinacio, card_home_2} from "../styles/components/CardStyles";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two'];
    return (
        <div css={viatge_destinacio_fitxa}>
            <Header img={"Banner.png/"}/>

            <div className={"container"}>

                <div className={"breadcrumb"}>DESTINACIONS > EUROPA > SALZBURG</div>

                <div className={"row  block1"}>
                    <div className={"column"}>
                        <p className={"title didot bold"}>Salzburg Imperial</p>
                        <p>Ciutats imperials i Alps</p>
                        <p>Viatge a Japó amb un ampli recorregut que ens porta desde les modernes ciutats al món rural i els Alps.</p>
                        <p className={"bold"}> DESTACA </p>
                        <li>Visita Monte Fuji</li>
                        <li> Les geisas de Kyoto</li>
                        <li> Santuari Itsukushima</li>

                        <button>Fitxa viatge pdf</button>

                    </div>


                    <div className={"column"}>
                        <div>
                            <p>GRUP: 8-16 PERSONES</p>

                            <div>
                                <span> PREU : 3575.00€ (per persona en habitació doble)</span>
                                <span> Taxes d'aeroport 245.00€</span>
                                <span> Suplement hab. individual: 660.00€</span>

                            </div>

                            <div className={"plane"}>
                                <img src={"plane_icon.png"}/>del 7 AL 12 D’octubre 2021
                            </div>
                        </div>



                    </div>
                </div>

            </div>


            <div className={"block2"}>
                <div className={"container"}>
                    <div className={"columna"}>
                        <p className={"fs-30 bold didot"}>Inclou</p>
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
                        <p className={"fs-30 bold didot"}>No inclou</p>
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
                <div className={"container"}>
                  <div className={"row"}>
                      <div className={"column column-33"}>
                          <p className={"bold fs-40 text didot"}>Altres viatges que et poden interessar</p>
                          </div>
                      <div className={"column"}>
                          <Grid size={'250px'}>
                              {

                                  elements.map((element)=>{
                                      return(
                                          <Card css={card_fitxa_destinacio}>
                                              <Image src={"home_card_1.png"}></Image>
                                              <div className={"text"}>
                                                  <p className={"didot bold text fs-18"}>ANDALUSIA CRUILLA DE CULTURES</p>
                                                  <p><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                                  <p>Més Informació -></p>
                                              </div>


                                          </Card>
                                      )
                                  })

                              }
                          </Grid>
                      </div>
                  </div>
                </div>
            </div>

            <Footer/>
        </div>

    );

};


export default Page;



