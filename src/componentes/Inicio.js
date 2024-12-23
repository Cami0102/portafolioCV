import React from 'react';
import perfil from '../imagenes/perfil.jpg'
import styled from 'styled-components';

const Inicio = () => {
	return (
		<div>
			<ContenedorImagen>
				<img src={perfil} alt='imagenDePerfil' />
			</ContenedorImagen>
			<ContenedorParrafo>
				<p>Tecnólogo en Desarrollo de Software y profesional en Administrador de Empresas. Apasionado y comprometido en la búsqueda constante de la excelencia y el crecimiento en el ámbito laboral. Mi trayectoria refleja un profundo entendimiento de los principios fundamentales del campo tecnológico y una capacidad demostrada para aplicar estrategias innovadoras en entornos desafiantes. Mi pasión por la programación me ha llevado a adquirir habilidades técnicas que permiten una comprensión profunda de las soluciones tecnológicas y la automatización de procesos en el mundo empresarial. Esta capacidad para abordar los desafíos desde una perspectiva tecnológica me brinda una ventaja competitiva al proponer soluciones innovadoras y eficientes.</p>
			</ContenedorParrafo>
		</div>
	);
}

const ContenedorImagen = styled.div`
	display: flex;
	justify-content: center;
`;

const ContenedorParrafo = styled.p`
	text-align: justify;
`;

export default Inicio;