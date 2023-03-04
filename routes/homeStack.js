import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ViewGame from "../screens/ViewGame";

const screens = {

    Home: {
        screen: Home
    },
    ViewGame: {
        screen: ViewGame
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);