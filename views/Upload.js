import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
  Alert,
  Image
} from "react-native";
import PropTypes from "prop-types";
import FormTextInput from "../components/FormTextInput";
import useSignUpForm from "../hooks/LoginHook";
import mediaAPI from "../hooks/ApiHooks";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body,
  Card,
  CardItem
} from "native-base";
import useUploadHooks from "../hooks/UploadHooks";

const Upload = props => {
  const [image, setImage] = useState({});
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      setImage({ image: result.uri });
    }
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  });
  const {
    handleTitleChange,
    inputs,
    handleDescChange,
    handleUpload
  } = useUploadHooks();

  return (
    <Content>
      <Form>
        <Body>
          <Text>Upload</Text>
        </Body>
        <Card>
          <CardItem>
            <Button
              title="Select Image"
              onPress={() => {
                _pickImage();
              }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text>Selected Image</Text>
            </Body>
          </CardItem>
          <CardItem>
            {image && (
              <Image
                source={{ uri: image.image }}
                style={{
                  flex: 1,
                  width: null,
                  height: 350
                }}
              />
            )}
          </CardItem>
        </Card>

        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="title"
            onChangeText={handleTitleChange}
            value={inputs.title}
            required
          />
        </Item>
        <Item>
          <FormTextInput
            autoCapitalize="none"
            placeholder="Description"
            onChangeText={handleDescChange}
            value={inputs.description}
            required
          />
        </Item>

        <Button
          title="Upload!"
          onPress={() => {
            handleUpload(image.image,inputs.title,inputs.description);
          }}
        />
      </Form>
    </Content>
  );
};
export default Upload;
