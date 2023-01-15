import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function TopLogo() {
	return (
		<View style={styles.logoContainer}>
			<Image
				style={styles.hhsLogo}
				source={require("../assets/HaagseLogo.png")}
			/>
			<Image style={styles.hmcLogo} source={require("../assets/HMCLogo.png")} />
		</View>
	);
}

const styles = StyleSheet.create({
	logoContainer: {
		position: "absolute",
		top: 0,
		right: 0,
	},
	hhsLogo: {
		opacity: 1,
		position: "absolute",
		width: 125,
		height: 25,
		right: 0,
		top: 70,
	},
	hmcLogo: {
		opacity: 1,
		position: "absolute",
		width: 125,
		height: 35,
		right: 0,
		top: 30,
	},
});
