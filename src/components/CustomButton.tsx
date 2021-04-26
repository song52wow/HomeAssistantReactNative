import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton: React.FC<{
  text: string;
  onPress: Function;
}> = props => {
  const style = StyleSheet.create({
    button: {
      backgroundColor: "#ffffff",
      paddingLeft: 10,
      paddingRight: 10,
      height: 40,
      borderRadius: 4,
      fontSize: 12,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#03a9f4"
    }
  });

  return (
    <TouchableOpacity activeOpacity={0.8} style={style.button} onPress={(evt) => props.onPress(evt)}>
      <Text style={style.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
