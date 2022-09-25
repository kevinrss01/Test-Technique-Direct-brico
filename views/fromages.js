import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';

export default function Pepperoni(navigation) {
	return (
		<View>
			<Image
				source={require('../assets/images/pizza-4-fromages.jpeg')}
				style={styles.image}
			></Image>
			<View style={styles.desription}>
				<Text style={{ fontSize: 25 }}>Pizza Fromages</Text>
				<Text style={{ fontSize: 15 }}>14,99 €</Text>
				<Text style={{ fontSize: 20, marginTop: 20 }}>
					Sauce tomate, mozzarella, chèvre, gorgonzola, gruyère, origans.
				</Text>
			</View>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.h3}>Taille</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text>Taille medium</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.h3}>Pâte</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text>Pâte fine</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.h3}>Sauce</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text>Base crème fraiche</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.h3}>Infos nutritionnelles</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				></View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.h3}>Mentions légales</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				></View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.commander}>
				<Text style={styles.commanderText}>COMMANDER</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		resizeMode: 'cover',
		alignSelf: 'stretch',
		height: 150,
		width: '100%',
	},
	desription: {
		padding: 10,
		top: -40,
		marginHorizontal: 10,
		alignSelf: 'stretch',
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 0.8,
		elevation: 6,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 13 },
		height: 160,
		backgroundColor: colors.white,
		borderRadius: 9,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.white,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 0.8,
		elevation: 6,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 13 },
		marginHorizontal: 10,
		borderRadius: 9,
		height: 50,
		padding: 10,
		marginTop: 10,
	},
	h3: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	commander: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 0.8,
		elevation: 6,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 13 },
		marginHorizontal: 10,
		borderRadius: 9,
		height: 50,
		padding: 10,
		marginTop: 30,
	},
	commanderText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: colors.price,
	},
});
