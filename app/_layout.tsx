import { Stack } from "expo-router";
export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" options={{ headerTitle: "BudgetBite" }} />
      <Stack.Screen name="SignInScreen" options={{ headerTitle: "BudgetBite" }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}