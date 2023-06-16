import react, { useState } from 'react';
import { SafeAreaView, ScrollView, Keyboard, TouchableOpacity, StyleSheet, Text, View, Image, TextInput, TextInputBase, CheckBox, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

import Input from '../compoments/Input';
import Button from '../compoments/Button';
import Loaded from '../compoments/loaded';
import { COLORS } from '../compoments/DataFrom';


const LoginScreen = ({ navigation }) => {

  const [isinput, setIsinput] = useState({
    email: "",
    password: ''
  })
  const [err, setErr] = useState({})
  const [loading, setloading] = useState(false)



  const validate = () => {
    Keyboard.dismiss()
    let valid = true;
    if (!isinput.email.length) {
      hangleErr("Email ko được bỏ trống", "email")
      valid = false;
    }
    if (!isinput.password.length) {
      hangleErr("password ko được bỏ trống", "password")
      valid = false;
    }
    if (valid) {
      login();
    }

  }

  const login = () => {
    setloading(true)
    setTimeout(async () => {
      setloading(false)
      let userData = await AsyncStorage.getItem('user')
      if (userData) {
        userData = JSON.parse(userData);

        if (isinput.email === userData.email && isinput.password === userData.password) {
          AsyncStorage.setItem('user', JSON.stringify({ ...userData, loginUser: true }))

          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Bạn Đã Đăng Nhập Thành Công !',
            button: 'TIẾP TỤC',
            onHide: () => {
              navigation.navigate("HomeScreen")
            }
          })




        } else {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: 'Email Hoặc Password không Dúng',
            button: 'close',
          });

        }

      }
      else {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Error',
          textBody: 'người Dùng Không Tồn Tại !',
          button: 'close',
        })

      }
    }, 2000)


  }
  const hangleonChange = (text, input) => {
    setIsinput((val) => ({ ...val, [input]: text }));

  }
  const hangleErr = (errMsg, input) => {
    setErr((val) => ({ ...val, [input]: errMsg }));
  }


  return (
    <AlertNotificationRoot>
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',

      }}>
        <View style={{
          width: '100%',
          height: "100%",
          backgroundColor: "white"
        }}>
          <Loaded loading={loading} />

          <View style={{width:'100%', height:200, position: 'relative',alignItems:'center'}}
          >
            <View style={{
             width:'100%',
              height: 150, backgroundColor: 'blue',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              alignItems: 'center'
            }}>
            </View>
            <View style={{ height: 150, backgroundColor: COLORS.backgroudLight, position: "absolute", width: '90%', bottom: 0, borderRadius: 12, borderColor: COLORS.backgroudLight, borderWidth: 1 ,textAlign:'center',padding:20}}>
              <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>LOGIN</Text>
              <Text style={{ color: 'gray', fontSize: 18, marginVertical: 10 }}>Enter Your Details To Login</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 16 }}>
            <View style={{ marginVertical: 20 }}>
              <Input
                label="Email"
                iconName='mail'
                placeholder="Enter Your Email"
                error={err.email}
                onFocus={() => {
                  hangleErr(null, "email")
                }}
                onChangeText={(text) =>
                  hangleonChange(text, "email")
                }

              //  error='Email Ko Hợp Lệ'
              />
              <Input
                label="PassWord"
                iconName='lock'
                placeholder="Enter Your PassWord"
                password
                error={err.password}
                onFocus={() => {
                  hangleErr(null, "password")
                }}
                onChangeText={(text) => hangleonChange(text, "password")}


              />

            </View>
            <Button onPress={() => validate()} title="LOGIN" />
            <Text
              onPress={() => navigation.navigate("RegisterScreen")}
              style={{ marginTop: 20, textAlign: 'center', color: 'black', fontSize: 16, fontWeight: 600, }}>Already Have Acount? LOGIN</Text>

          </View>



        </View>




      </SafeAreaView>
    </AlertNotificationRoot>
  );
}



export default LoginScreen