import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
	return (
		<Container>
			<Section
				model="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				model="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				model="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				model="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	height: 100vh;
`;
