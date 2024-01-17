//managed workflow
import { NavContainer } from './src/navigation/NavContainer';

import theme from './src/globals/styles/theme';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Oswald_700Bold,
  Oswald_400Regular,
  Oswald_300Light
} from '@expo-google-fonts/oswald';
import {
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold
} from '@expo-google-fonts/source-sans-pro';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Oswald_700Bold,
    Oswald_400Regular,
    Oswald_300Light,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <NavContainer />
    </ThemeProvider>
    </>
  );
}


