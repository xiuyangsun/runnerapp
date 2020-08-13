import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as But } from 'react-native-elements';
import palettes from '~/constants/palettes';

const Button = (props) => {
  return (
    <But
      title="Button"
      containerStyle={styles.containerStyle}
      buttonStyle={styles.buttonStyle}
      {...props}>
    </But>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
  buttonStyle: {
    backgroundColor: palettes.primaryColor
  }
});

export default Button;
