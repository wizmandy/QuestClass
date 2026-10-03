import {
  ActivityIndicator,
  Text,
  View,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { JourneyScreen } from "./src/screens/JourneyScreen";
import { colors } from "./src/theme";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (fontError || !fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        {fontError ? (
          <Text style={{ color: colors.text }}>
            Não foi possível carregar as fontes. Reinicie o app.
          </Text>
        ) : (
          <ActivityIndicator color={colors.purple} />
        )}
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <JourneyScreen />
    </SafeAreaProvider>
  );
}