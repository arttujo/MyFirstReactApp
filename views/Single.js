import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Navigator from "../navigators/Navigator"
const Single = (props) => {
  const {navigation} = props;
  const file = navigation.getParam('file')
  //console.log(file.title)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{file.title}</Text>
      <Image style={styles.img} title = {file.title} source = {{uri: file.filename}}/>
      <Text style={{textDecorationLine: "underline"}}>Description</Text>
      <Text>{file.description}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  img:{
    height:400,
    width:400
  },
  text:{
    fontWeight: "bold",
    fontSize: 40
  },
  desc:{

  }
});

export default Single;
