import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
	return (
		<View>
			<View style={styles.container1}>
				<Text style={styles.h1}>Bienvenue sur DirectPizza ! </Text>
			</View>
			<View style={styles.container2}>
				<Text style={styles.text}>Choisissez votre pizza </Text>
			</View>

			<ImageBackground
				source={require('../assets/images/Pepperoni_1.jpeg')}
				style={styles.container3}
			>
				<TouchableOpacity
					style={styles.pizzaName}
					onPress={() => navigation.jumpTo('Pizza Pepperoni')}
				>
					<Text style={styles.appButtonText}>Pizza Pepperoni</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.appButtonContainer}
					onPress={() => navigation.jumpTo('Pizza Pepperoni')}
				>
					<Text style={styles.appButtonText}>Voir plus</Text>
				</TouchableOpacity>
			</ImageBackground>
			<ImageBackground
				source={require('../assets/images/REINE.jpeg')}
				style={styles.container3}
			>
				<TouchableOpacity
					style={styles.pizzaName}
					onPress={() => navigation.jumpTo('Pizza Reine')}
				>
					<Text style={styles.appButtonText}>Pizza Reine</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.appButtonContainer}
					onPress={() => navigation.jumpTo('Pizza Reine')}
				>
					<Text style={styles.appButtonText}>Voir plus</Text>
				</TouchableOpacity>
			</ImageBackground>
			<ImageBackground
				source={require('../assets/images/pizza-4-fromages.jpeg')}
				style={styles.container3}
			>
				<TouchableOpacity
					style={styles.pizzaName}
					onPress={() => navigation.jumpTo('Pizza Fromages')}
				>
					<Text style={styles.appButtonText}>Pizza Fromages</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.appButtonContainer}
					onPress={() => navigation.jumpTo('Pizza Fromages')}
				>
					<Text style={styles.appButtonText}>Voir plus</Text>
				</TouchableOpacity>
			</ImageBackground>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container1: {
		display: 'flex',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		backgroundColor: colors.primary,
		height: 80,
	},
	appButtonContainer: {
		backgroundColor: colors.secondary,
		borderRadius: 10,
		paddingVertical: 10,
		width: 120,
		position: 'absolute',
		bottom: 5,
		right: 5,
	},
	appButtonText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
	container2: {
		display: 'flex',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		backgroundColor: colors.secondary,
		height: 30,
		marginTop: 20,
	},
	container3: {
		display: 'flex',
		position: 'relative',
		backgroundColor: '#fff',
		alignSelf: 'stretch',

		height: 150,
		marginTop: 20,
	},

	sectionTitle: {
		fontSize: 24,
		color: colors.secondary,
		fontFamily: 'Arial',
	},
	h1: {
		fontSize: 25,
		fontFamily: 'Arial',
	},
	text: {
		fontSize: 15,
		fontFamily: 'Arial',
	},
	pizzaName: {
		backgroundColor: colors.secondary,
		borderRadius: 10,
		paddingVertical: 8,
		width: 170,
		position: 'absolute',
		top: 5,
		left: 5,
	},
});
