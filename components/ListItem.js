import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
const thumbUrl = "http://media.mw.metropolia.fi/wbma/uploads/";
const ListItem = props => {
  const {navigation, singleMedia} = props;

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.push("Single", {file: singleMedia});
        //console.log("pushing this object: "+ singleMedia )
      }}
    >
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{ uri: props.singleMedia.thumbnails.w160 }} //Huom B kohta. Vaihda Filename. Voidaan käydä mapilla läpi ja lisätä thumbnail
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}> {props.singleMedia.title} </Text>
        <Text> {props.singleMedia.description} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#eee",
    borderRadius: 16,
    elevation: 3
  },

  imagebox: {
    flex: 1,
    borderRadius: 10
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  textbox: {
    flex: 2,
    padding: 10
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
    color: "#f5c720"
  }
});

ListItem.propTypes = {
  singleMedia: PropTypes.object
};

export default ListItem;
