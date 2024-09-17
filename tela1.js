import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const labs = [
  { id: 1, name: 'Nome do Lab', location: 'Hotel Tecnológico' },
  { id: 2, name: 'Nome do Lab', location: 'Hotel Tecnológico' },
  { id: 3, name: 'Nome do Lab', location: 'Hotel Tecnológico' },
  { id: 4, name: 'Nome do Lab', location: 'Hotel Tecnológico' },
  { id: 5, name: 'Nome do Lab', location: 'Hotel Tecnológico' },
];

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tudo</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabMenu}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Hotel Tecnológico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>IF Maker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Eletrotécnica</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Labs List */}
      <ScrollView style={styles.listContainer}>
        {labs.map((lab) => (
          <View key={lab.id} style={styles.labItem}>
            <View style={styles.labInfo}>
              <Text style={styles.labName}>{lab.name}</Text>
              <Text style={styles.labLocation}>{lab.location}</Text>
            </View>
            <TouchableOpacity style={styles.calendarIcon}>
              <Image source={require('./trabtelas/assets/calendario.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => { /* Handle button press */ }}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabMenu: {
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    padding: 10,
  },
  labItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labInfo: {
    flexDirection: 'column',
  },
  labName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  labLocation: {
    fontSize: 14,
    color: '#777',
  },
  calendarIcon: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
