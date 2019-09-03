import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, AsyncStorage, Button } from "react-native";

// const getInfo = async () => {
//   const userName = await AsyncStorage.getItem("username");
//   const userEmail = await AsyncStorage.getItem("email");
//   const userFullname = await AsyncStorage.getItem("fullname");
//   const [user, setUser] = useState({});
// };

// useEffect(() => {
//   getInfo();
// }, []);

const Profile = props => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const username = await AsyncStorage.getItem('username');
    setUser({username: username})
    console.log(username)
  };

const [email,setEMail] = useState({});
const getEmail = async() =>{
  const email = await AsyncStorage.getItem('email');
  setEMail({email: email})
};

const [fullname, setFullname] = useState({});
const getFullname = async() =>{
  const fullname = await AsyncStorage.getItem('fullname');
  setFullname({fullname: fullname})
}
  useEffect(() => {
    getUser();
    getEmail();
    getFullname();
  }, []);

console.log();
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      <Text style={{ textDecorationLine: "underline" }}>Profile</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {email.email}</Text>
      <Text>Fullname: {fullname.fullname}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
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
  }
});

export default Profile;
