import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { COLORS } from "../const/theme";
import * as SecureStore from "expo-secure-store";

const handleSignup = async () => {
  try {
    // 1️⃣ Call your backend
    // await api.signup(name, email, password);

    // 2️⃣ Mark as registered
    await SecureStore.setItemAsync("isRegistered", "true");

    // 3️⃣ Go to signin or verify
    router.replace("/OTP");
  } catch (error) {
    console.log("Signup failed", error);
  }
};
export default function Signup() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Smart food choices start here
        </Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor={COLORS.muted}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor={COLORS.muted}
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={COLORS.muted}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
            onPress={handleSignup}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/SignInScreen")}
          >
            Sign In
          </Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 30,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.text,
  },
  footer: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
    color: COLORS.muted,
  },
  link: {
    color: COLORS.accent,
    fontWeight: "600",
  },
  forgot: {
    alignSelf: "flex-end",
    fontSize: 13,
    color: COLORS.accent,
    marginBottom: 20,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  otpText: {
    fontSize: 22,
    color: COLORS.text,
  },
});

