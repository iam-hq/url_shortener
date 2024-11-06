import {FlatList} from 'react-native';

export default ({children, style}) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      style={style}
    />
  );
};
