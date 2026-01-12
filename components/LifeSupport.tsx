import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DashboardTextStyles } from '../constants/theme';

// L'interface des props est définie mais les props ne sont pas utilisées
interface LifeSupportProps {
  shipName?: string;
  captainName?: string;
  status?: string;
}

export default function LifeSupport(props: LifeSupportProps) {
  // Le nom du vaisseau est passé en prop mais non affiché
  // Le nom du capitaine est disponible mais non affiché
  // Les props de statut système existent mais les composants ne les utilisent pas
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Life Support System</Text>
      {/* Le nom du vaisseau est passé en prop mais non affiché */}
      <Text style={styles.value}>Ship: UNKNOWN</Text>
      {/* Le nom du capitaine est disponible mais non affiché */}
      <Text style={styles.value}>Captain: UNKNOWN</Text>
      <Text style={styles.status}>Status: {props.status || 'UNKNOWN'}</Text>
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
  label: {
    ...DashboardTextStyles.label,
    marginBottom: 8,
  },
  value: {
    ...DashboardTextStyles.value,
    marginBottom: 4,
  },
  status: {
    ...DashboardTextStyles.status,
    marginTop: 8,
  },
});

