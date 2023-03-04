import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>this es the about screen</Text>
    </View>
  )
}

export default About

