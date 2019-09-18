import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Navigator from "../navigators/Navigator";
import PropTypes from "prop-types";
import AImage from "../components/AsyncImage";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

const Single = props => {
  const { navigation } = props;
  const file = navigation.state.params.file;
  console.log("single:",file)
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{file.title}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Image source={{uri:"http://media.mw.metropolia.fi/wbma/uploads/" + file.filename}}
              style={{
                flex: 1,
                width: null,
                height: 350
              }}

            />
          </CardItem>

          <CardItem>
            <Body>
              <Text>Description</Text>
              <Text>{file.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Single;
