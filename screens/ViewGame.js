import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import { StatusBar } from "expo-status-bar";

let sumDice = 0;
let sumDiceApp = 0;

const ViewGame = () => {
  const [numberRandom, setNumberRandom] = useState(0);
  const [numberRandomApp, setNumberRandomApp] = useState(0);

 
  const onPressDiceHandler = () => {
    function generateNumberRandom(min, max) {
      min = Math.ceil(1);
      max = Math.floor(6);
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
    setNumberRandom(generateNumberRandom);

    sumDice = numberRandom + sumDice;
    console.log(sumDice);

    if (sumDice > 400) {
      console.log("ganaste");
    }
  };

  const onPressDiceHandlerApp = () => {
    function generateNumberRandom(min, max) {
      min = Math.ceil(1);
      max = Math.floor(6);
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
    setNumberRandomApp(generateNumberRandom);

    sumDiceApp = numberRandomApp + sumDiceApp;
   
  };

  const onPress = () => {
    onPressDiceHandler();
    onPressDiceHandlerApp();
  }



  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>ganale a Messi.. si podes..</Text>

        <Button title="roll the dice" onPress={onPress} />
        <Text style={globalStyles.dice}>{numberRandom}</Text>
        <Button title="soy la app" onPress={onPress} />
        <Text style={globalStyles.dice}>{numberRandomApp}</Text>

        <View style={styles.imagePlayers}>
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          <Text>Mbappé</Text>
          <Image
            style={{ width: 100, height: 0 + sumDiceApp }}
            source={{
              uri: "https://fotografias.antena3.com/clipping/cmsimages02/2022/12/05/614A45B8-99B8-42E4-A600-AAC3F8F9EB35/mbappe-partido-polonia_98.jpg?crop=3000,1688,x0,y0&width=1900&height=1069&optimize=low&format=webply",
            }}
          />
        </View>
        <Text>{sumDice}</Text>
       

        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Messi</Text>
          <Image
            style={{ width: 100, height: 0 + sumDice }}
            source={{
              uri: "https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/99/7c/997c549db111e41eb57e2dec133bac22425de0f2.jpg",
            }}
          />
        </View>
        
        </View>
        <Text>{sumDiceApp}</Text>
      </View>
      <View>
          <Text>Pelota de Futbol</Text>
          </View>
    </>
  );
};

export default ViewGame;

const styles = StyleSheet.create({

  imagePlayers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
  }
});
