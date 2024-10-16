import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Link, usePathname } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BottomBar = () => {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <NavButton title="Home" iconName="home" route="/" />
      <NavButton title="AI-Trainer" iconName="barbell-outline" route="/aitrainer" />
      <NavButton title="Membership" iconName="logo-medium" route="/membership" />
      <NavButton title="About" iconName="podium" route="/about" />
      <NavButton title="Login" iconName="log-in" route="/login" />
    </View>
  );
};

const NavButton = ({ title, iconName, route }) => (
  <Link href={route} style={styles.button}>
    <View style={styles.iconContainer}>
      <Icon name={iconName} size={24} color="#A0AEC0"/>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Link>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A202C',
    borderTopWidth: 1,
    borderTopColor: '#2D3748',
    paddingVertical: 0,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    maxWidth: WINDOW_WIDTH / 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
  activeIconContainer: {
    backgroundColor: 'rgba(66, 153, 225, 0.1)',
  },
  buttonText: {
    fontSize: 10,
    color: '#A0AEC0',
    marginTop: 2,
    textAlign: 'center',
  },
  activeButtonText: {
    color: '#4299E1',
    fontWeight: 'bold',
  },
});

export default BottomBar;