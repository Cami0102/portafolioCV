import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Curriculum from './componentes/Curriculum';
import Post from './componentes/Post';
import DatosDeContacto from './componentes/DatosDeContacto';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Error404 from './componentes/Error404';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/cv.png'


const App = () => {
  return (
    <>
      <Helmet>
        <title>CV CAMI CERON</title>
        <link rel="icon" href={favicon} />
      </Helmet>

    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />

        <Main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/conocimientos" element={<Conocimientos/>}/>
            <Route path="/proyectos" element={<Proyectos/>}/>
            <Route path="/post/:id" element={<Post />} />
            <Route path="/datos-de" element={<DatosDeContacto />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
    </>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;