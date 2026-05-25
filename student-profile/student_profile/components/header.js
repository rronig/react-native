import {StyleSheet, Text, View} from 'react-native';

const Header = () =>{
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Students</Text>
		</View>
	);
};

const styles=StyleSheet.create({
	container:{
		backgroundColor: "rgb(46, 81, 255)",
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"
	},
	title:{
		fontSize:20,
		color:"rgb(107, 158, 241)",
		textAlign:"center"
	}
});

export default Header;