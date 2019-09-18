import { useState } from "react";
import {AsyncStorage} from "react-native"

const useUploadHooks = () => {
  const [inputs, setInputs] = useState({});
  const handleTitleChange = text => {
    setInputs(inputs => ({
      ...inputs,
      title: text
    }));
  };

  const handleDescChange = text => {
    setInputs(inputs => ({
      ...inputs,
      description: text
    }));
  };

  const handleUpload = async (image,title,description) => {
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = image;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("file", { uri: localUri, name: filename, type  });
    formData.append("title",title);
    formData.append("description",description);
    const userToken = await AsyncStorage.getItem("userToken");
    console.log(userToken)
    console.log(formData)

    const response = await fetch("http://media.mw.metropolia.fi/wbma/media", {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": userToken
      }
    });
    const json = await response.json()
    console.log(json)
    return json
  };

  return {
    handleTitleChange,
    handleDescChange,
    handleUpload,
    inputs
  };
};
export default useUploadHooks;
