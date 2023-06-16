import react from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { COLORS } from "../compoments/DataFrom";
import { AntDesign, Ionicons, Fontisto, Entypo, FontAwesome } from '@expo/vector-icons';


export default CheckoutScreen = ({ route, navigation })=>{
    
  
        const {ParamsTotal} = route.params
     
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'black',
            }}>
                <StatusBar color='black' />
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: COLORS.backgroudLight
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                        paddingLeft: 16,
                    }}>
                        <TouchableOpacity
                            onPress={() => (navigation.goBack())}
                            style={{
                                backgroundColor: COLORS.white,
                                borderRadius: 12
                            }}
                        >
                            <AntDesign name="left" style={{
                                fontSize: 18,
                                color: COLORS.backgroudDrak,
                                padding: 12,

                            }} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: '600',
                            color: COLORS.black,
                            textAlign: "center"
                        }}>Delivery</Text>
                        <TouchableOpacity style={{
                            padding: 7,
                            backgroundColor: COLORS.white,
                            borderRadius: 12,
                            marginRight: 16,
                        }}>
                            <Entypo name="dots-three-vertical" style={{ fontSize: 24, color: COLORS.backgroudDrak }} />
                        </TouchableOpacity>


                    </View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        paddingLeft: 16,
                        paddingTop: 10,
                        letterSpacing: 1,
                        paddingBottom: 10,
                        color: COLORS.black

                    }}>Addrees</Text>

                    <View style={{ marginHorizontal: 16 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: "space-between",
                                alignItems: 'center',
                                backgroundColor: COLORS.white,
                                padding: 20,
                                borderRadius: 12

                            }}>
                            <View style={{
                                width: '80%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: COLORS.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                    marginBottom: 5

                                }}>Addrees 1</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: COLORS.backgroudDrak,
                                        opacity: 0.7

                                    }}>115 Phan Bôi 1 , Phường An Hải Bắc , quận SƠn Trà , Tp Đà Nẵng</Text>
                            </View>
                            <View>
                                <AntDesign name="checkcircle" size={34} color="green" />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.backgroudMedium,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginVertical: 30,
                            borderRadius: 12,
                            opacity: 0.6
                        }}>
                            <Text style={{ opacity: 1, fontSize: 16, color: COLORS.black }}>
                                Add Address
                            </Text>
                            <TouchableOpacity
                                style={{
                                    borderColor: COLORS.backgroudDrak,
                                    borderWidth: 1,
                                    borderRadius: 12,
                                    padding: 3,


                                }}>
                                <Ionicons name="add" style={{ fontSize: 24, color: COLORS.backgroudMedium }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        paddingLeft: 16,
                        paddingTop: 10,
                        letterSpacing: 1,
                        paddingBottom: 10,
                        color: COLORS.black

                    }}>Payment Method</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        <View
                            style={{
                                flexDirection: 'row',

                                alignItems: 'center',
                                backgroundColor: COLORS.white,
                                padding: 10,
                                borderRadius: 12

                            }}>
                            <View style={{
                                padding: 10
                            }}>
                                <Fontisto name="visa" size={44} color="blue" />
                            </View>
                            <View style={{
                                paddingLeft: 20,

                            }}>
                                <Text style={{ fontSize: 18, color: COLORS.black, letterSpacing: 1, marginBottom: 6 }}>Credid Cart</Text>
                                <Text style={{ fontSize: 16, color: COLORS.backgroudDrak, letterSpacing: 1, opacity: 0.7, }}>
                                    **** **** **** 0808
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
                            <Text style={{ fontSize: 18, color: COLORS.backgroudMedium, fontWeight: '500' }}>SubTotal</Text>
                            <Text style={{ fontSize: 18, }}>&#8377; {ParamsTotal}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderColor: COLORS.backgroudDrak, borderBottomWidth: 1, paddingBottom: 13 }}>
                            <Text style={{ fontSize: 18, color: COLORS.backgroudMedium, fontWeight: '500' }}>Shopping Tax</Text>
                            <Text style={{ fontSize: 18, }}>{Math.round((ParamsTotal *10) / 100)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
                            <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', letterSpacing: 1 }}>Total</Text>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'red' }}>&#8377; {ParamsTotal + Math.round((ParamsTotal *10) / 100)}</Text>
                        </View>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                        height: '8%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 16

                    }}>
                        <TouchableOpacity
                            onPress={() => ( navigation.navigate('Order_completedScreen'))}
                            style={{
                                width: '80%',
                                height: '90%',
                                backgroundColor: COLORS.blue,
                                borderRadius: 12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                letterSpacing: 1,
                                color: COLORS.white,
                                textTransform: 'uppercase'
                            }}>PAY NOW</Text>
                        </TouchableOpacity>
                    </View>




                </View>
            </SafeAreaView>
        )

}