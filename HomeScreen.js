import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure you have react-navigation installed

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Attendx</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('LoginScreen')}
          color="#007bff" // Button color
        />
        <View style={styles.spacer} />
        <Button
          title="Signup"
          onPress={() => navigation.navigate('SignupScreen')}
          color="#28a745" // Button color
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Background color
  },
  header: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Text color
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  spacer: {
    height: 10,
  },
});



export default HomeScreen;


