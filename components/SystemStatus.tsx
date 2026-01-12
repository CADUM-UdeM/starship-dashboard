import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DashboardTextStyles } from '../constants/theme';

// Types de props TypeScript manquants ou incorrects - aucune interface définie pour les props
export default function SystemStatus(props: any) {
  // Les props ne sont pas passées correctement - utilisation de mauvais noms de props
  // Le rendu conditionnel ne fonctionne pas - affiche toujours les mêmes valeurs
  const getStatusColor = (status: string | number | undefined) => {
    // Tout le texte devrait être #33FF33
    return '#33FF33';
  };

  const getStatusText = (status: string | number | undefined) => {
    if (typeof status === 'number') {
      return `${status}%`;
    }
    return status?.toUpperCase() || 'UNKNOWN';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Status</Text>
      
      <View style={styles.statusRow}>
        <Text style={styles.systemName}>Life Support:</Text>
        {/* Les props ne sont pas passées correctement - utilisation de mauvais noms de props */}
        <Text style={[styles.statusValue, { color: getStatusColor(props.lifeSupportStatus) }]}>
          {getStatusText(props.lifeSupportStatus)}
        </Text>
      </View>
      
      <View style={styles.statusRow}>
        <Text style={styles.systemName}>Shields:</Text>
        {/* Les props ne sont pas passées correctement - utilisation de mauvais noms de props */}
        <Text style={[styles.statusValue, { color: getStatusColor(props.shieldLevel) }]}>
          {getStatusText(props.shieldLevel)}
        </Text>
      </View>
      
      <View style={styles.statusRow}>
        <Text style={styles.systemName}>Navigation:</Text>
        {/* Les props ne sont pas passées correctement - utilisation de mauvais noms de props */}
        <Text style={[styles.statusValue, { color: getStatusColor(props.navStatus) }]}>
          {getStatusText(props.navStatus)}
        </Text>
      </View>
      
      <View style={styles.statusRow}>
        <Text style={styles.systemName}>Warp Core:</Text>
        {/* Les props ne sont pas passées correctement - utilisation de mauvais noms de props */}
        <Text style={[styles.statusValue, { color: getStatusColor(props.coreStatus) }]}>
          {getStatusText(props.coreStatus)}
        </Text>
      </View>
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
  },
  title: {
    ...DashboardTextStyles.title,
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  systemName: {
    ...DashboardTextStyles.systemName,
  },
  statusValue: {
    ...DashboardTextStyles.statusValue,
  },
});

