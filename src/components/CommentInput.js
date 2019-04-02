import React from 'react';
import { TextInput, View, Text } from 'react-native';


export default CommentInput = (props) => {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={(e)=>change("email", e )}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        />
    </View>
  );
}
