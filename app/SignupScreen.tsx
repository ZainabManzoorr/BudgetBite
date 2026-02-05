import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Illustration */}
      <View style={styles.image}>
        <Image
          source={require("../assets/images/logo1.png")}
          style={styles.image}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Join BudgetBite</Text>
      <Text style={styles.subtitle}>
        Smart food choices for smart students
      </Text>

      {/* Full Name */}
      <Text style={styles.title}>Full Name</Text>
      <TextInput
        placeholder="Alex Johnson"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />

      {/* Email */}
      <Text style={styles.title}>Email</Text>
      <TextInput
        placeholder="alex@university.edu"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Password */}
      <Text style={styles.title}>Password</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Create a strong password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!passwordVisible}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye-off" : "eye"}
            size={22}
            color="#9CA3AF"
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login */}
      <Text style={styles.loginLink}>
        Already have an account?{" "}
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7F2",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24, // 🔥 THIS fixes edge touching
    paddingTop: 20,
  },

  image: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#6A8F6A",
    marginBottom: 30,
    marginTop: 6,
  },

  input: {
    backgroundColor: "#FFF9F2",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },

  button: {
    backgroundColor: "#32E132",
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 10,
    shadowColor: "#32E132",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  buttonText: {
    color: "#083B08",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  loginText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
    color: "#555",
  },

  loginLink: {
    color: "#2E7D32",
    fontWeight: "600",
  },
});

