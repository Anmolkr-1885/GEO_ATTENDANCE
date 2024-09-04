import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

// Import default profile image locally
const defaultProfileImage = require('./assets/default.png');

const { height: viewportHeight } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  // Animation for buttons
  const [scaleAnim] = React.useState(new Animated.Value(1)); // Initial scale
  const [workingType, setWorkingType] = React.useState('Onsite'); // State for dropdown

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconButton}>
          <Icon name="menu" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>HOME</Text>
        <View style={styles.navRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="account-circle" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={defaultProfileImage} // Use default image only
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileLabel}>Name:</Text>
          <Text style={styles.profileValue}>John Doe</Text>
          <Text style={styles.profileLabel}>EID:</Text>
          <Text style={styles.profileValue}>123456</Text>
          <Text style={styles.profileLabel}>Mobile:</Text>
          <Text style={styles.profileValue}>+1 234 567 890</Text>
          <Text style={styles.profileLabel}>Email:</Text>
          <Text style={styles.profileValue}>john.doe@example.com</Text>
          <Text style={styles.profileLabel}>Address:</Text>
          <Text style={styles.profileValue}>123 Main St, City, Country</Text>
          <Text style={styles.profileLabel}>Working Type:</Text>
          <Picker
            selectedValue={workingType}
            style={styles.picker}
            onValueChange={(itemValue) => setWorkingType(itemValue)}
          >
            <Picker.Item label="Onsite" value="Onsite" />
            <Picker.Item label="Offsite" value="Offsite" />
          </Picker>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.bottomButton, styles.buttonBorder]}
          onPress={() => {
            animateButton();
            navigation.navigate('Home');
          }}>
          <Animated.Text style={[styles.bottomButtonText, animatedStyle]}>Home</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.buttonBorder]}
          onPress={() => {
            animateButton();
            navigation.navigate('Profile');
          }}>
          <Animated.Text style={[styles.bottomButtonText, animatedStyle]}>Profile</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.buttonBorder]}
          onPress={() => {
            animateButton();
            navigation.navigate('Attendance');
          }}>
          <Animated.Text style={[styles.bottomButtonText, animatedStyle]}>Attendance</Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.buttonBorder]}
          onPress={() => {
            animateButton();
            navigation.navigate('Settings');
          }}>
          <Animated.Text style={[styles.bottomButtonText, animatedStyle]}>Settings</Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Light blue background
    justifyContent: 'space-between', // Space between profile container and bottomNav
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000', // Black background
    elevation: 4,
  },
  iconButton: {
    marginHorizontal: 8,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // White text
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 0, // Takes up half of the screen height
     flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
    borderWidth: 1,
    borderColor: '#cccccc',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 120, // Adjust size as needed
    height: 120, // Adjust size as needed
    borderRadius: 60, // Half of width/height to make it a circle
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of width/height to fit inside the circle
  },
  profileInfo: {
    flex: 2,
    paddingLeft: 16,
  },
  profileLabel: {
    fontWeight: 'bold',
  },
  profileValue: {
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#000000', // Black background
    elevation: 4,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  bottomButton: {
    padding: 8,
    backgroundColor: '#333333', // Light black background for buttons
    borderRadius: 4,
  },
  bottomButtonText: {
    fontSize: 16,
    color: '#ffffff', // White text color
    textAlign: 'center',
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});

export default ProfileScreen;
