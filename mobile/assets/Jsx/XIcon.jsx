import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export default props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    style={{
      fill: props.color,
    }}
    {...props}>
    <Path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
  </Svg>
);
