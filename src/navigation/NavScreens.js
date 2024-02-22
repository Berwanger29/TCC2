import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FirstLogin } from "../screens/FirstLogin";
import { LoginOptions } from "../screens/LoginOptions";
import { CreateAccountWithEmail } from "../screens/CreateAccountWithEmail";
import { Login } from "../screens/Login";
import { NavBottomTabs } from "./NavBottomTabs";
import { Schedule } from "../screens/Schedule";
import { Confirmation } from "../screens/Confirmation";
import { AccountScreen } from "../screens/AccountScreen";

import theme from "../globals/styles/theme";
import { Privacy } from "../screens/Privacy";
import { About } from "../screens/About";
import { useState } from "react";

const Stack = createNativeStackNavigator()

export function NavScreens() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    // if(){
        
    // }

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
            {
                isSignedIn ?
                    (
                        <>
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

                            <Stack.Screen
                                name="Schedule"
                                component={Schedule}
                            />
                            <Stack.Screen
                                name="Confirmation"
                                component={Confirmation}
                            />

                            <Stack.Screen
                                name="AccountScreen"
                                component={AccountScreen}
                            />

                            <Stack.Screen
                                name="Privacy"
                                component={Privacy}
                            />

                            <Stack.Screen
                                name="About"
                                component={About}
                            />
                        </>

                    )
                    :
                    (
                        <>
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
                        </>
                    )
            }

        </Stack.Navigator>
    )
}