import React, { useContext, useEffect, keyExtractor, StyleSheet } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import { MediaContext } from "../contexts/MediaContext";

//const dataUrl = "https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json"
const dataUrl = "http://media.mw.metropolia.fi/wbma/media?start=15&limit=15";
const mediaUrl = "http://media.mw.metropolia.fi/wbma/media/";
const thumbUrl = "http://media.mw.metropolia.fi/wbma/uploads/"; //concat thumbnail to this

const kk = [];
const List = props => {
  const [media, setMedia] = useContext(MediaContext);
  //console.log(media);

  /*
    const useFetch=()=>{
      const [media, setMedia] = useContext(StateContext);
      const [loading, setLoading]= useState(true);
      const fetchUrl=async()=>{
        const response await fetch(url);
        const json = await.response.json();
        setMedia(json);
        setLoading(false)
      };
      useEffect(fetchUrl,[]);
      return[media,loading];
    }

  */
  const getMedia = () => {
    fetch(dataUrl)
      .then(response => {
        return response.json();
      })
      .then(result => {
        //console.log("fetced from server: ", result);
        for (const id in result) {
          console.log(id);
          //let id = result[i].file_id;
          fetch(mediaUrl + id)
            .then(response => {
              return response.json();
            })
            .then(result => {
              //Adding url inside the objects for ListItem to use
              result.thumbnails.w160 = thumbUrl + result.thumbnails.w160;
              result.thumbnails.w320 = thumbUrl + result.thumbnails.w320;
              result.thumbnails.w640 = thumbUrl + result.thumbnails.w640;
              result.filename = thumbUrl + result.filename;
              kk.push(result);
              console.log(
                "This is the final Array of Objects to be passed on: \n",
                kk
              );
              setMedia(kk);
            });
        }
      });
  };

  useEffect(() => getMedia(), []);

  return (
    <FlatList
      data={media}
      renderItem={
        ({ item }) => <ListItem navigation={props.navigation} singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array
};

export default List;
