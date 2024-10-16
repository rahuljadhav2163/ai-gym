import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  ImageBackground 
} from "react-native";
import BottomBar from './bottombar';
import Header from './header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login functionality here
    console.log('Logging in with:', { email, password });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
       
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/originals/6d/67/93/6d67935203d463683c04a6885dee44be.jpg' }} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>Login to Your Account</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#A0AEC0"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#A0AEC0"
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* BottomBar positioned at the bottom of the screen */}
      <BottomBar />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#cce6ffb3', // Light overlay for better readability
    borderRadius: 0,
    margin: 0 ,
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
  },
  loginButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4299E1",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#4299E1",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#718096",
    fontSize: 16,
  },
  signupButtonText: {
    color: "#4299E1",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
