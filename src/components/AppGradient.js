import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {colors} from '../utils/Colors';

const GRADIENTS = {
  light: [colors.light.primaryColor, colors.light.secondaryColor],
  dark: [colors.dark.primaryColor, colors.dark.secondaryColor],
};

const AppGradient = ({children, style, theme = 'dark'}) => {
  return (
    <LinearGradient
      colors={GRADIENTS[theme]}
      style={[styles.container, style]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppGradient;
