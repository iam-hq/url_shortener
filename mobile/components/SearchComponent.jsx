import {View, TextInput, TouchableOpacity} from 'react-native';
import XIcon from '../assets/Jsx/XIcon';
import {colors} from '../assets/colors';

export default ({searchText, setSearchText, toggle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 8,
        gap: 10,
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 700,
        }}
        placeholder="Search..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <TouchableOpacity onPress={toggle}>
        <XIcon size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
