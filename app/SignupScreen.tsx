import { View, Text, TextInput,TouchableOpacity,StyleSheet,SafeAreaView } from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
type RootStackParamList = {
  Signup: undefined;
  SignIn : undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;
export default function SignupScreen() {
  return (
    <View>
      <Text>Signup Screen</Text>
    </View>
  );
}
