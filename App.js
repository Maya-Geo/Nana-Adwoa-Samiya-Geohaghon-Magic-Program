import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("./assets/closeup.webp")}
        style={{
          backgroundColor: "",

          width: "100%",
          height: "300%",    // applied to Image
        }}
        imageStyle={{
          resizeMode: "contain", // works only here!
        }}
        blurRadius={20}
      ></ImageBackground> */}
      {/* <Text>Some Content</Text> */}

      <Image
        style={styles.img}
        // resizeMode="cover"
        source={require("./assets/stock.jpg")}
        blurRadius={10}
      />

      <View>
        <Image source={require("./assets/stock.jpg")} style={styles.Snow} />
      </View>

      <View style={styles.header}></View>

      <View style={styles.Arrowcheck}>
        <AntDesign name="checkcircle" size={55} color="goldenrod" />
      </View>

      <Text style={styles.mike}>Mike Parker</Text>
      <Text style={styles.CardTitle}>
        Some quick example text to build on the {"\n"}card title and make up the
        bulk of the card's content
      </Text>

      <View style={styles.socialIcons}>
        <Entypo
          name="facebook-with-circle"
          size={45}
          color="goldenrod"
          style={styles.iconFb}
        />
        <Entypo
          name="twitter-with-circle"
          size={45}
          color="goldenrod"
          style={styles.iconTwitter}
        />
        <FontAwesome
          name="google-plus-official"
          size={45}
          color="goldenrod"
          style={styles.official}
        />
        <Entypo
          name="linkedin-with-circle"
          size={45}
          color="goldenrod"
          style={styles.behanceIcon}
        />

        <Entypo
          name="instagram-with-circle"
          size={45}
          color="goldenrod"
          style={styles.insta}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    height: 250,
    bottom: 10,
  },

  Snow: {
    bottom: 220,
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  header: {
    backgroundColor: "white",
  },

  Arrowcheck: {
    bottom: 180,
  },

  mike: {
    fontWeight: "bold",
    fontSize: 19,
    bottom: 165,
  },

  CardTitle: {
    bottom: 140,
    fontSize: 18,
  },

  socialIcons: {
    bottom: 90,
    flexDirection: "row",
    right: 2,
  },

  behanceIcon: {
    margin: 9,
    borderRadius: 30,

    padding: 8,
  },

  iconFb: {
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },
  iconTwitter: {
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },

  official: {
    margin: 9,
    borderRadius: 50,
    padding: 8,
  },

  insta: {
    margin: 9,
    borderRadius: 40,
    padding: 8,
  },
});
