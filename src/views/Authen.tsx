import React from "react"
import { Alert, Linking, StyleSheet, Text, View } from "react-native"
import { commonStyle } from "../assets/styles"
import CustomButton from "../components/CustomButton"

const Authen = () => {


  const connect = async () => {
    const url = 'https://www.baidu.com'

    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    }
  }
  
  const restart = () => { }
  
  const style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#03a9f4",
      alignItems: "center",
      justifyContent: 'space-between',
      padding: 20,
    },
    subTitle: {
      color: '#fff',
      marginBottom: 20
    }
  })
  
  return (
    <View style={style.main}>
      <Text style={commonStyle.h2}>身份验证</Text>

      <View>
        <Text style={style.subTitle}>
          我们现在可以连接到您的Home Assistant并进行初始身份验证。点击下面的“连接”按钮将打开浏览器以便您登录。
        </Text>
        <CustomButton text="连接" onPress={connect} />
      </View>

      <CustomButton text="重新开始" onPress={restart} />
    </View>
  )
}

export default Authen