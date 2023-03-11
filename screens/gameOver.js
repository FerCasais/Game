import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { Video } from "expo-av";
import Button from "../shared/buttons";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwEBcdXEIy7mn_8J9wwIgzoyLNEQgv53BFDeSHV9klx609yiJ4AoJ_zZ5Z4aOogBd_N0&usqp=CAU",
};

const GameOver = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Game Over</Text>

        <View style={styles.gameOver}>
          <Image source={image} resizeMode="cover" style={styles.image} />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Volver al juego"
          onPress={() => {
            navigation.navigate("ViewGame");
          }}
        />
      </View>

      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://img-9gag-fun.9cache.com/photo/a8qoK8e_460svvp9.webm",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
      </View>
    </>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    maxWidth: "800%",
    maxHeight: "100%",
  },
  gameOver: {
    flex: 1,
  },
  video: {
    alignSelf: "center",
    width: "96%",
    height: "75%",
  },
});
