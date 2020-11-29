import React from 'react';
import {Text, View, Platform} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headersText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#b4cfe4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    marginTop: Platform.OS === 'ios' ? 55 : 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
};

export {Header};
