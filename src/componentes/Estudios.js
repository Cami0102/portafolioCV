import React from 'react';
import styled from 'styled-components';
import logoUnad from '../imagenes/imagenesEstudios/logo_unad.png';
import logoAutonoma from '../imagenes/imagenesEstudios/logo_autonoma.png';


const TarjetaEstudios = () => {
  return (
    <ContenedorEstudios>
      <Card1>
        <TituloDeEstudios>UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA</TituloDeEstudios>
        <TextoDeEstudios>TECNÓLOGO EN DESARROLLO DE SOFTWARE</TextoDeEstudios>
        <TextoDeEstudios>La Escuela de Ciencias Básicas, Tecnología e Ingeniería, tiene como misión contribuir a la educación para todos con programas en Ciencia, Tecnología e Ingeniería en la modalidad de educación a distancia, mediante la investigación, la proyección social, estrategias educativas y organizacionales innovadoras, con la utilización de las tecnologías de la información y las comunicaciones, para formar profesionales íntegros y de calidad, capaces de responder a las necesidades del entorno local, regional y global.</TextoDeEstudios>
        <ImageLogo src={logoUnad} alt="logoUnad" />
      </Card1>
      
      <Card1>
      <TituloDeEstudios>UNIAUTONOMA DEL CAUCA</TituloDeEstudios>
      <TextoDeEstudios>ADMINISTRADOR DE EMPRESAS</TextoDeEstudios>
        <TextoDeEstudios>La dirección empresarial es un pilar fundamental en el éxito de cualquier organización en el mundo contemporáneo. A través de la innovación, la optimización de los recursos y la maximización de las inversiones corporativas.</TextoDeEstudios>
        <ImageLogo src={logoAutonoma} alt="logoAutonoma" />
      </Card1>
    </ContenedorEstudios>
  );
}

const ContenedorEstudios = styled.div`
	padding: 15px;
	width: 90%;
	max-width: 700px;
  justify-content: center;
  display: flex;
  margin: 4%;
  flex-wrap: wrap;
`;

const Card1 = styled.div`
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

const TituloDeEstudios = styled.text`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const TextoDeEstudios = styled.p`
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

export default TarjetaEstudios;