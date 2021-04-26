import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { commonStyle } from "../assets/styles"
import CustomButton from "../components/CustomButton"

const SetNetwork = ({navigation}) => {
  const [url, setUrl] = React.useState('')

  const onPress = () => navigation.navigate('Authen')

  const style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#03a9f4",
      alignItems: "center",
      padding: 20,
    },
    container: {
      alignItems: 'center',
      flex: 0.5,
    },
    subTitle: {
      color: '#fff',
      marginTop: 10
    },
    inputContainer: {
      flexDirection: 'row'
    },
    input: {
      backgroundColor: '#fff',
      flex: 1,
      marginBottom: 20,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 10,
      paddingRight: 10,
    }
  })

  return (
    <View style={style.main}>
      <View style={style.container}>
        <Text style={commonStyle.h2}>手动配置</Text>
        <Text style={style.subTitle}>清输入您的主页助理网址以继续。它必须是格式为“http://homeassistant.local:8123”的正确格式化的URL（即包含方案/协议，主机名和端口）</Text>
      </View>
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput style={style.input} placeholder="e.g http://homeassistant.local:8123" value={url} onChangeText={setUrl} />
        </View>
        <CustomButton text="连接" onPress={onPress} />
      </View>
    </View>
  )
}

export default SetNetwork