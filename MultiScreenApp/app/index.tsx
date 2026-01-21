import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>

      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
      <Button title="Go to Details" onPress={() => router.push("/details")} />
    </View>
  );
}
