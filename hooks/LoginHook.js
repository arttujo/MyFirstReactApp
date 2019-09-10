import { useState } from "react";

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = text => {
    setInputs(inputs => ({
      ...inputs,
      username: text
    }));
  };
  const handlePasswordChange = text => {
    setInputs(inputs => ({
      ...inputs,
      password: text
    }));
  };

  const handleEmailChange = text => {
    setInputs(inputs => ({
      ...inputs,
      email: text
    }));
  };
  const handleFullnameChange = text => {
    setInputs(inputs => ({
      ...inputs,
      fullname: text
    }));
  };

  return {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
    handleEmailChange,
    handleFullnameChange
  };
};

export default useSignUpForm;
