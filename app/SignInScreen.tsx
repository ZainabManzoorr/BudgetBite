import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import React, {useState} from "react";
import { supabase } from "@/lib/supabase";
import { router, useRouter } from "expo-router";
import { COLORS } from "../const/theme";
import * as SecureStore from "expo-secure-store";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email : email,
      password : password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
    if (!error) {
      await SecureStore.setItemAsync("authToken", supabase.auth.getSession()?.access_token || "");
      router.replace("/home");
    }
      return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Welcome back, you’ve been missed
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={COLORS.muted}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={COLORS.muted}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Don’t have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/SignupScreen")}
          >
            Sign Up
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

