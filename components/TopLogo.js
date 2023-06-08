import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function TopLogo() {
	return (
		<View style={styles.logoContainer}>
			<Image style={styles.hmcLogo} source={require("../assets/HMCLogo.png")} />
			<Image
				style={styles.hhsLogo}
				source={require("../assets/HaagseLogo.png")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	logoContainer: {
		alignItems: "flex-end",
	},
	hhsLogo: {
		position: "absolute",
		marginTop: 35,
		width: 125,
		height: 25,
		right: -20,
	},
	hmcLogo: {
		position: "absolute",
		width: 125,
		height: 35,
		right: -20,
	},
});
