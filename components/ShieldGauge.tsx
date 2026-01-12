import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DashboardTextStyles } from '../constants/theme';

// Types TypeScript manquants pour les props de jauge
// Ne pas définir de type peut mener à des erreurs où le type de la variable n'est pas celui
// qu'on veut. Aussi, aide à la documentation de la codebase.
export default function ShieldGauge(props: any) {
  const shieldLevel = props.shieldLevel || 0;
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Shield Generators</Text>
      
      {/* Les jauges n'ont pas de dimensions (largeur/hauteur manquantes) */}
      {/* Mise en page cassée (flexbox non configuré) */}
      <View style={styles.gauge}>
        <View style={[styles.gaugeFill, { width: `${shieldLevel}%` }]} />
      </View>
      
      {/* Le texte d'avertissement est invisible (couleur correspond au fond) */}
      <Text style={styles.warning}>
        {shieldLevel < 50 ? 'WARNING: Shields below 50%' : 'Shields operational'}
      </Text>
      
      <Text style={styles.percentage}>{shieldLevel}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006312',
    // Mise en page cassée (flexbox non configuré)
  },
  label: {
    ...DashboardTextStyles.label,
    marginBottom: 10,
  },
  gauge: {
    backgroundColor: '#000000',
    borderRadius: 4,
    // Les jauges n'ont pas de dimensions (largeur/hauteur manquantes)
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#006312',
  },
  gaugeFill: {
    backgroundColor: '#33FF33',
    // Les jauges n'ont pas de dimensions (largeur/hauteur manquantes)
  },
  warning: {
    ...DashboardTextStyles.status,
    marginTop: 8,
    fontWeight: 'bold',
    // Le texte d'avertissement est invisible (couleur correspond au fond)
    color: '#000000', // Même que le fond - invisible !
  },
  percentage: {
    ...DashboardTextStyles.percentage,
    marginTop: 8,
    textAlign: 'center',
  },
});

