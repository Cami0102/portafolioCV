import React from 'react';
import styled from 'styled-components';
import LogoJs from '../imagenes/logos/logo_js.png';
import LogoPy from '../imagenes/logos/logo_py.png';
import LogoFb from '../imagenes/logos/logo_firebase.png';
import LogoReact from '../imagenes/logos/logo_react.png';

const Conocimientos = () => {
    return (
        <ContenedorConocimientos>

            <Conocimiento>
            <TituloDeConocimientos>JAVASCRIPT</TituloDeConocimientos>
                <TextoDeConocimientos>Lenguaje de Programación: JavaScript, manejo de funciones asíncronas (promesas, async/await) y programación funcional. Experiencia con bibliotecas y frameworks como React.js</TextoDeConocimientos>
                <ImageLogo src={LogoJs} alt="LogoJs" />
            </Conocimiento>

            <Conocimiento>
            <TituloDeConocimientos>PYTHON</TituloDeConocimientos>
                <TextoDeConocimientos>Lenguaje de Programación: Python (3.x), experiencia en programación orientada a objetos, manejo de estructuras de datos, y creación de scripts automatizados. Familiaridad con bibliotecas como Pandas, NumPy.</TextoDeConocimientos>
                <ImageLogo src={LogoPy} alt="LogoPy" />
            </Conocimiento>
            
            <Conocimiento>
            <TituloDeConocimientos>REACT JS</TituloDeConocimientos>
                <TextoDeConocimientos>Desarrollo Frontend: Experiencia en React.js, Hooks, React Router y componentes reutilizables.</TextoDeConocimientos>
                <ImageLogo src={LogoReact} alt="LogoReact" />
            </Conocimiento>

            <Conocimiento>
            <TituloDeConocimientos>FIREBASE</TituloDeConocimientos>
                <TextoDeConocimientos>Backend as a Service (BaaS): Experiencia con Firebase para autenticación, Firestore, Realtime Database, almacenamiento de archivos, y Cloud Functions. Conexión de aplicaciones web y móviles con Firebase, implementación de backend serverless y despliegues con Firebase Hosting.</TextoDeConocimientos>
                <ImageLogo src={LogoFb} alt="LogoFb" />
            </Conocimiento>

        </ContenedorConocimientos>
    )
}

const ContenedorConocimientos = styled.div`
	padding: 15px;
	width: 90%;
	max-width: 700px;
  justify-content: center;
  display: flex;
  margin: 4%;
  flex-wrap: wrap;
`;

const Conocimiento = styled.div`
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

const TituloDeConocimientos = styled.text`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const TextoDeConocimientos = styled.p`
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

export default Conocimientos
