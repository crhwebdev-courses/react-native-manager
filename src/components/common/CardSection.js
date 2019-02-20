import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
  return (
    //Note: passing style an array of styles will overwrite styles to the left with ones to the right
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
