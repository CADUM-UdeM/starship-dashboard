import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LifeSupport from './components/LifeSupport';
import NavigationPanel from './components/NavigationPanel';
import ShieldGauge from './components/ShieldGauge';
import SystemStatus from './components/SystemStatus';

// Guarder le splash screen jusqu'à que le chargement est fini
SplashScreen.preventAutoHideAsync();

export default function App() {
  // Import de la police
  const [fontsLoaded] = useFonts({
    'GlassTTYVT220': require('./assets/fonts/Glass_TTY_VT220.ttf'),
  });

  // Une fois que la police est chargée, on cache le splash screen
  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // Information du vaisseau - ces props existent mais ne sont pas passées correctement
  const shipName = 'U.S.S. DIRO';
  const captainName = 'Captain Marc Feeley';
  
  // Statuts des systèmes - ceux-ci devraient être passés aux composants
  const systems = {
    lifeSupport: 'online' as 'online' | 'offline' | 'critical',
    shields: 75,
    navigation: 'operational' as 'operational' | 'offline' | 'error',
    warpCore: 'stable' as 'stable' | 'unstable' | 'critical'
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor : '#000000', alignContent : 'center'}}>
      <View style={styles.container}>
        {/* Props non connectées - le nom du vaisseau et du capitaine sont passés mais non affichés dans le composant */}
        <LifeSupport 
          shipName={shipName}
          captainName={captainName}
          status={systems.lifeSupport}
        />
        
        <ShieldGauge shieldLevel={systems.shields} />
        
        {/* Les props de statut système existent mais les composants ne les utilisent pas - mauvais noms de props */}
        <SystemStatus 
          lifeSupportStatus={systems.lifeSupport}
          shieldLevel={systems.shields}
          navStatus={systems.navigation}
          coreStatus={systems.warpCore}
        />
        
        <NavigationPanel />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent : 'center'
  },
});

