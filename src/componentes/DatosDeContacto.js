import React from 'react';
import styled from 'styled-components';

const DatosDeContacto = () => {
  return (
    <ContenedorPagina>
      <ContenedorTitulo>
        <TituloDeDato>Datos de Contacto</TituloDeDato>
      </ContenedorTitulo>
      <ContenedorContacto>
        <TextoDeDatos>Correo Electrónico: camiloc517@gmail.com</TextoDeDatos>
        <TextoDeDatos>Número de Contacto: (+57) 301-478-4239</TextoDeDatos>
        <TextoDeDatos>GitHub: https://github.com/Cami0102</TextoDeDatos>
      </ContenedorContacto>
    </ContenedorPagina>
  );
}

const ContenedorPagina = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto; /* Para que ocupe la altura a medida que se agreguen contenidos */
  padding: 10px;
`;

const ContenedorTitulo = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px; /* Espaciado entre el título y el cuadro */
`;

const TituloDeDato = styled.h2`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

const ContenedorContacto = styled.div`
  width: 90%;
  max-width: 700px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextoDeDatos = styled.p` /* Cambiado de 'text' a 'p' para HTML válido */
  text-align: center;
  font-size: 1rem;
  color: #333;
`;

export default DatosDeContacto;
