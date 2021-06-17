import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {blog_styles} from "../styles/pages/blogStyles";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {SEND_MAIL} from "../contexts/apollo/mutations/contacta";
import {useMutation} from "@apollo/client";
import {Col, notification, Row} from "antd";
import {contacta_styles} from "../styles/pages/contactaStyles";


const PageContacta = ({children, ...props}) => {

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
            <Header
                title={"Contacta"}
                img={"palmeras.png/"}/>


            <MaxWidthContainer>
                <div className={"block1"}>

                            <p className={"title"}>CONTACTA CON NOSOTROS</p>
                            <form ref={form} onChange={onChange} onSubmit={onSubmit}>



                                <Row className={"input_form"} align={"middle"}>
                                    <Col span={8}>
                                        <span className={""}>Nombe completo</span>
                                    </Col>
                                    <Col span={8}>
                                        <input name={'nombre'} style={(data && data['nombre']?.length <= 0) ? error : null} type={"text"} />

                                    </Col>
                                </Row>

                                <Row align={"middle"}>
                                    <Col span={8}>
                                        <span className={""}>Correo electrónico</span>
                                    </Col>
                                    <Col span={8}>
                                        <input style={(data && data['email']?.length <= 0) ? error : null} name={'email'} type={"text"} />
                                    </Col>
                                </Row>

                                <Row align={"middle"}>
                                    <Col span={8}>
                                        <span className={""}>Teléfono</span>
                                    </Col>
                                    <Col span={8}>
                                        <input name={"telefono"} style={(data && data['telefono']?.length <= 0) ? error : null} name={'telefono'} type={"text"}/>
                                    </Col>
                                </Row>

                                <Row align={"middle"}>
                                    <Col span={8}>
                                        <span className={""}>Mensaje</span>
                                    </Col>
                                    <Col span={8}>
                                        <textarea name={'mensaje'} style={(data && data['mensaje']?.length <= 0) ? error : null} id="w3review" rows="6" cols="50"/>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={8}></Col>
                                    <Col span={16}>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className={"conditions"}>
                                            <input style={{margin: '1rem'}} name={'condiciones'} type={"checkbox"} required/><span className={"fs-16"}>Acepto condiciones y <a target={"_blank"} href={"/politica-de-privacidad"}>aviso legal</a></span>
                                        </div>
                                        <button>Enviar</button>
                                    </Col>
                                </Row>



                            </form>

                        </div>





            </MaxWidthContainer>


            <Footer/>
        </div>

    );

};


export default PageContacta;



