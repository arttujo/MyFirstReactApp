import {useState} from 'react';

const useRegisterForm = () => {
  const [RegInputs, setInputs] = useState({});

  const handleUsernameChangeReg = (text) => {
    setInputs((RegInputs) =>
      ({
        ...RegInputs,
        username: text,
      }));
  };
  const handlePasswordChangeReg = (text) => {
    setInputs((RegInputs) =>
      ({
        ...RegInputs,
        password: text,
      }));
  };
  const handleEmailChange = text => {
    setInputs(RegInputs => ({
      ...RegInputs,
      email: text
    }));
  };
  const handleFullnameChange = text => {
    setInputs(RegInputs => ({
      ...RegInputs,
      fullname: text
    }));
  };
  return {
    handleUsernameChangeReg,
    handlePasswordChangeReg,
    handleEmailChange,
    handleFullnameChange,
    RegInputs,
  };
};

export default useRegisterForm;
