import React from 'react';
// Imports manquants. Trouver ce qui manque
// Import des types manquant

export default function NavigationPanel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Navigation Computer</Text>
      
      <Image 
        source={require('../assets/images/icon.png')}
        style={styles.icon}
      />
      
      <Text style={styles.status}>Status: Operational</Text>
      <Text style={styles.coordinates}>Coordinates: 12.34, 56.78</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006312',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#33FF33',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    color: '#33FF33',
    marginBottom: 4,
  },
  coordinates: {
    fontSize: 12,
    color: '#33FF33',
  },
});

