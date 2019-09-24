import { useState } from "react";
import { AsyncStorage } from "react-native";

const useUploadHooks = (props) => {
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

  const clearForm = () => {
    setInputs("");
    console.log("Form Cleared!")
  };

  const handleUpload = async (result, title, description) => {
    const {uplaodFile, reloadAllMedia} = mediaAPI();
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    const localUri = result.uri;
    const filename = localUri.split("/").pop();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    let type = '';
    if (result.type === 'image') {
      type = match ? `image/${match[1]}` : `image`;
       // fix jpg mimetype
      if (type === 'image/jpg')
        type = 'image/jpeg';
    } else {
      type = match ? `video/${match[1]}` : `video`;
    }


    // Upload the image using the fetch and FormData APIs
    const formData = new FormData();

    formData.append("file", { uri: localUri, name: filename, type });
    formData.append("title", title);
    formData.append("description", description);
    const userToken = await AsyncStorage.getItem("userToken");
    console.log("FORMDATA", formData);
    // const response = await fetch("http://media.mw.metropolia.fi/wbma/media", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "x-access-token": userToken
    //   }
    // });

    uplaodFile(formData,user).then(=>{
      console.log(response)
      //everything here
    })
    const data = await response.json();

    return data

  };

  return {
    handleTitleChange,
    handleDescChange,
    handleUpload,
    inputs,clearForm
  };
};
export default useUploadHooks;
