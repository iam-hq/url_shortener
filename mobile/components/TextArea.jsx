import React, {useState} from 'react';
import {Dimensions, TextInput} from 'react-native';

export default props => {
  const {setInputMessage, inputMessage} = props;
  const {setScrollviewHeight, keyboardHeight} = props;
  const [textInputHeight, setTextInputHeight] = useState(40); // Initial height

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    if (contentHeight + 10 < 150) {
      setTextInputHeight(contentHeight + 10);
      setScrollviewHeight(
        Dimensions.get('window').height - (keyboardHeight + contentHeight + 90),
      );
    }
  };

  return (
    <TextInput
      style={{
        flex: 1,
        height: textInputHeight,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
      }}
      placeholder="Type your message"
      multiline={true}
      numberOfLines={4}
      value={inputMessage}
      onContentSizeChange={e =>
        handleContentSizeChange(
          e.nativeEvent.contentSize.width,
          e.nativeEvent.contentSize.height,
        )
      }
      onChangeText={inputText => setInputMessage(inputText)}
    />
  );
};
