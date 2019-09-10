import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, AsyncStorage } from "react-native";
import PropTypes from 'prop-types';
import FormTextInput from "../components/FormTextInput";
import useSignUpForm from "../hooks/LoginHook";
import mediaAPI from '../hooks/ApiHooks';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body
} from "native-base";

const Login = props => {
  const {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
    handleEmailChange,
    handleFullnameChange
  } = useSignUpForm();
  const {signInAsync, registerAsync} = mediaAPI();



  return (
    <Content>
      <Body>
        <Text>Login</Text>
      </Body>
      <Form>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="username"
            onChangeText={handleUsernameChange}
            value={inputs.username}
          />
        </Item>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={inputs.password}
          />
        </Item>
        <Button
          title="Sign in!"
          onPress={() => {
            signInAsync(inputs, props);
          }}
        />
      </Form>

      <Body>
        <Text>Register!</Text>
      </Body>
      <Form>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="username"
            onChangeText={handleUsernameChange}
            value={inputs.username}
          />
        </Item>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={inputs.password}
          />
        </Item>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="email"
            onChangeText={handleEmailChange}
            value={inputs.email}
          />
        </Item>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="fullname"
            onChangeText={handleFullnameChange}
            value={inputs.fullname}
          />
        </Item>
        <Button
          title="Register!"
          onPress={() => {
            registerAsync(inputs, props);
          }}
        />
      </Form>
    </Content>
  );
};

export default Login;
