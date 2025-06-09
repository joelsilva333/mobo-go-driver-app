import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function MeuQRCode() {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 12,
        }}>
        <QRCode
          value="https://kuvica.vercel.app"
          size={250}
        />
      </View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "#333",
          textAlign: "center",
        }}>
        Escaneie o QR Code acima para descontar passagens.
      </Text>
    </View>
  );
}
