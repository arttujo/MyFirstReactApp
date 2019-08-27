import React, { useContext, useEffect,keyExtractor } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import { MediaContext } from "../contexts/MediaContext";



const dataUrl = "https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json"
const List = props => {
  const [media, setMedia] = useContext(MediaContext);
  console.log(media);

  const getMedia = () => {
    fetch(dataUrl)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log("fetced from server: ",result);
        setMedia(result);
      });
  };

  useEffect(() => getMedia(), []);

  return (
    <FlatList
      data={media}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array
};

export default List;
