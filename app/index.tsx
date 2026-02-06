import { View, Text, StyleSheet, Image,Animated } from "react-native";
import { useEffect,useRef } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  const burger = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const pizza = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const coffee = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Parallel animation for food items
    Animated.parallel([
      Animated.timing(burger,{
        toValue:{x:-70,y:-80},
        duration:1200,
        useNativeDriver:true,
      }),
      Animated.timing(pizza,{
        toValue:{x:70,y:-80},
        duration:1200,
        useNativeDriver:true,
      }),
      Animated.timing(coffee,{
        toValue:{x:-20,y:-120},
        duration:1200,
        useNativeDriver:true,
      }),
      Animated.timing(fade,{
        toValue:1,
        duration:600,
        useNativeDriver:true,
      })
    ])
    .start();
  },[]);

  const timer = setTimeout(() => {
    router.replace("/SignupScreen"); // change route when ready
  },2400);
  
  return (
    <View style={styles.container}>
      {/* FOOD ICONS */}
      <Animated.Image
        source={require("../assets/images/burger.png")}
        style={[
          styles.food,
          {
            transform: burger.getTranslateTransform(),
            opacity: fade,
          },
        ]}
      />

      <Animated.Image
        source={require("../assets/images/pizza.png")}
        style={[
          styles.food,
          {
            transform: pizza.getTranslateTransform(),
            opacity: fade,
          },
        ]}
      />

      <Animated.Image
        source={require("../assets/images/coffee.png")}
        style={[
          styles.food,
          {
            transform: coffee.getTranslateTransform(),
            opacity: fade,
          },
        ]}
      />
      {/* WALLET LOGO */}
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>BudgetBite</Text>
      <Text style={styles.tagline}>Eat smart. Spend less.</Text>
    </View>
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
