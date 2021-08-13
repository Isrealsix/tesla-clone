import React from 'react';
import styled from 'styled-components';

const Section = ({
	description,
	model,
	backgroundImg,
	leftBtnText,
	rightBtnText,
}) => {
	return (
		<Wrap bgImage={backgroundImg}>
			<ItemText>
				<h1>{model}</h1>
				<p>{description}</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>{leftBtnText}</LeftButton>

					{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
				</ButtonGroup>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
};

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	bacground-repeat: no-repeat;
	background-image: ${props => `url('images/${props.bgImage}.jpg')`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: upprcase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

// Inherit the styles of LeftButton
const RightButton = styled(LeftButton)`
	background-color: #fff;
	opacity: 0.65;
	color: #000;
`;

const DownArrow = styled.img`
	margin-top: 20px;
	height: 40px;
	animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
