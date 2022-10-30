import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'

const ResultsScreen = ({navigation}) => {
  return (
    <Container>
    <View style = {styles.container}>
      <Text>Resultaten</Text>
    </View>
    </Container>
  )
}

export default ResultsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

    },
  });
  