import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
  TextInput
} from "react-native";
import LoginHook from "../hooks/LoginHook";
import FormTextInput from "../components/FormTextInput";
import useSignUpForm from "../hooks/LoginHook";
import useRegisterForm from "../hooks/RegisterHook";
import { registerRootComponent } from "expo";

const Login = props => {
  const {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
    handleUsernameChangeReg,
    handlePasswordChangeReg,
    handleEmailChange,
    handleFullnameChange
  } = useSignUpForm();

  const url = "http://media.mw.metropolia.fi/wbma/login";
  const userUrl = "http://media.mw.metropolia.fi/wbma/users";

  const signInAsync = async () => {
    const data = {
      username: inputs.username,
      password: inputs.password
    };
    console.log("SignIn data:" + data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log("Sign in results: "+result);
    await AsyncStorage.setItem("userToken", result.token);
    await AsyncStorage.setItem("username", result.user.username);
    await AsyncStorage.setItem("fullname", result.user.full_name);
    await AsyncStorage.setItem("email", result.user.email);
    props.navigation.navigate("App");
  };

  const register = async () => {
    const data = {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
      full_name: inputs.fullname
    };
    console.log(inputs.username)
    console.log(inputs.password)
    console.log(data);
    const response = await fetch(userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    signInAsync();
    console.log(result);
  };

  useEffect(() => {
    signInAsync();
  }, []);

  useEffect(() => {
    register();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize="none"
          placeholder="username"
          onChangeText={handleUsernameChange}
          value={inputs.username}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={inputs.password}
        />
        <Button
          title="Sign in!"
          onPress={() => {
            signInAsync();
          }}
        />
      </View>
      <View style={styles.form}>
        <Text>Register!</Text>
        <FormTextInput
          autoCapitalize="none"
          placeholder="username"
          onChangeText={handleUsernameChangeReg}
          value={inputs.username}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="password"
          secureTextEntry={true}
          onChangeText={handlePasswordChangeReg}
          value={inputs.password}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="email"
          onChangeText={handleEmailChange}
          value={inputs.email}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="fullname"
          onChangeText={handleFullnameChange}
          value={inputs.fullname}
        />
        <Button
          title="Register!"
          onPress={() => {
            register();
          }}
        />
      </View>
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
  form: {}
});

// proptypes here

export default Login;
