import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from "@react-native-async-storage/async-storage"
import react, { useState, useEffect } from "react"
import { StatusBar, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import Button from '../compoments/Button';
import Input from '../compoments/Input';
import { COLORS, Items } from "../compoments/DataFrom";

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { TextInput } from "react-native-gesture-handler";

const Home = ({ navigation, props }) => {

    const [isUserData, setIsUserData] = useState({})
    const [isproducts, setIsProducts] = useState([])
    const [isAccessory, setIsAccessory] = useState([])

    react.useEffect(() => {
        getUserData();
        getDataFromDB();
    }, [])

    const getDataFromDB = () => {
        let productsList = [];
        let accessoryLisst = []

        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == "product") {
                productsList.push(Items[index])
            } else if (Items[index].category == "accessory") {
                accessoryLisst.push(Items[index]);

            }
            setIsProducts(productsList);
            setIsAccessory(accessoryLisst)

        }
    }
    const ProductCart = ({ data, index }) => {
        return (

            <TouchableOpacity onPress={() => navigation.navigate('ProductInfo', { ParamsID: data.id })} style={{ position: 'relative', width: '45%', backgroundColor: 'white', marginBottom: 13, borderRadius: 6, shadowRadius: 30, shadowOpacity: (0.2) }}>
                <Text style={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    top: 5,
                    borderRadius: 10,
                    zIndex: 10, paddingVertical: 2, paddingHorizontal: 15, backgroundColor: 'blue'
                }} {...props}>10 %</Text>
                <View style={{ width: '100%', height: 150, borderTopLeftRadius: 6, borderTopRightRadius: 6, padding: 15 }}>
                    <Image resizeMode="stretch" source={data.productsImage} style={{ width: "100%", height: '100%', borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                </View>
                <Text style={{ color: "black", padding: 5, fontSize: 16, fontWeight: 600 }}>{data.productsName}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, paddingLeft: 5 }}>
                    <Text style={{ color: "gray", fontSize: 15, fontWeight: "bold", textDecorationLine: 'line-through' }}>${data.productsPrice}</Text>
                    <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>${data.productsPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, paddingLeft: 5 }}>
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="staro" size={16} color="black" />
                    <AntDesign name="staro" size={16} color="black" />
                </View>


            </TouchableOpacity>
        )



        // <Text>
        //     {data.productsName}
        // </Text>

    }


    const getUserData = async () => {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
            setIsUserData(JSON.parse(userData))

        }
    }

    const Logout = () => {
        AsyncStorage.setItem('user', JSON.stringify({ ...isUserData, loginUser: false }))
        navigation.navigate("LoginScreen")

    }



    return (

        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'black',
        }}>
            <StatusBar color='black' />
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 12, alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: COLORS.backgroudLight,
                            borderRadius: 12,
                        }}>
                        <Entypo
                            style={{
                                fontSize: 30,
                                color: COLORS.backgroudDrak,

                            }}
                            name="menu" />
                    </TouchableOpacity>

                    <Text style={{ marginLeft: -150, fontSize: 30, color: 'white', fontWeight: 'bold' }}>
                        LUHANH
                    </Text>
                    <TouchableOpacity style={{}}>
                        <FontAwesome name="bell-o"
                            style={{
                                fontSize: 25,
                                padding: 7,
                                color: COLORS.backgroudMedium,

                            }} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        alignItems: "center",
                        flexDirection: 'row',
                        flex: 1,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'darkblue',
                        padding: 10,
                        marginLeft: 10,
                        backgroundColor: 'white'
                    }}>
                        <FontAwesome name="search" style={{ fontSize: 20, color: COLORS.backgroudDrak }} />
                        <TextInput placeholder="TÌm Kiếm Tậy" style={{ flex: 1, paddingLeft: 10, }} {...props}>

                        </TextInput>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{}}>
                        <Entypo name="shopping-cart" style={{
                            fontSize: 25,
                            padding: 7,
                            color: 'blue',
                            marginLeft: 20

                        }} />

                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView style={{ backgroundColor: '#f6f5f5' }}>

                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>ProDucts</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', opacity: 0.5, marginLeft: 10 }}>25</Text>
                    </View>
                    <Text style={{ color: "blue", fontSize: 14, fontWeight: 500 }}>SeeAll</Text>

                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row', width: '100%', paddingVertical: 10, paddingHorizontal: 16, }}>
                    {isproducts.map((data, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate('ProductInfo', { ParamsID: data.id })}
                                style={{
                                    width: 120,
                                    backgroundColor: 'white',
                                    marginRight: 13, borderRadius: 6, shadowRadius: 30, shadowOpacity: (0.2)
                                }}>
                                <Text style={{
                                    position: 'absolute',
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    top: 5,
                                    borderRadius: 10,
                                    zIndex: 10, paddingVertical: 2, paddingHorizontal: 15, backgroundColor: 'blue'
                                }} {...props}>10 %</Text>
                                <View style={{ width: '100%', height: 100, borderTopLeftRadius: 6, borderTopRightRadius: 6, padding: 15 }}>
                                    <Image resizeMode="stretch" source={data.productsImage} style={{ width: "100%", height: '100%', borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                                </View>
                                <Text style={{
                                    color: "black",
                                    padding: 5,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    height: 40,

                                }}>{data.productsName}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, paddingLeft: 5 }}>

                                    <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>${data.productsPrice}</Text>
                                </View>
                            </TouchableOpacity>
                        )

                    })
                    }
                </ScrollView>

                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Accessory</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', opacity: 0.5, marginLeft: 10 }}>41</Text>
                    </View>
                    <Text style={{ color: "blue", fontSize: 14, fontWeight: 500 }}>SeeAll</Text>

                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-evenly", width: '100%', padding: 5 }}>
                    {isAccessory.map((data, index) => {
                        return <ProductCart data={data} key={index} />
                    })}
                </View>





            </ScrollView>

        </SafeAreaView>





    )


}

export default Home;

const style = StyleSheet.create({
    container: {

    }
})