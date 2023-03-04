import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';

const image = {uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EFDNZZ7FEEPSQNE4ATMVMKGXBE.jpg'};


const Home = ({navigation}) => {

    const onHandlerButton = (  ) => {

       navigation.navigate('ViewGame')

    };



  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Messi contra el mundo</Text>
   <Button  title='Touch me for going to the game screen' onPress={onHandlerButton}/> 
   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
   </View>
    
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
    }
  });

