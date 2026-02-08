import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../const/theme";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

// Mock function to simulate OTP verification
const handleVerify = async () => {
  // In real app, verify OTP here
await SecureStore.setItemAsync("isRegistered", "true");
router.replace("/SignInScreen");
};

export default function Verify() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to your email
        </Text>

        <View style={styles.otpRow}>
          {[0,1,2,3].map((_, i) => (
            <View key={i} style={styles.otpBox}>
              <Text style={styles.otpText}>•</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Didn’t receive code?{" "}
          <Text style={styles.link}>Resend</Text>
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

