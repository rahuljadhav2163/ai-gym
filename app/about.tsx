import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Make sure to install expo-linear-gradient
import Header from "./header";
import BottomBar from "./bottombar";

export default function About() {
    return (
        <LinearGradient colors={['#cce6ff', '#2575fc']} style={styles.container}>
            <Header/>
            <View style={styles.content}>
                
                <Image
                    source={{ uri:'https://cdn.inc42.com/wp-content/uploads/2021/09/Gym-Featured.jpg' }} // Replace with your image URL
                    style={styles.image}
                />
                <Text style={styles.description}>
                    Welcome to <Text style={styles.gymName}>AI Gym Trainer</Text>, where we strive to help you achieve your fitness goals. 
                    Our state-of-the-art facilities and dedicated trainers are here to support you on your journey. 
                    Whether you are a beginner or a seasoned athlete, we have something for everyone. 
                    Join us and transform your lifestyle today!
                </Text>
                <Text style={styles.contactHeader}>Contact Us</Text>
                <Text style={styles.contactInfo}>📧 Email: info@gymname.com</Text>
                <Text style={styles.contactInfo}>📞 Phone: (123) 456-7890</Text>
                <Text style={styles.contactInfo}>📍 Location: 123 Gym St, Fit City</Text>
                
                    
            
            </View>
            <BottomBar/>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: 0,
        padding: 20,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    gymName: {
        fontWeight: 'bold',
        color: '', // Highlight gym name
    },
    contactHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2575fc',
        marginBottom: 10,
    },
    contactInfo: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#ff6b6b',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
