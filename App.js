import React from "react";
import { StyleSheet, View, ToolbarAndroid, Image, Text } from "react-native";
import List from "./components/List";
import { MediaProvider } from "./contexts/MediaContext";

const App = () => {
  return (
    <View>
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          logo={require("./metropoliaedited.png")}
          title="Metropolia"
          subtitle="Images from the depths"
          actions={[
            {
              title: "Settings",
              icon: require("./hamburger.png"),
              show: "always"
            }
          ]}
        />
      </View>
      <View style={styles.image}>
        <Image source={require("./servers.jpg")} />
        <View style={styles.floatingBox}>
          <Text style={styles.textBox}>Thousands of pictures at your fingertips!</Text>
        </View>
      </View>

      <View></View>

      <MediaProvider>
        <View style={styles.container}>
          <List></List>
        </View>
      </MediaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 525
  },
  floatingBox: {
    position: "absolute",
    bottom: 20,
    left: 30,
    backgroundColor: "rgba(140,140,140,0.95)",
    padding: 5,
    borderRadius: 10,
    width: 200


  },
  textBox: {
    fontWeight: "bold",
    fontSize: 15,
  },

  toolbar: {
    backgroundColor: "#FFC300",
    height: 60
  },
  image: {
    resizeMode: "stretch",
    height: 250,
    width: 50
  }
});

export default App;
