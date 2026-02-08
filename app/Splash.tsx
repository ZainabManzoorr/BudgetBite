// app/Splash.tsx
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Splash() {
  const router = useRouter();

  // Animated positions for food icons
  const burger = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const pizza = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const coffee = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Fade for food icons
  const fade = useRef(new Animated.Value(0)).current;

  // Fade for entire splash (optional for smooth exit)
  const splashFade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Run parallel animation for food icons
    Animated.parallel([
      Animated.timing(burger, {
        toValue: { x: -70, y: -80 },
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(pizza, {
        toValue: { x: 70, y: -80 },
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(coffee, {
        toValue: { x: -20, y: -120 },
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Timer for splash duration + auth check
    const timer = setTimeout(async () => {
      try {
        const isRegistered = await SecureStore.getItemAsync("isRegistered");
        const token = await SecureStore.getItemAsync("authToken");

        // Optional: fade out splash for smoother transition
        Animated.timing(splashFade, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();

        if (!isRegistered) {
          router.replace("/SignupScreen");
        } else if (!token) {
          router.replace("/SignInScreen");
        } else {
          router.replace("/home");
        }
      } catch (error) {
        console.error("Error reading SecureStore:", error);
        router.replace("/SignupScreen"); // fallback
      }
    }, 2400);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [router]);

  return (
    <Animated.View style={[styles.container, { opacity: splashFade }]}>
      {/* FOOD ICONS */}
      <Animated.Image
        source={require("../assets/images/burger.png")}
        style={[styles.food, { transform: burger.getTranslateTransform(), opacity: fade }]}
      />
      <Animated.Image
        source={require("../assets/images/pizza.png")}
        style={[styles.food, { transform: pizza.getTranslateTransform(), opacity: fade }]}
      />
      <Animated.Image
        source={require("../assets/images/coffee.png")}
        style={[styles.food, { transform: coffee.getTranslateTransform(), opacity: fade }]}
      />

      {/* WALLET LOGO */}
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>BudgetBite</Text>
      <Text style={styles.tagline}>Eat smart. Spend less.</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EFE6",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
  },
  food: {
    position: "absolute",
    width: 48,
    height: 48,
    zIndex: 1,
  },
  title: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: "600",
    color: "#2F3E2F",
  },
  tagline: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7C6B",
  },
});
