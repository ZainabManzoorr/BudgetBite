import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const bootstrap = async () => {
      //Wait 50ms to ensure Stack  mounted
      await new Promise(res => setTimeout(res, 50));
      // Show splash first
      router.replace("/Splash");

      // Fake delay for splash (UX)
      await new Promise(res => setTimeout(res, 1500));

      // Read storage
      const isRegistered = await SecureStore.getItemAsync("isRegistered");
      const token = await SecureStore.getItemAsync("authToken");

      if (!isRegistered) {
        router.replace("/SignupScreen");
      } else if (!token) {
        router.replace("/SignInScreen");
      } else {
        router.replace("/home");
      }
    };

    bootstrap();
  }, [router]);

  return null;
}
