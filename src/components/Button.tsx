import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../theme/styles';

interface Props {
  text: string;
  color?: string;
  onPress: () => void;
}

export const Button = ({ text, color = '#2D2D2D', onPress }: Props) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ ...globalStyles.button, backgroundColor: color }}
    >
      <Text style={globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};