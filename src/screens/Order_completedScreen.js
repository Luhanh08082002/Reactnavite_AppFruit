

import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from "react-native";
import { COLORS } from "../compoments/DataFrom";

export default Order_completed = ({ navigation }) => {
    
    const successful_purchase = ()=>{

    }
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'black',
        }}>
            <StatusBar color='black' />
            <View style={{
                width: "100%",
                height: '100%',
                backgroundColor: COLORS.white,
                paddingHorizontal: 16,
                justifyContent:'center',
                alignItems:'center'
          
               
            }}>
                <View style={{
                  flexDirection:"column",
                    alignItems: 'center'
                }}>
                    <Text style={{ alignContent: 'center',fontSize:28,fontWeight:'500',letterSpacing:1.5,color:COLORS.black }}>Order Completed</Text>
                        <Image style={{width:150 , height:150,resizeMode:'contain',marginVertical:30,}} source={require('../../assets/images/hoaquacam.png')} />
                    <Text style={{
                        width:'80%',
                        alignItems:'center',
                        color:COLORS.backgroudDrak,
                        fontSize:20,
                        textAlign: 'center',
                        letterSpacing:0.7,

                
                    }}>Thank you for your purchase .{'\n'} You can view your order in the {'\n'} "My Order " Section</Text>
                </View>
                <TouchableOpacity

                onPress={()=>successful_purchase()}
                    style={{
                        width: '80%',
                        paddingHorizontal: 18,
                    
                        paddingVertical: 15,
                        backgroundColor:COLORS.backgroudLight,
                        borderRadius:12,
                        position:'absolute',
                        bottom:30,
                        alignItems:'center',
                        

                    }}>
                    <Text style={{fontSize:24,fontWeight:'bold',}}>View Order</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}