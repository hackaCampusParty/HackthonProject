import React from 'react';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

const AppInput = ({
  first,
  identity,
  textInputValue,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  returnKeyType,
  inputRef,
  togglePass,
  onSubmitEditing,
}) => {
  return (
    <Container first={first}>
      <TextInput>{textInputValue}</TextInput>
      <InputContainer>
        {!identity && (
          <Input
            placeholder={placeholder}
            placeholderTextColor="#707070"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            togglePass={togglePass}
            keyboardType={keyboardType || 'default'}
            returnKeyType={returnKeyType || 'default'}
            ref={inputRef}
            onSubmitEditing={() => onSubmitEditing()}
          />
        )}

        {identity && (
          <TextInputMask
            type="cnpj"
            value={value}
            onChangeText={onChangeText}
            style={{
              paddingLeft: 15,
              fontSize: 20,
              color: '#707070',
              width: '100%',
            }}
            placeholder={placeholder}
            placeholderTextColor="#707070"
            keyboardType="numeric"
            returnKeyType={returnKeyType || 'default'}
            refInput={inputRef}
            onSubmitEditing={() => onSubmitEditing()}
          />
        )}
      </InputContainer>
    </Container>
  );
};

AppInput.propTypes = {
  first: PropTypes.bool,
  placeholder: PropTypes.string,
  textInputValue: PropTypes.string.isRequired,
  identity: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]),
  togglePass: PropTypes.func,
  onSubmitEditing: PropTypes.func.isRequired,
};

AppInput.defaultProps = {
  first: undefined,
  placeholder: undefined,
  identity: false,
  secureTextEntry: false,
  autoCorrect: false,
  autoCapitalize: undefined,
  keyboardType: undefined,
  returnKeyType: undefined,
  inputRef: undefined,
  togglePass: undefined,
};

export default AppInput;

const Container = styled.View`
  margin-top: ${(props) => (props.first ? '50px' : '0')};
  width: 100%;
  padding: 10px 30px 10px 30px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  background-color: #efefef;
  border: 3px solid #03989e;
  border-radius: 40px;
  align-items: center;
`;

const TextInput = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 5px 10px;
  color: #03989e;
`;

const Input = styled.TextInput`
  align-self: center;
  font-size: 19px;
  padding-left: 15px;
  flex: 1;
  min-height: 54px;
`;
