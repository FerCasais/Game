import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import Button from "../shared/buttons";

let sumDice = 0;
let sumDiceApp = 0;

const ViewGame = ({ navigation }) => {
  const [numberRandom, setNumberRandom] = useState(0);
  const [numberRandomApp, setNumberRandomApp] = useState(0);

  
  const playAgain = () => {
    setNumberRandom(0);
    setNumberRandomApp(0);
    sumDice = 0;
    sumDiceApp = 0;
  };

  const onPressDiceHandler = () => {
    function generateNumberRandom(min, max) {
      min = Math.ceil(1);
      max = Math.floor(6);
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
    setNumberRandom(generateNumberRandom);

    sumDice = numberRandom + sumDice;

    if (sumDice >= 120) {
      setNumberRandom("Mbappe Wins");
      setNumberRandomApp("Lio Looses");
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
    if (sumDiceApp >= 120) {
      setNumberRandomApp("Messi Wins");

      setNumberRandom("Mbappé Looses");
    }

  };const goToGameOver = () => {
    if (sumDiceApp >= 120 || sumDice >= 120) {
      navigation.navigate("GameOver");
    }
       
  };


  const onPress = () => {
    if (sumDiceApp < 120 && sumDice < 120) {
      onPressDiceHandler();
      onPressDiceHandlerApp();
    } 

  };

  goToGameOver()

  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Alcanzá la Copa..</Text>
        <View style={styles.imagePlayers}>
          <Button title="Go !" onPress={onPress} />
         
        </View>

        <View style={styles.imagePlayers}>
          <View style={styles.container}>
            <Card>
              <Text style={styles.playersData}>Mbappé</Text>
              <Text style={styles.playersData}>{sumDice}</Text>
              <Image
                style={{ width: 150, height: 1 + sumDice * 1.2 }}
                source={{
                  uri: "https://fotografias.antena3.com/clipping/cmsimages02/2022/12/05/614A45B8-99B8-42E4-A600-AAC3F8F9EB35/mbappe-partido-polonia_98.jpg?crop=3000,1688,x0,y0&width=1900&height=1069&optimize=low&format=webply",
                }}
              />
              <Text style={globalStyles.dice}>{numberRandom}</Text>
            </Card>
          </View>

          <View style={styles.container}>
            <Card>
              <View>
                <Text style={styles.playersData}>Messi</Text>
                <Text style={styles.playersData}>{sumDiceApp}</Text>
              </View>
              <Image
                style={{ width: 150, height: 1 + sumDiceApp * 1.2 }}
                source={{
                  uri: "https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/99/7c/997c549db111e41eb57e2dec133bac22425de0f2.jpg",
                }}
              />
              <Text style={globalStyles.dice}>{numberRandomApp}</Text>
            </Card>
          </View>
        </View>
      </View>

      <View style={styles.worldCup}>
        <Card>
          <Image
            style={{ width: 130, height: 160 }}
            source={{
              uri: "https://www.entrelineas.info/media/cache/pub_news_details_large/media/i/7588440a6ad4c2ecdc56dc612cdde7e7f6d4c9bb.jpg",
            }}
          />
        </Card>
      </View>
      <View style={styles.buttons}>
        <Button title={"Play again"} onPress={playAgain}></Button>
      </View>
    </>
  );
};

export default ViewGame;

const styles = StyleSheet.create({
  imagePlayers: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    paddingVertical: 5,
  
    
  },
  worldCup: {
    flex: 1,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   
    
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%",
    
  },
  playersData: {
    textAlign: "center",
  },
});