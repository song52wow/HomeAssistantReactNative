import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyle } from "../assets/styles";
import CustomButton from "../components/CustomButton";

const Welcome = ({ navigation }) => {
  const [count, setCount] = useState(0);

  // const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress = () => navigation.navigate("ScanNetwork");

  const style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#03a9f4",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20
    }
  });

  return (
    <View style={style.main}>
      <Text style={commonStyle.h2}>欢迎来到Home Assistant 应用!</Text>
      <Text>{count}</Text>

      <CustomButton text="继续" onPress={onPress} />
    </View>
  );
};

export default Welcome;
