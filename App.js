//managed workflow
import { useState } from "react";
import { NavContainer } from "./src/navigation/NavContainer";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Oswald_700Bold,
  Oswald_400Regular,
  Oswald_300Light,
} from "@expo-google-fonts/oswald";
import {
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";

import { StatusBar } from "expo-status-bar";

import theme from "./src/globals/styles/theme";

import { UserProvider } from "./src/context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Oswald_700Bold,
    Oswald_400Regular,
    Oswald_300Light,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />

      <ThemeProvider theme={theme}>
        <UserProvider>
          <NavContainer />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
