import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
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
				<Text style={styles.textImage}>Pizza Pepperoni </Text>
			</ImageBackground>

			<ImageBackground
				source={require('../assets/images/REINE.jpeg')}
				style={styles.container3}
			>
				<Text style={styles.textImage}>Pizza reine </Text>
			</ImageBackground>
			<ImageBackground
				source={require('../assets/images/pizza-4-fromages.jpeg')}
				style={styles.container3}
			>
				<Text style={styles.textImage}>Pizza Fromage </Text>
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
		marginTop: 50,
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
		fontFamily: 'Montserrat-Medium',
	},
	h1: {
		fontSize: 25,
		fontFamily: 'Montserrat-Medium',
	},
	text: {
		fontSize: 15,
		fontFamily: 'Montserrat-Medium',
	},
	textImage: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 8,
		color: colors.white,
		fontFamily: 'Montserrat-Medium',
		backgroundColor: colors.secondary,
		alignSelf: 'stretch',
		paddingLeft: 10,
	},
});
