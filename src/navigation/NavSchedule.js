import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "../globals/styles/theme";


import { Home } from "../screens/Home";
import { Schedule } from "../screens/Schedule";
import { Confirmation } from "../screens/Confirmation";

const Stack = createNativeStackNavigator()

export function NavSchedule() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: {
                    backgroundColor: theme.colors.blue
                }
            }}
        >
            <>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Schedule"
                    component={Schedule}
                />
                <Stack.Screen
                    name="Confirmation"
                    component={Confirmation}
                />
            </>
        </Stack.Navigator>
    )
}