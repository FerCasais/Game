import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    
  },
  titleText: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Nunito-Bold",
    fontSize: 25,
    color: "black",
    shadowColor: "#000",
      shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.88,
    shadowRadius: 36.0,
    elevation: 54,
  },
  dice: {
    fontSize: 25,  
    textAlign: "center",
   }
});
