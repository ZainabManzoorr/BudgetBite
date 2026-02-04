import { Stack } from "expo-router/stack";
export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
         headerTitle: "BudgetBite",
       }}
      />
      <Stack.Screen 
      name="about"
      options={{
        headerTitle:"BudgetBite",
      }} />
    </Stack>
  );
}