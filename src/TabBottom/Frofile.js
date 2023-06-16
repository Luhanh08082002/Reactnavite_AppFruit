import AsyncStorage from "@react-native-async-storage/async-storage";
import react, { useState, useEffect, useContext } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar, Button, ScrollView, Alert } from "react-native";
import { COLORS, Items,listActivite,listItemUser } from "../compoments/DataFrom";

import { Feather, AntDesign, FontAwesome, MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, Fontisto } from '@expo/vector-icons';

export default Frofile = ({ navigation }) => {







    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#1877f2',

        }}>
            <StatusBar color='black' />
            <View style={{ height: 50 }}>

            </View>
            <ScrollView style={{
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.white,


            }}>
                <View style={{
                    width: '100%',
                    height: 210,
                    alignItems: 'center',
                    marginBottom: 10,
                }}>

                    <View style={{
                        width: '100%',
                        backgroundColor: '#1877f2',
                        height: 150,
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: 40,
                    }}></View>
                    <View style={style.frofile_user} >
                        <View
                            style={{
                                padding: 10,
                                flexDirection: 'row',

                            }}>
                            <Image style={style.user_img} source={require('../../assets/usern.png')} />
                            <View style={{ paddingHorizontal: 14 }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', }}>Chào Mừng Bạn Đến Với LuHanh !</Text>
                                <TouchableOpacity 

                                onPress={()=>navigation.navigate('LoginScreen')}
                                style={{
                                    width: '85%',
                                    padding: 12,
                                    marginTop: 10,
                                    borderColor: 'blue',
                                    borderWidth: 2,
                                    borderRadius: 7,
                                }}>
                                    <Text style={{ fontSize: 17, fontWeight: '500', color: 'blue',textAlign:'center' }}>đăng nhập / Đăng Ký</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10 }}>
                            <View style={{ padding: 5, backgroundColor: COLORS.backgroudLight, borderRadius: 12, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginRight: 10, fontSize: 14, color: COLORS.backgroudDrak }}>Astra</Text>
                                    <TouchableOpacity >
                                        <Entypo name="eye" style={{ color: COLORS.backgroudDrak }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    alignItems: 'center',
                                    marginTop: 4,
                                }}>
                                    <Text style={{ marginRight: 28, }}>Tìm Thêm</Text>
                                    <Entypo name="home" />
                                </View>

                            </View>
                            <View style={{ padding: 5, backgroundColor: 'yellow', borderRadius: 12, opacity: 0.5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginRight: 10, fontSize: 14, color: COLORS.backgroudDrak }}>Xu</Text>
                                    <TouchableOpacity >
                                        <Entypo name="eye" style={{ color: COLORS.backgroudDrak }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    alignItems: 'center',
                                    marginTop: 4,
                                }}>
                                    <Text style={{ marginRight: 28, }}>Tìm Thêm</Text>
                                    <Entypo name="home" />
                                </View>

                            </View>
                            <View style={{ padding: 5, backgroundColor: COLORS.backgroudLight, borderRadius: 12, }}>
                                <View >
                                    <Text style={{ marginRight: 10, fontSize: 14, color: COLORS.backgroudDrak }}>Mã Giảm Giá</Text>

                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    alignItems: 'center',
                                    marginTop: 4,
                                }}>
                                    <Text style={{ marginRight: 28, }}>Tìm Thêm</Text>
                                    <Entypo name="home" />
                                </View>

                            </View>

                        </View>

                    </View>
                </View>

                {/* bottom */}

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.backgroudDrak
                        }}>Đơn Hàng Của Tôi</Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                    <View style={{ width: '100%', marginTop: 10, height: 100, flexDirection: 'row', justifyContent: 'space-between' }} >
                        {
                            listActivite.map((data, index) => {
                                return (
                                    <View key={index} style={{ maxWidth: 80, alignItems: 'center' }}>
                                        <TouchableOpacity style={{ borderRadius: 100, backgroundColor: COLORS.blue + 10 }}>
                                            <Ionicons name={data.icon} style={{ alignItems: 'center', alignContent: 'center', fontSize: 34, padding: 10, color: '#1877f2' }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 10, fontWeight: '500', textAlign: 'center', marginTop: 5 }}>{data.name}</Text>
                                    </View>

                                )
                            })
                        }

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.backgroudDrak
                        }}>Đánh Giá Sản Phẩm </Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                    {/* quann tam */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.backgroudDrak
                        }}>Quan Tâm</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: COLORS.green + 10, borderRadius: 20, alignItems: 'center' }}>
                                <Entypo name="eye" style={{ color: COLORS.green, fontSize: 30, padding: 15, }} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', marginTop: 7 }}>Đã Xem</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: COLORS.red + 10, borderRadius: 20, alignItems: 'center' }}>
                                <MaterialIcons name="favorite" style={{ color: COLORS.red, fontSize: 30, padding: 15, }} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', marginTop: 7 }}>Yêu Thích</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: COLORS.yellow + 10, borderRadius: 20, alignItems: 'center' }}>
                                <Fontisto name="shopping-bag-1" style={{ color: COLORS.yellow, fontSize: 30, padding: 15, }} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', marginTop: 7 }}>Mua Lại</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: COLORS.blue + 10, borderRadius: 20, alignItems: 'center' }}>
                                <MaterialCommunityIcons name="monitor" style={{ color: COLORS.blue, fontSize: 30, padding: 15, }} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', marginTop: 7 }}>Theo Dõi</Text>
                        </View>
                    </View>


                </View>
                <View style={{ paddingHorizontal: 16, paddingVertical: 20, }}>

                    {
                        listItemUser.map((data, index) => {
                            return (
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderTopWidth: 0.2 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <FontAwesome name={data.icon1}  color={data.color} style={{fontSize: 18, marginRight: 10 }} />
                
                                        <Text style={{ color: COLORS.backgroudDrak, fontSize: 16, fontWeight: 'bold', }}>{data.name}</Text>
                                    </View>
                
                                    <Entypo name={data.icon2} size={24} color="black" />
                
                                </TouchableOpacity>
                
                            )
                        })
                    }
                </View>


            </ScrollView>
        </SafeAreaView >

    )

}

const style = StyleSheet.create({
    frofile_user: {
        backgroundColor: COLORS.white,
        height: 170,
        width: '93%',
        position: 'absolute',
        borderColor: 'gray',
        borderWidth: 1,
        bottom: 10,
        borderRadius: 15,

    },
    user_img: {
        height: 80,
        width: 80,
        resizeMode: "contain",
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 100

    }

})