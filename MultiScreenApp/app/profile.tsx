import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function Profile() {
  const [showContent, setShowContent] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Profile Screen
      </Text>

      <Button
        title={showContent ? "Hide Profile Details" : "Show Profile Details"}
        onPress={() => setShowContent(!showContent)}
      />

      {showContent && (
        <View
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#e0f2fe",
            borderRadius: 10,
            width: "80%",
          }}
        >
          <Text>Name: Zishan</Text>
          <Text>Email: Zish@example.com</Text>
          <Text>Membership: Premium</Text>
        </View>
      )}
    </View>
  );
}
