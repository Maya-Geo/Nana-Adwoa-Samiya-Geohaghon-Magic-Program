import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { MaterialIcons } from "@expo/vector-icons";

const statusHeight = getStatusBarHeight();
const width = Dimensions.get("window").width;
export default function App() {
  const color = "goldenrod";

  return (
    <ImageBackground
      source={require("./assets/closeup.webp")}
      style={[
        styles.container,
        { resizeMode: "contain", width: "100%", height: "110%" }, // works only here!
      ]}
      blurRadius={15}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          borderRadius: 10,
          marginVertical: 20,
        }}
      >
        <View style={styles.Imgbackground}>
          <ImageBackground
            blurRadius={20}
            style={{
              alignItems: "center",
              width: width - 40,
              height: "100%",
              justifyContent: "center",
            }}
            source={require("./assets/stock.jpg")} // applied to Image
          >
            <Image
              style={{
                width: 200,
                height: 200,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 100,
              }}
              source={require("./assets/stock.jpg")}
            />
          </ImageBackground>
        </View>
        <View
          style={[
            {
              backgroundColor: color,
            },
            styles.arrowcheck,
          ]}
        >
          <MaterialIcons name="done" size={30} color="white" />
        </View>
        <View style={styles.ParkerText}>
          <View style={{ marginTop: 70, marginVertical: 20 }}>
            <Text
              style={{
                bottom: 20,
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
              }}
            >
              Mike Parker
            </Text>
          </View>
          <View>
            <Text style={{ color: "black", textAlign: "center", fontSize: 16 }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </View>
          <View style={{ top: 50, flexDirection: "row" }}>
            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <Entypo
                name="facebook-with-circle"
                size={45}
                color={color}
                style={styles.iconFb}
              />
            </View>
            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <Entypo
                name="twitter-with-circle"
                size={45}
                color={color}
                style={styles.iconTwitter}
              />
            </View>

            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <FontAwesome
                name="google-plus-official"
                size={47}
                color={color}
                style={styles.official}
              />
            </View>

            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <Entypo
                name="dribbble-with-circle"
                size={45}
                color={color}
                style={styles.insta}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusHeight,
    backgroundColor: "#fff",
  },

  Imgbackground: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  ParkerText: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  Icon: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowcheck: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    left: (width - 100) / 2,
    width: 50,
    zIndex: 100,
    borderRadius: 50,
    marginTop: -50,
  },
});
