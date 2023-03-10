import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Button from "../shared/buttons";

const image = {
  uri: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EFDNZZ7FEEPSQNE4ATMVMKGXBE.jpg",
};

const Home = ({ navigation }) => {
  const onHandlerButton = () => {
    navigation.navigate("ViewGame");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Messi vs Mbappé</Text>
      <View style={styles.playButton}>
        <Button title="Play !" onPress={onHandlerButton} />
      </View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  playButton: {
    backgroundColor: "#cccc",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
