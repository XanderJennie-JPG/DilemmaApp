import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalStyle from "../components/GlobalStyle";

const UitlegScreen = ({ navigation: { goBack, navigate } }) => {
	return (
		<Container>
			<View style={{ zIndex: 1 }}>
				<TouchableOpacity onPress={() => goBack()}>
					<Image source={require("../assets/Back-arrow.png")} />
				</TouchableOpacity>
			</View>
			<TopLogo />

			<ImageBackground
				resizeMode="cover"
				style={[
					styles.backgroundTop,
					{
						transform: [{ rotate: "-15deg" }],
						height: 250,
						width: 450,
						top: -20,
						left: -50,
					},
				]}
				source={require("../assets/background-top.png")}
			></ImageBackground>

			<View
				style={[
					{ alignContent: "center", alignItems: "center", paddingTop: 60 },
					styles.TextBetween,
				]}
			>
				<Text
					style={[
						GlobalStyle.CustomFontBold,
						styles.Header,
						{ paddingBottom: 5 },
					]}
				>
          Dilemma's
				</Text>
				<Text style={{ fontSize: 30 }}>Uitleg van het spel</Text>
			</View>
			<Text style={[GlobalStyle.CustomFont, styles.TextBetween]}>
        Welkom bij het Dilemma spel!
			</Text>
			<Text style={[GlobalStyle.CustomFont, styles.TextBetween]}>
        Hier komt tekst te staan waarin het spel wordt uitgelegd.
			</Text>
			<Text style={[GlobalStyle.CustomFont, styles.TextBetween]}>
        Is deze tekst goed te lezen?
			</Text>
			<ImageBackground
				resizeMode="cover"
				style={[
					{
						transform: [{ rotate: "15deg" }],
						height: 300,
						width: 450,
						left: -75,
						top: 75,
					},
				]}
				source={require("../assets/background-top.png")}
			></ImageBackground>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					marginTop: "auto",
					//TODO: Remove when Navbar not ABSOLUTE
					marginBottom: 175,
				}}
			>
				<TouchableOpacity
					style={[styles.Button, styles.shadow, { marginTop: "auto" }]}
					onPress={() => navigate("QuizScreen")}
				>
					<Text style={[styles.ButtonText, GlobalStyle.CustomFontBold, ,]}>
            Door naar het spel
					</Text>
					<Ionicons
						size={30}
						name="arrow-forward-sharp"
						style={{ marginLeft: 30, paddingRight: 30 }}
					></Ionicons>
				</TouchableOpacity>
			</View>
		</Container>
	);
};

export default UitlegScreen;

const styles = StyleSheet.create({
	Header: {
		fontSize: 35,
		alignItems: "center",
		alignContent: "center",
	},
	rowone: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	backgroundTop: {
		position: "absolute",
		top: -10,
		left: 10,
		right: 0,
	},
	TextBetween: {
		marginBottom: 20,
	},

	ButtonText: {
		fontSize: 18,
		paddingLeft: 40,
	},
	Button: {
		backgroundColor: "#ffffff",
		borderRadius: 20,
		flexDirection: "row",
		width: 300,
		height: 75,
		justifyContent: "center",
		alignItems: "center",
	},
	shadow: {
		shadowColor: "#7F5DF0",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 4,
	},
});
