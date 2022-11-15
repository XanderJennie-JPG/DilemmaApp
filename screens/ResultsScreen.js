import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container';

const ResultScreen = ({navigation}) => {
    const [selected, setSelected] = React.useState("");
  
    const data = [
    {key:'Poli urologie', value:'Poli urologie'}, // disabled: true to disable
    {key:'Poli chirurgie', value:'Poli chirurgie'},
    {key:'Poli gynaecologie', value:'Poli gynaecologie'},
    {key:'Poli cardiologie', value:'Poli cardiologie'},
    ]
    return (
        <Container>
            <View style={styles.logoContainer}>
                <Image style={styles.hhsLogo} source={require("../assets/HaagseLogo.png")}/>
                <Image style={styles.hmcLogo} source={require("../assets/HMCLogo.png")}/>
            </View>
            <View style={styles.box}>
              <View>
                  <Text style={[styles.header1, {top: 25}]}>Resultaten</Text>
              </View>
              <View style={[{alignItems: 'center'}]}>
                  <Text style={[styles.text, {top:30}]}>Hier kunt u uw eigen score en de algemene score van uw afdeling bekijken</Text>
              </View>
            </View>
            <TouchableOpacity
                style={[styles.GaDoorButton, styles.shadow, {alignSelf: "flex-end"}]}>
                    <Text style={styles.buttonText}>Toelichting</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default ResultScreen;

const styles = StyleSheet.create({
    box: {
      opacity: 1,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: 'rgb(203,  221,  230)',
      shadowOpacity: 0.8392156862745098,
      shadowOffset: {
      width: 5,
      height: 5,
      },
      shadowRadius: 10,
      width: 370,
      height: 525,
      alignSelf: "center",
      top: 125
    },
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
        height: 5,
        },
        shadowRadius: 10,
        width: 160,
        height: 40,
        top: 135,
    },
    DropDown: {
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
        height: 5,
        },
        shadowRadius: 10,
        width: 286,
        height: 59,
        left: 50,
        top: 400
    },
    DropDownText: {
        fontSize: 25,
        textAlign: 'center',
    },
    DropDownList: {
        top: 410,
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
        height: 5,
        },
        shadowRadius: 10,
    },
    DropDownListText: {

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
        height: 55,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        opacity: 0.36000001430511475,
        backgroundColor: 'EEF6FA',
        fontSize: 18,
        lineHeight: 27,
        borderRadius:20,
        top: 350,
        opacity: 1,
        backgroundColor: 'rgba(238, 246, 250, 1)',
        shadowColor: 'rgb(203,  221,  230)',
        shadowOffset: {
        width: 5,
        height: 5,
        },
        shadowRadius: 10,
        width: 285,
        alignSelf: 'center'
    },
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },
    elevation: {
        elevation: 10, //original was 20
        shadowColor: '#52006A',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
      },
    buttonText: {
        marginTop: 6,
        marginLeft: 6,
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        color: '#134392'
    },
})