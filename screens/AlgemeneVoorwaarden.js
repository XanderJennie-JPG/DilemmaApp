import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Container from "../components/Container";
import { Divider } from '@rneui/themed';


const AlgemeneVoorwaarden = ({ navigation }) => {
	return (
		<Container>
            <View>
                <TouchableOpacity>
                <Image style={[{top: 40}]} source={require("../assets/Back-arrow.png")}/>
                </TouchableOpacity>
            </View>
			<View style={styles.logoContainer}>
                <Image style={styles.hhsLogo} source={require("../assets/HaagseLogo.png")}/>
                <Image style={styles.hmcLogo} source={require("../assets/HMCLogo.png")}/>
            </View>
            <View>
                <Text style={[styles.header1, {top: 70}]}>Algemene voorwaarden Dilemma app</Text>
            </View>
            <SafeAreaView style={[{alignItems: 'center', flex: 1, top: 100}]}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    
                    </Text>
                </ScrollView>
            </SafeAreaView>
		</Container>
	);
};

export default AlgemeneVoorwaarden;

const styles = StyleSheet.create({
    logoContainer:{
        position: 'absolute',   
        top: 5,
        right: 1,
    },
    hhsLogo: {
        opacity: 1,
        position: 'absolute',
        width: 175,
        height: 50,
        right: 6,
        top: 105
    },
    hmcLogo: {
        opacity: 1,
        position: 'absolute',
        width: 175,
        height: 50,
        right: 6,
        top: 50
    },
    header1: {
        fontSize: 25,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Montserrat',
        color: 'rgba(19, 67, 146, 1)',
        textAlign: 'center',
    },
    header2: {
        fontSize: 25,
        fontStyle: 'normal',
        fontFamily: 'Montserrat',
        color: 'rgba(19, 67, 146, 1)',
        textAlign: 'center',
    },
    text: {
        opacity: 1,
        color: 'rgba(19, 67, 146, 1)',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 27,
    },
    scrollView: {
        maxHeight: 450
    },
});
