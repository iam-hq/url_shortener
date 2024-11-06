import {View, Text, StatusBar, useColorScheme, ScrollView} from 'react-native';
import {colors} from '../../assets/colors';
import Section from '../../components/Section';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray800 : colors.Gray200,
  };
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(data => (
          <Section title={'HJello'} key={data}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam
              dolor ad optio laborum molestiae magnam molestias repudiandae eos
              eius debitis expedita, nostrum quibusdam doloremque fugiat cumque
              facere, ut voluptatum.
            </Text>
          </Section>
        ))}
      </ScrollView>
    </>
  );
};
