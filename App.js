import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/closeup.webp")}
        style={{
          width: "100%",
          height: "300%", // applied to Image
          alignItems: "center",
          justifyContent: "center",
        }}
        imageStyle={{
          resizeMode: "contain", // works only here!
        }}
        blurRadius={20}
      >
        <Text>Some Content</Text>

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
          Some quick example text to build on the {"\n"}card title and make up
          the bulk of the card's content
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
            size={47}
            color="goldenrod"
            style={styles.official}
          />
          <Entypo
            name="instagram-with-circle"
            size={45}
            color="goldenrod"
            style={styles.behanceIcon}
          />

          <Entypo
            name="dribbble-with-circle"
            size={45}
            color="goldenrod"
            style={styles.insta}
          />
        </View>
      </ImageBackground>
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
    // borderWidth: 1,
    borderRadius: 50,
    // marginHorizontal: 10,
    // width: 54,
    // borderColor: "goldenrod",
    // color: "goldenrod",
    // height: 45,
    margin: 9,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
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
