import { Menu } from "lucide-react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header({
  setMenuOpen,
}: {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setMenuOpen(true)}>
        <Menu
          color="#3C00FF"
          size={32}
        />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/icon.png")}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: "center",
  },
});
