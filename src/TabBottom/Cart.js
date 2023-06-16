import AsyncStorage from "@react-native-async-storage/async-storage";
import react, { useState, useEffect, useContext } from "react";
import { Image, View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Alert } from "react-native";
import { COLORS, Items, } from "../compoments/DataFrom";

import { AntDesign, MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import Button from '../compoments/Button';
export default MyCart = ({ navigation }) => {

    const [isProducts, setIsProducts] = useState();
    const [isTotal, setIsTotal] = useState(0);
    const [isquantity, setquantity] = useState([]);




    useEffect(() => {

        const unsubscripbe = navigation.addListener('focus', () => {
            getDataFromDB();
            getTotal()

        })

        return unsubscripbe;

    }, [navigation])



    // lay du liệu tù loca DB theo ID
    const getDataFromDB = async () => {
        let items = await AsyncStorage.getItem('itemCart');
        items = JSON.parse(items)
        let productData = [];
        if (items) {
            Items.forEach(data => {
                if (items.includes(data.id)) {
                    productData.push(data)
                    return
                }
            });
            setIsProducts(productData)
        }
        else {
            setIsProducts(false)

        }
    }


    const getTotal = async () => {
        let items = await AsyncStorage.getItem('itemCart');
        items = JSON.parse(items)
        let productData = [];
        if (items) {
            Items.forEach(data => {
                if (items.includes(data.id)) {
                    productData.push(data)

                    for (let index = 0; index < productData.length; index++) {
                        const res = productData.reduce((prev, item) => {
                            return prev + (item.productsPrice * item.quantity);
                        }, 0)
                        setIsTotal(res)
                    }

                }
            });
        }

    }

    const reduction = (id) => {

        Items.forEach(data => {
            if (data.id === id) {

                quan = data.quantity === 1 ? data.quantity = 1 : data.quantity -= 1;
            }
            setquantity(quan)
        });

        getTotal()



    }
    const increase = id => {

        Items.forEach(data => {
            if (data.id === id) {
                quan = data.quantity += 1
            }

        });
        setquantity(quan)
        getTotal()

    }



    // xóa dữ liệu từ cart theo id
    const removeItemCart = async id => {

        let itemArray = await AsyncStorage.getItem('itemCart');
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
            let array = itemArray;
            for (let index = 0; index < array.length; index++) {
                if (array[index] == id) {
                    array.splice(index, 1);

                }
                await AsyncStorage.setItem('itemCart', JSON.stringify(array));
                getDataFromDB();
                getTotal()
            }


        }


    }



    const renderProduct = (data, index) => {

        return (
            <TouchableOpacity
                key={index}
                onPress={() => (navigation.navigate('ProductInfo', { ParamsID: data.id }))}
                style={{
                    width: '100%',
                    height: 100,
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>

                <View style={{
                    width: '30%',
                    height: '100%',
                    backgroundColor: COLORS.backgroudLight,
                    padding: 14,
                    justifyContent: 'center',
                    borderRadius: 7,
                    marginRight: 12,

                }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }} source={data.productsImage} />
                </View>
                <View style={{
                    flex: 1,

                    justifyContent: "space-around",

                }}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: COLORS.black,
                            letterSpacing: 1,
                        }}>{data.productsName}</Text>
                    </View>
                    <View style={{
                        marginTop: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        opacity: 0.6
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginRight: 4,
                            maxWidth: '85%',
                            color: 'red',

                        }}>&#8377;{data.productsPrice * data.quantity}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginRight: 4,

                        }}> (~&#8377;
                            {data.productsPrice + data.productsPrice / 20})</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 7
                        }}>
                            <TouchableOpacity

                                onPress={() => {
                                    reduction(data.id)
                                }}

                                style={{
                                    borderColor: COLORS.backgroudLight,
                                    borderWidth: 1,
                                    fontWeight: "bold",
                                    padding: 5,
                                    borderRadius: 6,
                                    marginRight: 20,
                                }}>
                                <AntDesign name="minus" style={{
                                    fontWeight: "bold",
                                    fontSize: 18,
                                }} />
                            </TouchableOpacity>
                            <Text>{data.quantity}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    increase(data.id)
                                }}
                                style={{
                                    backgroundColor: COLORS.backgroudLight,
                                    padding: 4,
                                    borderRadius: 6,
                                    marginLeft: 20,

                                }}>
                                <AntDesign name="minus" style={{
                                    fontWeight: "bold",
                                    fontSize: 18,
                                }} />
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            onPress={() => removeItemCart(data.id)}
                            style={{
                                backgroundColor: COLORS.backgroudLight,
                                padding: 7,
                                borderRadius: 100
                            }}>
                            <MaterialIcons name="delete-outline" size={24} color="red" />
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        )

    }
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
                backgroundColor: COLORS.white
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
                            backgroundColor: COLORS.backgroudLight,
                            borderRadius: 12
                        }}
                    >
                        <AntDesign name="left" style={{
                            fontSize: 18,
                            color: COLORS.backgroudDrak,
                            padding: 12,

                        }} />
                    </TouchableOpacity>
                    <Text>Order Details</Text>
                    <View></View>

                </View>
                <ScrollView>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        paddingLeft: 16,
                        paddingTop: 10,
                        letterSpacing: 1,
                        paddingBottom: 10,
                        color: COLORS.black

                    }}>MY CART</Text>
                    <View style={{ paddingHorizontal: 16 }}>
                        {isProducts ?
                            isProducts.map(renderProduct) : null
                        }
                    </View>
                    <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: COLORS.black,
                            letterSpacing: 1

                        }}>Delivery Location</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'

                        }}>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity style={{
                                    padding: 8,
                                    backgroundColor: COLORS.backgroudLight,
                                    borderRadius: 12,
                                    marginRight: 20,

                                }}>
                                    <MaterialCommunityIcons name="bike-fast" size={24} color="blue" />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: COLORS.black,
                                    }}>2 Peter Melikishvili St</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: COLORS.backgroudDrak,
                                        opacity: 0.5
                                    }}>0162******* luhanh</Text>
                                </View>
                            </View>

                            <Entypo name="chevron-right" style={{
                                fontSize: 24,
                                color: COLORS.backgroudDrak,
                            }} />

                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: COLORS.black,
                            letterSpacing: 1

                        }}>PeyMent Method</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',

                        }}>
                            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    padding: 8,
                                    backgroundColor: COLORS.backgroudLight,
                                    borderRadius: 12,
                                    marginRight: 20,

                                }}>
                                    <FontAwesome name="cc-visa" size={24} color="blue" />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: COLORS.black,
                                    }}>Vissa Classic</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: COLORS.backgroudDrak,
                                        opacity: 0.5
                                    }}>***** 098598</Text>
                                </View>
                            </View>

                            <Entypo name="chevron-right" style={{

                                fontSize: 24,
                                color: COLORS.backgroudDrak,
                            }} />

                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: COLORS.black,
                            letterSpacing: 1

                        }}>Order Info</Text>
                        <View style={{
                            paddingVertical: 10

                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                                <Text style={{ color: COLORS.backgroudDrak, fontSize: 16, opacity: 0.6 }}>ShobTotal</Text>
                                <Text style={{ color: 'red', fontSize: 16, opacity: 0.8 }}>&#8377; {isTotal}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                                <Text style={{ color: COLORS.backgroudDrak, fontSize: 16, opacity: 0.6 }}>Shopping Tax</Text>
                                <Text style={{ color: 'red', fontSize: 16, opacity: 0.8 }}>&#8377; {0}</Text>
                            </View>



                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    height: '8%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 16

                }}>
                    <TouchableOpacity
                        onPress={() => (navigation.navigate('CheckoutScreen',{ParamsTotal:isTotal}))}
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
                            fontWeight: '500',
                            letterSpacing: 1,
                            color: COLORS.white,
                            textTransform: 'uppercase'
                        }}>PAYMENT</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </SafeAreaView>

    )

}