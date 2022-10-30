import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../components/Container";

const HomeScreen = ({ navigation }) => (
	<Container>
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	</Container>
);

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
