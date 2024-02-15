import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FirstLogin } from "../screens/FirstLogin";
import { LoginOptions } from "../screens/LoginOptions";
import { CreateAccountWithEmail } from "../screens/CreateAccountWithEmail";
import { Login } from "../screens/Login";

import theme from "../globals/styles/theme";
import { NavBottomTabs } from "./NavBottomTabs";


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
                options={{
                    gestureEnabled: false //prevents going back
                }}
            />

            <Stack.Screen
                name="CreateAccountWithEmail"
                component={CreateAccountWithEmail}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="NavBottomTabs"
                component={NavBottomTabs}
            />
        </Stack.Navigator>
    )
}