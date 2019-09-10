import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import FormTextInput from "../components/FormTextInput";
import useSignUpForm from "../hooks/LoginHook";
import mediaAPI from "../hooks/ApiHooks";
import Validation from "../components/Validation"
import Validate from "../components/Validation_Wrapper"
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

  const { signInAsync, registerAsync, checkUser } = mediaAPI();
  const {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
    handleEmailChange,
    handleFullnameChange,
    handleFormChange
  } = useSignUpForm();

  const LoginForm = () => {
    const {
      handleUsernameChange,
      handlePasswordChange,
      inputs,
      handleEmailChange,
      handleFullnameChange
    } = useSignUpForm();
    return (
      <Content>
        <Form>
          <Body>
            <Text>Login</Text>
          </Body>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="username"
              onChangeText={handleUsernameChange}
              value={inputs.username} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="password"
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              value={inputs.password} required
            />
          </Item>
          <Button
            title="Sign in!"
            onPress={() => {
              signInAsync(inputs, props);
            }}
          />
          <Button
            title="Sign up instead!"
            onPress={() => handleFormChange(<RegisterForm />)}
          />
        </Form>
      </Content>
    );
  };

  const RegisterForm = () => {
    const {
      handleUsernameChange,
      handlePasswordChange,
      inputs,
      handleEmailChange,
      handleFullnameChange,
      handlePasswordConfirmChange
    } = useSignUpForm();

    return (
      <Content>
        <Form>
          <Body>
            <Text>Register!</Text>
          </Body>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="username"
              onChangeText={handleUsernameChange}
              value={inputs.username} required
              onEndEditing={(evt)=>{
                const uname = evt.nativeEvent.text;
                console.log("Uname in input",uname)
                  checkUser(uname);
              }}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="password"
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              value={inputs.password} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="confirm password"
              secureTextEntry={true}
              onChangeText={handlePasswordConfirmChange}
              value={inputs.password} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="email"
              onChangeText={handleEmailChange}
              value={inputs.email} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="fullname"
              onChangeText={handleFullnameChange}
              value={inputs.fullname} required
            />
          </Item>
          <Button
            title="Register!"
            onPress={() => {
              registerAsync(inputs, props);
            }}
          />
          <Button
            title="Login Instead!"
            onPress={() => handleFormChange(<LoginForm />)}
          />
        </Form>
      </Content>
    );
  };



  useEffect(()=>{
    handleFormChange(<LoginForm/>);
  }
  ,[]);


  return (
    <Container>{inputs.form}</Container>
  )
};

export default Login;
