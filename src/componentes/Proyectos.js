import React from 'react';
import styled from 'styled-components';

const Proyectos = () => {
    return (
        <ContenedorProyectos>
            <Proyecto>
                <TituloProyectos>LISTA DE TAREAS</TituloProyectos>
                <TextoProyectos>Este aplicativo realizado en React js, está diseñado para agregar, editar y borrar tareas que el usuario requiera hacer.</TextoProyectos>
                <Enlace href="https://zingy-cassata-049710.netlify.app/" target="_blank" rel="noopener noreferrer">VER EN NETLIFY</Enlace>
            </Proyecto>

            <Proyecto>
                <TituloProyectos>PÁGINA WEB</TituloProyectos>
                <TextoProyectos>Página web estática realizada para un jardín infantil, según requerimientos del cliente.</TextoProyectos>
                <Enlace href="https://www.jardinmelanieklein.com.co/" target="_blank" rel="noopener noreferrer">JARDÍN MELANIE KLEIN</Enlace>
            </Proyecto>

        </ContenedorProyectos>
    )
}

const ContenedorProyectos = styled.div`
	padding: 15px;
	width: 90%;
	max-width: 700px;
  justify-content: center;
  display: flex;
  margin: 4%;
  flex-wrap: wrap;
`;

const Proyecto = styled.div`
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

const TituloProyectos = styled.text`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const TextoProyectos = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  padding: 15px;
`;

const Enlace = styled.a`
    font-size: 1rem;
    color: #1e90ff;
    text-decoration: none;
    margin-top: 10px;
    width: 90%;
    max-width: 700px;
    background: #f5f5f5;
    padding: 15px;
    border-radius: 50px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center; /* Centra el texto horizontalmente */
    display: flex; /* Cambia el contexto de alineación */
    justify-content: center; /* Centra el texto horizontalmente */
    align-items: center; /* Centra el texto verticalmente */
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export default Proyectos