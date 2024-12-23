import React from 'react';
import styled from 'styled-components';
import CertiProgram from '../imagenes/imagenes_certificados/certificado_programacion.jpg';
import CertiJava from '../imagenes/imagenes_certificados/certificado_java.jpg';
import CertiPy from '../imagenes/imagenes_certificados/certificado_python.jpg';
import CertiReact from '../imagenes/imagenes_certificados/certificado_react.jpg';



const Complementarios = () => {
    return (
        <ContenedorComplementarios>
            <CardCertificados>
                <TituloDeComplementarios>DIPLOMADO EN DESARROLLO DE SOFTWARE</TituloDeComplementarios>
                <TextoDeComplementarios>Universidad de Antioquia</TextoDeComplementarios>
                <TextoDeComplementarios>Cumplió con las actividades programadas con una intensidad de 200 horas.</TextoDeComplementarios>
                <ImageLogo src={CertiProgram} alt="CertiProgram" />
            </CardCertificados>

            <CardCertificados>
                <TituloDeComplementarios>DIPLOMADO EN FUNDAMENTOS DE PROGRAMACIÓN PYTHON</TituloDeComplementarios>
                <TextoDeComplementarios>Universidad de Antioquia</TextoDeComplementarios>
                <TextoDeComplementarios>Cumplió con las actividades programadas con una intensidad de 200 horas.</TextoDeComplementarios>
                <ImageLogo src={CertiPy} alt="CertiPy" />
            </CardCertificados>

            <CardCertificados>
                <TituloDeComplementarios>DIPLOMADO EN PROGRAMACIÓN BÁSICA JAVA</TituloDeComplementarios>
                <TextoDeComplementarios>Universidad de Antioquia</TextoDeComplementarios>
                <TextoDeComplementarios>Cumplió con las actividades programadas con una intensidad de 200 horas.</TextoDeComplementarios>
                <ImageLogo src={CertiJava} alt="CertiJava" />
            </CardCertificados>

            <CardCertificados>
                <TituloDeComplementarios>REACT Y FIREBASE</TituloDeComplementarios>
                <TextoDeComplementarios>Udemy</TextoDeComplementarios>
                <TextoDeComplementarios>Certificado de finalización del curso completo, práctivo y desde cero.</TextoDeComplementarios>
                <ImageLogo src={CertiReact} alt="CertiReact" />
            </CardCertificados>
        </ContenedorComplementarios>
  );
}

const ContenedorComplementarios = styled.div`
	padding: 15px;
	width: 90%;
	max-width: 700px;
  justify-content: center;
  display: flex;
  margin: 4%;
  flex-wrap: wrap;
`;

const CardCertificados = styled.div`
  width: 30cm;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 6px 7px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #343d45;
  margin-top: 2px;
  margin: 5px;
`;

const TituloDeComplementarios = styled.text`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const TextoDeComplementarios = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  padding: 15px;
`;

const ImageLogo = styled.img`
  max-width: 50%;
  max-height: 50%;
  padding: 1px;
`;

export default Complementarios;