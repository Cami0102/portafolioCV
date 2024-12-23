import React from 'react';
//import posts from '../data/posts';
//import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Tarjeta from './Tarjeta';
import Estudios from './Estudios';
import Complementarios from './Complementarios';

const Curriculum = () => {
  return (
    <div>
      <TituloExperiencia>Experencia Laboral</TituloExperiencia>
      <Tarjeta></Tarjeta>
      <TituloEstudios>Estudios Académicos</TituloEstudios>
      <Estudios></Estudios>
      <TituloComplementarios>Estudios Complementarios</TituloComplementarios>
      <Complementarios></Complementarios>

    </div>
    // <div>
    //   <TituloVinculo>Vinculos</TituloVinculo>
    //   <ul>
    //     {posts.map((post) => {
    //       return <li key={post.id}>
    //         <NavLink to={`/post/${post.id}`}>
    //           {post.titulo}
    //         </NavLink>
    //       </li>
    //     })}
    //   </ul>
    // </div>
  );
}

// const TituloVinculo = styled.h2`
// 	display: flex;
//   align-items: center;
//   justify-content: center;
//   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
// `;

const TituloExperiencia = styled.h2`
	display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

const TituloEstudios = styled.h2`
	display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

const TituloComplementarios = styled.h2`
	display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
 
export default Curriculum;