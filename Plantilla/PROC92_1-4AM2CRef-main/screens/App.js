import "react-native-gesture-handler";
import{createStackNavigator} from "@react-navigation/native";

import HomeScreen from "./screens/Home";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

export const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home " screenOptions={{
                headerShown: false
            }}>
          <Stack.Screen name = "Home" component={HomeScreen}/>
          <Stack.Screen name = "StarMap" component={StarMapScreen}/>
          <Stack.Screen name = "DailyPic" component={DailyPicScreen}/>
          <Stack.Screen name = "SpaceCraft" component={SpaceCraftScreen}/>

            </Stack.Navigator>

        </NavigationContainer>
    );
}

