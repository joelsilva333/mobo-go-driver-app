import { useRouter } from "expo-router";
import {
  History,
  HomeIcon,
  QrCode,
  ScanQrCode,
  Wallet,
} from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function NavbarMenu() {
  const router = useRouter();

  const navItems: {
    icon: React.JSX.Element;
    title: string;
    link: string;
    isMain?: boolean;
  }[] = [
    {
      icon: (
        <HomeIcon
          width={32}
          height={32}
          color="#fff"
        />
      ),
      title: "Home",
      link: "/",
    },
    {
      icon: (
        <QrCode
          width={32}
          height={32}
          color="#fff"
        />
      ),
      title: "QR Receipt",
      link: "/qr-generator",
    },
    {
      icon: (
        <ScanQrCode
          width={38}
          height={38}
          color="#3C00FF"
        />
      ),
      title: "Scan QR Code",
      link: "/qr-receipt",
      isMain: true,
    },
    {
      icon: (
        <History
          width={32}
          height={32}
          color="#fff"
        />
      ),
      title: "History",
      link: "/history",
    },
    {
      icon: (
        <Wallet
          width={32}
          height={32}
          color="#fff"
        />
      ),
      title: "Wallet",
      link: "/wallet",
    },
  ];

  return (
    <View style={style.container}>
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            router.push(item.link as any);
          }}
          style={item.isMain ? style.mainButton : style.button}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#3C00FF",
  },
  button: {
    backgroundColor: "#0003C7",
    padding: 12,
    borderRadius: 12,
  },
  mainButton: {
    backgroundColor: "#ffff",
    padding: 12,
    borderRadius: 12,
  },
});
