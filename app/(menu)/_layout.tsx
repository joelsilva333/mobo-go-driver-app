
import { Slot } from "expo-router";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import HeaderBack from "../ui/HeaderBack";
import NavbarMenu from "../ui/NavbarMenu";

export default function RootLayout() {
  return (
    <>
      <HeaderBack />
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 14,
          flex: 1,
          backgroundColor: "#f0f0f0",
        }}>
        <Slot />
        <Toast />
      </View>
      <NavbarMenu />
    </>
  );
}