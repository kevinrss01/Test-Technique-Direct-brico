import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Pepperoni from '../views/pepperoni';
import Fromage from '../views/fromages';
import Reine from '../views/reine';
import App from '../App';

const screens = {
	Home: {
		screen: App,
	},
	Pepperoni: {
		screen: Pepperoni,
	},
	Reine: {
		screen: Reine,
	},
	Fromage: {
		screen: Fromage,
	},
};

const HomeStack = createStackNavigator();

export default createAppContainer(HomeStack);
