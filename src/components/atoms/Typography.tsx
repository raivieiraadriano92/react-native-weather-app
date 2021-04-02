import React, {ReactText} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type Props = {
  children: ReactText;
  variant:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'headline6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'button'
    | 'overline'
    | 'caption';
};

const variants: Record<Props['variant'], TextStyle> = {
  headline1: {
    fontFamily: 'Roboto',
    fontSize: 96,
  },
  headline2: {
    fontFamily: 'Roboto',
    fontSize: 60,
  },
  headline3: {
    fontFamily: 'Roboto',
    fontSize: 48,
  },
  headline4: {
    fontFamily: 'Roboto',
    fontSize: 34,
  },
  headline5: {
    fontFamily: 'Roboto',
    fontSize: 24,
  },
  headline6: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  body1: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  body2: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  subtitle1: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  subtitle2: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  button: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  overline: {
    fontFamily: 'Roboto',
    fontSize: 10,
  },
  caption: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
};

const Typography = ({children, variant}: Props) => {
  return <RNText style={variants[variant]}>{children}</RNText>;
};

export default Typography;
