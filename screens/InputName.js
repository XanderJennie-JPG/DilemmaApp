import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Container from '../components/Container';

const showToast = () => {
    ToastAndroid.show("Pressed", ToastAndroid.SHORT);
}

const InputName = ({navigation}) => {
    return (
        <Container>
            <View style={styles.logoContainer}>
                <Image style={styles.hhsLogo} source={require("../assets/HaagseLogo.png")}/>
                <Image style={styles.hmcLogo} source={require("../assets/HMCLogo.png")}/>
            </View>
            <View>
                <Text style={styles.header1}>Dilemma app</Text>
            </View>
            <View style={styles.InputContainer}>
                <Text style={styles.text}>Vul een naam in{"\n"}die u wilt gebruiken voor de app</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Vul hier een naam in...">
                </TextInput>
            </View>
            <Pressable 
                style={styles.GaDoorButton}
                onPress={showToast}>
            </Pressable>
        </Container>
    );
}

export default InputName;

const styles = StyleSheet.create({
    GaDoorButton: {
        opacity: 1,
        backgroundColor: 'rgba(238, 246, 250, 1)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: 'rgb(203,  221,  230)',
        shadowOpacity: 0.8392156862745098,
        shadowOffset: {
        width: 5,
        height: 5
        },
        shadowRadius: 10,
        width: 286,
        height: 47,
        left: 50,
        top: 500,
    },
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
        top: 150
    },
    text: {
        opacity: 1,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: 'rgba(19, 67, 146, 1)',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 27,
        width: 276,
        height: 60,
        top: 281.5
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        opacity: 0.36000001430511475,
        backgroundColor: 'EEF6FA',
        fontSize: 18,
        lineHeight: 27,
        borderRadius:20,
        top: 350
    },
    InputContainer: {
        alignItems: 'center'
    }
})