import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { FirstLogin } from "../screens/FirstLogin";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator()

export function NavScreens() {
    return (
        <Stack.Navigator
            initialRouteName="FirstLogin"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="FirstLogin"
                component={FirstLogin}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}