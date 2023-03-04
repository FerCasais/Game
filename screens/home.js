import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';


const image = {uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EFDNZZ7FEEPSQNE4ATMVMKGXBE.jpg'};




const Home = ({navigation}) => {
    const onHandlerButton = () => {

          navigation.navigate('ViewGame');

    };



  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Messi contra el Mundo</Text>
      <View style={styles.playButton}>
   <Button  title='Play !' onPress={onHandlerButton}/> 
   </View>
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
    },
    playButton: {
      backgroundColor: 'gray',
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,

    },

  });

