import react from "react";
import { Text, TouchableOpacity } from "react-native";
const Button = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{

                backgroundColor: 'blue',
                width: '100%',
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',

            }
            }


        >
            <Text style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold'
            }}>{title}</Text>
        </TouchableOpacity>
        
    )


}

export default Button;