import React from 'react';
import styled from 'styled-components';
import logoSena from '../imagenes/imagenesExperiencia/logoSena.gif'
import logoJardin from '../imagenes/imagenesExperiencia/logoJardin.png'

//se realizo la tarjeta, falta acomodar colores, texto e imagen de contenido dentro de la tarjeta. Adicional falta darle un estilo de movimiento y separa los componentes 
const TarjetaCurriculum = () => {
  return (
    <ContenedorTarjeta>
      <Card>
        <TituloDeCard>SERVICIO NACIONAL DE APRENDIZAJE SENA</TituloDeCard>
        <TextoDeCard>INSTRUCTOR EMPRENDIMIENTO</TextoDeCard>
        <TextoDeCard>Entidad pública de orden nacional, con personería jurídica, patrimonio propio e independiente;
          Adscrito al Ministerio del Trabajo de Colombia. Ofrece formación gratuita a millones de colombianos</TextoDeCard>
        <ImageLogo src={logoSena} alt="logoSena" />
      </Card>
      
      <Card>
      <TituloDeCard>CENTRO LUDICO INDANTIL JARDIN MELANIE KLEIN</TituloDeCard>
      <TextoDeCard>SYSADMIN</TextoDeCard>
        <TextoDeCard>Institución educativa de caracter privado, dedicada a la formación de estudiantes en nivel preescolar</TextoDeCard>
        <ImageLogo src={logoJardin} alt="logoJardin" />
      </Card>
    </ContenedorTarjeta>
  );
}

const ContenedorTarjeta = styled.div`
	padding: 15px;
	width: 90%;
	max-width: 700px;
  justify-content: center;
  display: flex;
  margin: 4%;
  flex-wrap: wrap;
`;

const Card = styled.div`
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

const TituloDeCard = styled.text`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const TextoDeCard = styled.p`
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

export default TarjetaCurriculum;