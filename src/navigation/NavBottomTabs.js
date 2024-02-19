import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { AntDesign } from '@expo/vector-icons';

import theme from '../globals/styles/theme';
import { Historic } from '../screens/Historic';
import { NavSchedule } from './NavSchedule';

const Tab = createBottomTabNavigator();

export function NavBottomTabs() {

    return (
        <Tab.Navigator
            initialRouteName='NavSchedule'
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.tabBarBackground,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name='NavSchedule'
                component={NavSchedule}
                options={{
                    tabBarIcon: ({ focused }) => <AntDesign
                        name="home"
                        size={focused ? theme.measures.tabBarIconSizeActive : theme.measures.tabBarIconSize}
                        color={focused ? theme.colors.tabBarIconColorActive : theme.colors.tabBarIconColor}
                    />
                }}
            />

            <Tab.Screen
                name='Historic'
                component={Historic}
                options={{
                    tabBarLabel: ({ focused }) => {
                        focused ? "Início" : "Sei la"
                    },
                    title: "",
                    tabBarIcon: ({ focused }) => <AntDesign
                        name="profile"
                        size={focused ? theme.measures.tabBarIconSizeActive : theme.measures.tabBarIconSize}
                        color={focused ? theme.colors.tabBarIconColorActive : theme.colors.tabBarIconColor}
                    />
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => {
                        focused ? "Início" : "Sei la"
                    },
                    title: "",
                    tabBarIcon: ({ focused }) => <AntDesign
                        name="user"
                        size={focused ? theme.measures.tabBarIconSizeActive : theme.measures.tabBarIconSize}
                        color={focused ? theme.colors.tabBarIconColorActive : theme.colors.tabBarIconColor}
                    />
                }}
            />

        </Tab.Navigator >
    )
}