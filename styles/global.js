import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    backgroundColor: '#e2e6ff',
    
    
  },
  titleText: {
    textAlign: "center",
    marginBottom: '2%',
    fontFamily: "RampartOne-Regular",
    fontSize: 27,
    color: "#0c343d",
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
