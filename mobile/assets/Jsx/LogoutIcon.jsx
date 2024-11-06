import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeWidth={1.5}
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
    />
  </Svg>
);
