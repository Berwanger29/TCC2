import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { FirstLogin } from "../screens/FirstLogin";
import { LoginOptions } from "../screens/LoginOptions";
import { CreateAccountWithEmail } from "../screens/CreateAccountWithEmail";
import { Home } from "../screens/Home";
import theme from "../globals/styles/theme";

const Stack = createNativeStackNavigator()

export function NavScreens() {
    return (
        <Stack.Navigator
            initialRouteName="FirstLogin"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: {
                    backgroundColor: theme.colors.blue
                }
            }}
        >
            <Stack.Screen
                name="FirstLogin"
                component={FirstLogin}
            />

            <Stack.Screen
                name="LoginOptions"
                component={LoginOptions}
                // options={{
                //     gestureEnabled: false //prevents going back
                // }}
            />

            <Stack.Screen
                name="CreateAccountWithEmail"
                component={CreateAccountWithEmail}
            />

            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}