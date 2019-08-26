import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  flex,
  flexDirection
} from "react-native";
import { AuthSession } from "expo";

const mediaArray = [
  {
    key: "0",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    thumbnails: {
      w160: "http://placekitten.com/160/161"
    },
    filename: "http://placekitten.com/2048/1920"
  },
  {
    key: "1",
    title: "Title 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    thumbnails: {
      w160: "http://placekitten.com/160/162"
    },
    filename: "http://placekitten.com/2041/1922"
  },
  {
    key: "2",
    title: "Title 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    thumbnails: {
      w160: "http://placekitten.com/160/163"
    },
    filename: "http://placekitten.com/2039/1920"
  }
];
// CTRL+ KC Kommentti, CTRL + KU Uncomment

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mediaArray}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.row}>
              <View style={styles.imageBox}>
                <Image
                  style={styles.image}
                  source={{ uri: item.thumbnails.w160 }}
                />
              </View>

              <View style={styles.textBox}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40
  },
  row: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#ccc"
  },
  imageBox: {
    flex: 1
  },
  textBox: {
    flex: 2
  },
  image: {
    flex: 1
  },
  listTitle:{
    fontWeight:'bold',
    fontSize:20,
  }
});

export default App;
