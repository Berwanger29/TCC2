import { NavigationContainer } from "@react-navigation/native";
import { NavScreens } from "./NavScreens";

export function NavContainer() {
    return (
        <NavigationContainer>
            <NavScreens />
        </NavigationContainer>
    )
}