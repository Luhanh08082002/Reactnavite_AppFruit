import react, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons, EvilIcons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';




const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props
}) => {


    const [isFocused, setIsFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(password)
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[style.inputContainer,
                {
                    borderColor: error
                        ? 'red'
                        : isFocused
                            ? "darkblue"
                            : 'light',
                },
                ]} >
                <Entypo name={iconName} size={24} color="darkblue" style={{ marginRight: 10 }} />
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}//bỏ gạch chân dưới dòng chữ
                    style={style.textInput} {...props}

                    onFocus={() => {
                        onFocus();
                        setIsFocused(true)
                    }}

                    onBlur={() => {
                        setIsFocused(false)
                    }

                    }
                />
                {password && (<Entypo
                    onPress={() => setHidePassword(!hidePassword)}
                    name={hidePassword ? 'eye' : 'eye-with-line'} size={20} color="darkblue" style={{ marginRight: 10 }}
                />)}


            </View>
            {error && (
                <Text style={{ color: 'red', fontSize: 15, marginTop: 7, fontWeight: 400 }}>
                    {error}
                </Text>
            )}

        </View>
    )

}

export default Input;

const style = StyleSheet.create({
    label: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold'


    },
    inputContainer: {
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'darkblue',
        padding: 10,

    },
    textInput: {

        flex: 1,
        fontSize: 22,
        color: 'darkblue'
    }


})