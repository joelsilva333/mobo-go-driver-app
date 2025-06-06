
import { router, Slot } from "expo-router";
import {
  Bell,
  CircleHelp,
  Home,
  Info,
  Settings,
  ShieldCheck,
} from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "../ui/Header";
import NavbarMenu from "../ui/NavbarMenu";

const screenWidth = Dimensions.get("window").width;

export default function RootLayout() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isMenuOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -screenWidth,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isMenuOpen, overlayAnim, slideAnim]);

  const navItems = [
    {
      icon: <Home />,
      title: "Página Inicial",
      link: "/",
    },
    {
      icon: <Bell />,
      title: "Notificações",
      link: "/",
    },
    {
      icon: <Settings />,
      title: "Configurações",
      link: "/",
    },
    {
      icon: <Info />,
      title: "Sobre a MOBO GO",
      link: "/",
    },
    {
      icon: <ShieldCheck />,
      title: "Termos e Privacidade",
      link: "/",
    },
    {
      icon: <CircleHelp />,
      title: "Perguntas Frequentes",
      link: "/",
    },
  ];

  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <View style={styles.content}>
        <Slot />
      </View>

      <NavbarMenu />

      {
        <Animated.View
          pointerEvents={isMenuOpen ? "auto" : "none"}
          style={[
            styles.menuContainer,
            {
              opacity: overlayAnim,
            },
          ]}>
          <TouchableWithoutFeedback onPress={() => setMenuOpen(false)}>
            <View style={StyleSheet.absoluteFill} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[
              styles.menu,
              {
                transform: [{ translateX: slideAnim }],
              },
            ]}>
            {navItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.navBtn}
                onPress={() => {
                  router.push(item.link as any);
                  setMenuOpen(false);
                }}>
                {item.icon}
                <Text style={styles.navTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </Animated.View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  menuContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#0E0E0Ea2",
    zIndex: 1000,
  },
  menu: {
    position: "absolute",
    width: "70%",
    height: "100%",
    gap: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 32,
    top: 0,
    left: 0,
  },
  navBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#0D99FF",
  },
  navTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#0D99FF",
  },
});
