import react, { useState } from 'react';
import { SafeAreaView, ScrollView, Keyboard, TouchableOpacity, StyleSheet, Text, View, Image, TextInput, TextInputBase, CheckBox, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

import Input from '../compoments/Input';
import Button from '../compoments/Button';
import Loaded from '../compoments/loaded';


const RegisterScreen = ({ navigation }) => {

  const [isInputs, setIsInputs] = useState({
    email: '',
    fullname: '',
    phonenumber: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [isloading, setIsLoading] = useState(false)

  const validate = () => {
    Keyboard.dismiss()
    let valid = true;
    if (!isInputs.email) {
      hangleError('Please input email', "email")
      valid = false

    }
    else if (!isInputs.email.match(/\S+@\S+\.\S+/)) {
      hangleError('rmai ko hợp lệ', "email")

      valid = false

    }
    if (!isInputs.fullname) {
      hangleError('Please input fullname', "fullname")
      valid = false

    }
    else if (isInputs.fullname.length < 6) {
      hangleError('Tên Của Bạn Phải Lớn hơn 6 ký Tự', "fullname")
      valid = false

    }
    if (!isInputs.phonenumber) {
      hangleError('Please input phonenumber', "phonenumber")
      valid = false

    }
    else if (isInputs.phonenumber.length == 10) {
      hangleError('số điện thoại ko hợp lệ', "phonenumber")
      valid = false

    }

    if (!isInputs.password) {
      hangleError('Please input password', "password")
      valid = false

    }
    else if (isInputs.password.length < 8) {
      hangleError('mật khẩu quá ngắn', "password")
      valid = false

    }

    if (valid) {
      register()
    }

  }

  const register = () => {
    setIsLoading(true);
    setTimeout(async () => {

      try {
        setIsLoading(false)
        AsyncStorage.setItem("user", JSON.stringify(isInputs))
        let users = await AsyncStorage.getItem('user')
        console.log(users);

        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'TIẾP TỤC',
          onHide: () => {
            navigation.navigate('LoginScreen');
          }
        })


      } catch (error) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'close',
        })
      }
    }, 2000)

  }

  const hangleOnchange = (text, input) => {
    setIsInputs(po => ({ ...po, [input]: text }));

  }
  const hangleError = (errorMsg, input) => {
    setErrors(err => ({ ...err, [input]: errorMsg }))

  }


  return (
    <AlertNotificationRoot>
      <SafeAreaView style={{ backgroundColor: 'black', flex: 1, position: 'relative' }}>
        <View style={{
          width:'100%',
          height:'100%',
          backgroundColor:'white'
        }}>
          <Loaded loading={isloading} />
          <ScrollView
            contentContainerStyle={{
              paddingTop: 50,
              paddingHorizontal: 20,
            }}>
            <View>
              <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>REGISTER</Text>
              <Text style={{ color: 'gray', fontSize: 18, marginVertical: 10 }}>Enter Your Details To Login</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Input
                label="Email"
                iconName='mail'
                placeholder="Enter Your Email"
                error={errors.email}
                onFocus={() => {
                  hangleError(null, "email")
                }}
                onChangeText={(text) => hangleOnchange(text, "email")}


              //  error='Email Ko Hợp Lệ'
              />
              <Input
                label="FullName"
                iconName='user'
                placeholder="Enter Your FullName"

                error={errors.fullname}
                onFocus={() => {
                  hangleError(null, "fullname")
                }}
                onChangeText={(text) => hangleOnchange(text, "fullname")}

              //  error='Email Ko Hợp Lệ'
              />
              <Input
                keyboardType="numeric"
                label="Phone Number"
                iconName='phone'
                placeholder="Enter Your Phone"
                error={errors.phonenumber}
                onFocus={() => {
                  hangleError(null, "phonenumber")
                }}
                onChangeText={(text) => hangleOnchange(text, "phonenumber")}


              //  error='Email Ko Hợp Lệ'
              />
              <Input
                label="PassWord"
                iconName='lock'
                placeholder="Enter Your PassWord"
                password
                error={errors.password}
                onFocus={() => {
                  hangleError(null, "password")
                }}
                onChangeText={(text) => hangleOnchange(text, "password")}
              //  error='PassWord Ko Hợp Lệ'
              />

            </View>
            <Button onPress={() => validate()} title="RIGISTER" />
            <Text

              onPress={() => navigation.navigate("LoginScreen")}

              style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: 600 }}>Already Have Acount? LOGIN</Text>

          </ScrollView>
        </View>
      </SafeAreaView>

    </AlertNotificationRoot>

  );
}



export default RegisterScreen