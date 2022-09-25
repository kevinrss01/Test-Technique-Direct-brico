import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pepperoni from './views/pepperoni';
import Reine from './views/reine';
import Fromages from './views/fromages';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Accueil" component={Home} />
				<Drawer.Screen name="Pizza Pepperoni" component={Pepperoni} />
				<Drawer.Screen name="Pizza Reine" component={Reine} />
				<Drawer.Screen name="Pizza Fromages" component={Fromages} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
