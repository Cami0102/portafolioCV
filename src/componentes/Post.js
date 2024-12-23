import React from 'react';
import posts from '../data/posts';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import TarjetaCurriculum from './Tarjeta';
import Estudios from './Estudios';
import Complementarios from './Complementarios';

const Post = () => {
  const { id } = useParams();

  if (!posts[id - 1]) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <TituloExperiencia>{posts[id - 1].titulo}</TituloExperiencia>
      {id === '2' ? ( // Si el ID es 2, carga el componente Estudios
        <Estudios />
      ) : id === '3' ? (
        <Complementarios />
      ) : (
        <TarjetaCurriculum />
      )}
    </>
  );
};

const TituloExperiencia = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export default Post;
