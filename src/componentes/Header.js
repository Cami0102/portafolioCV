import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>CAMILO CERÓN RAMÍREZ</Titulo>
      <Menu>
        <NavLink to="/">PRESENTACIÓN</NavLink>
        <NavLink to="/curriculum">CURRICULUM</NavLink>
		<NavLink to="/conocimientos">CONOCIMIENTOS</NavLink>
		<NavLink to="/proyectos">PROYECTOS</NavLink>
        <NavLink to="/datos-de">DATOS DE CONTACTO</NavLink>
      </Menu>
    </ContenedorHeader>
  );
}

const ContenedorHeader = styled.header`
	text-align: center;
	margin-bottom: 40px;
`;

const Titulo = styled.h1`
	margin-bottom: 10px;
	font-size: 26px;
	text-transform: uppercase;
	color: white;
`;

const Menu = styled.nav`

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	a {
		text-decoration: none;
		color: white;
		margin: 0 10px;
	}

	a:hover {
		color: gray;
	}

	a.active {
		border-bottom: 2px solid #165168;
		padding-bottom: 3px;
	}
`;

export default Header;