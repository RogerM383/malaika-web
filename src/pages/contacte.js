import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {blog_styles} from "../styles/pages/blogStyles";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {SEND_MAIL} from "../contexts/apollo/mutations/contacta";
import {useMutation} from "@apollo/client";
import {Col, notification, Row} from "antd";
import {contacta_styles} from "../styles/pages/contactaStyles";
import HeaderInici from "../components/HeaderInici";
import {initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../contexts/apollo/queries";


const PageContacta = ({title,featuredImage,children, ...props}) => {

    const [sendMail, resp] = useMutation(SEND_MAIL);
    const form = useRef(null);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const error = {
        borderColor: 'red'
    };
    const onChange = (e) => {
        const name = e.target.name;
        let aux = {};
        aux[name] = e.target.value;
        aux = {...data, ...aux}
        setData(aux)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        debugger

        if (data['condiciones'] && data['nombre'].length >= 1 && data['email'].length >= 1 && data['mensaje'].length >= 1) {
            setLoading(true);
            sendMail({
                variables: {
                    to: process.env.NEXT_PUBLIC_BELFOOD_MAIL,
                    subject: 'Formulario de contacto ',
                    body: `
                    <table>
                        <tr>
                            <td>Nombre: </td><td>${data['nombre']}</td>
                        </tr>
                        <tr>
                            <td>Correo electrónico: </td><td>${data['email']}</td>
                        </tr>
                        <tr>
                            <td>Telefono: </td><td>${data['telefono']}</td>
                        </tr>
                        <tr>
                            <td>Mensaje: </td><td>${data['mensaje']}</td>
                        </tr>
                    </table>
                `
                }
            }).then((resp) => {
                setLoading(false);
                const f = form.current;
                for (let element of f.elements) {
                    if (element.type === 'checkbox') {
                        element.checked = false;
                    } else {
                        element.value = '';
                    }
                }
                notification.success({
                    message: 'Mensaje enviado con éxito',
                    placement: 'bottomRight',
                    style: {
                        zIndex: 500,
                    },
                })
            }).catch((error) => {
                setLoading(false);
                notification.error({
                    message: 'Error de envío',
                    placement: 'bottomRight',
                    style: {
                        zIndex: 500,
                    },
                })
            });
            setData({});
        } else {
            setData(data);
        }
    }


    return (
        <div css={contacta_styles}>
            <HeaderInici
                title={title}
                img={featuredImage?.node?.mediaItemUrl}/>


                <div className={"block1"}>
                    <MaxWidthContainer>
                    <p className={"title_block"}>On som</p>
                    <Row gutter={[40, 40]}>
                        <Col xs={24} sm={12} md={12}>

                            <p className={"address"}>Carrer de París, 209 Pral 2a.</p>
                            <p className={"address"}>08008 BARCELONA</p>
                            <Row >
                                <Col flex={0}>
                                    <img src={"/phone_icon.png"}/>
                                </Col>
                                <Col flex={"auto"}>
                                    <p className={"db"}>+34 930 011 176</p>
                                </Col>

                            </Row>

                        <Row className={"emails"}>
                            <span>Toñi Castillo: <a>malaika@malaikaviatges.com</a></span>
                            <span>Maribel del Valle: <a>maribel@malaikaviatges.com</a></span>
                            <span>Fina Garcia: <a>fina@malaikaviatges.com</a></span>
                            <span>Anna Ayats: <a>aayats@malaikaviatges.com</a></span>
                        </Row>


                        </Col>


                        <Col xs={24} sm={12} md={12}>

                            <p className={"address"}>Camí dels Horts, 8</p>
                            <p className={"address"}>17124 Llofriu, Girona</p>
                            <Row >
                                <Col flex={0}>
                                    <img src={"/phone_icon.png"}/>
                                </Col>
                                <Col flex={"auto"}>
                                    <p className={"db"}>+34 872 503 266</p>
                                </Col>

                            </Row>
                            <Row className={"emails"}>
                            <span>Montse Tribulietx: <a>mtribulietx@malaikaviatges.com </a></span>
                            </Row>

                        </Col>
                    </Row>
                    </MaxWidthContainer>
                    </div>
            <MaxWidthContainer>
                <div className={"block2"}>

                    <form ref={form} onChange={onChange} onSubmit={onSubmit}>

                        <div className={"card_form"}>
                            <p className={"title_block"}>Contacta amb nosaltres</p>

                            <Row justify={"space-between"}>
                                <span className={"label"}>Nom complet</span>
                                <span>Opcional</span>
                            </Row>

                            <input name={'nombre'} style={(data && data['nombre']?.length <= 0) ? error : null} type={"text"}/>


                            <div>
                                <p className={"label"}>Correu electrònic</p>
                                <input style={(data && data['email']?.length <= 0) ? error : null} name={'email'} type={"text"}/>
                            </div>


                            <div>
                                <p className={"label"}>Telèfon</p>
                                <input name={"telefono"} style={(data && data['telefono']?.length <= 0) ? error : null} name={'telefono'} type={"text"}/>
                            </div>


                            <div>
                                <p className={"label"}>Missatge</p>
                                <textarea name={'mensaje'} style={(data && data['mensaje']?.length <= 0) ? error : null} id="w3review" rows="6"/>
                            </div>

                            <Row>

                                <Col span={24}>
                                    <div  className={"conditions"}>
                                        <input name={'condiciones'} type={"checkbox"} required/>
                                        <span className={"fs-16"}>He llegit i accepto la <a target={"_blank"} href={"avis-legal"}>política de privacitat</a></span>
                                    </div>

                                    <button>Enviar</button>
                                </Col>
                            </Row>

                        </div>


                    </form>

                </div>
            </MaxWidthContainer>




            <Footer/>
        </div>

    );

};


export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/contacte/' }})
        .then((data) => {
            return data.data.pageBy;
        });
    return {props: data, revalidate: 60};
}


export default PageContacta;



