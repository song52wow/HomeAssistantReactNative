import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { commonStyle } from "../assets/styles";
import CustomButton from "../components/CustomButton";

const ScanNetwork = ({navigation}) => {

  const style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#03a9f4",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
    }
  });

  const onPress = () => navigation.navigate('SetNetwork')

  return (
    <View style={style.main}>
      <Text style={commonStyle.h2}>扫描您的网络中的Home Assistant!</Text>
      <Text>Image</Text>

      <CustomButton text="手动输入地址" onPress={onPress} />
    </View>
  )
}


export default ScanNetwork