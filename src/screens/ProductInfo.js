import react, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, FlatList, Image, Dimensions, Animated, ToastAndroid } from "react-native";
import { Items, COLORS } from "../compoments/DataFrom";
import { Entypo, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ProductInfo = ({ route, navigation }) => {



    const { ParamsID } = route.params
    const [productInfo, setProductInfo] = useState({})

    const width = Dimensions.get('window').width
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width)
    useEffect(() => {
        getDataFromDB()

    }, [])

    const getDataFromDB =  () => {
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].id == ParamsID) {
                 setProductInfo(Items[index])
                return;
            }
        }

    }

    const renderProductId = ({ item, index }) => {
        return (
            <View style={{
                width: width,
                height: 240,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,

            }}>
                <Image source={item} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                }} />
            </View>
        )

    }


    const addToCart = async (id) => {
        let itemArray = await AsyncStorage.getItem("itemCart");
        itemArray = JSON.parse(itemArray)

        if (itemArray) {
            let array = itemArray;
            array.push(id)
            try {
                await AsyncStorage.setItem("itemCart", JSON.stringify(array))


                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Item added Succeesfully to Cart',
                    onHide:()=>{
                         navigation.navigate('Home')
                    }

                })

               



            } catch (error) {
                return error
            }
            //    const  dataCart = await AsyncStorage.setItem("itemCart", id)
            //    console.log(itemCart)
        } else {
            let array = [];
            array.push(id)
            try {
                await AsyncStorage.setItem("itemCart", JSON.stringify(array))
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Item added Succeesfully to Cart',
                })
                // ToastAndroid.show('Item added Succeesfully to Cart', ToastAndroid.SHORT,);
                navigation.navigate('HomeScreen')
                console.log(array)
            } catch (error) {
                return error

            }
        }

    }

    return (
        <AlertNotificationRoot>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                position: 'relative',
            }}>
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <View style={{
                        backgroundColor: COLORS.backgroudLight,
                        width: '100%',
                        height: 70,
                        paddingTop: 25,
                        paddingLeft: 19

                    }}>
                        <View style={{
                            width: "100%",
                            flexDirection: 'row',

                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{
                                    backgroundColor: COLORS.white,
                                    borderRadius: 15

                                }} >
                                <AntDesign name="left" style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    flexDirection: 'row',
                                    borderRadius: 12,
                                    padding: 10,

                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        style={{
                            backgroundColor: COLORS.backgroudLight
                        }}
                        data={productInfo.producstImageList ? productInfo.producstImageList : null}
                        horizontal
                        renderItem={renderProductId}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0.8}
                        snapToInterval={width}
                        bounces={false}
                        onScroll={Animated.event(
                            [{
                                nativeEvent: { contentOffset: { x: scrollX } }
                            }],
                            { useNativeDriver: false },

                        )}
                    />
                    <View style={{
                        width: '100%',
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                        marginTop: 32,

                    }}>
                        {
                            productInfo.producstImageList ?
                                productInfo.producstImageList.map((data, index) => {

                                    let opacity = position.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: [0.2, 1, 0.2],
                                        extrapolate: 'clamp'
                                    })
                                    return (
                                        <Animated.Text

                                            key={index}
                                            style={{
                                                width: '16%',
                                                height: 3,
                                                backgroundColor: 'black',
                                                opacity,
                                                marginHorizontal: 4,
                                                borderRadius: 100,
                                            }}> </Animated.Text>
                                    )

                                }) : null
                        }

                    </View>

                    <View style={{ paddingHorizontal: 16, marginTop: 6 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 14, }}>
                            <Entypo name="shopping-cart"
                                style={{
                                    fontSize: 18,
                                    color: 'blue',
                                    marginRight: 6

                                }} />
                            <Text style={{ fontSize: 14, color: 'black' }}>
                                Shopping
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 4, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{
                                width: '84%',
                                fontSize: 24,
                                fontWeight: 600,
                                marginVertical: 4,
                                letterSpacing: 0.5,
                                color: 'black'
                            }}>{productInfo.productsName}</Text>
                            <Ionicons name="link-outline" style={{
                                fontSize: 24,
                                color: 'blue',

                                backgroundColor: COLORS.blue + 10,
                                padding: 8,
                                borderRadius: 100,
                            }} />
                        </View>
                        <Text style={{
                            letterSpacing: 0.5,
                            opacity: 0.5,
                            lineHeight: 20,
                            maxWidth: "84%",
                            maxHeight: 44,
                            marginBottom: 18,
                        }}>
                            {productInfo.description}
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: "space-between",
                            marginVertical: 14,
                            borderBottomColor: COLORS.backgroudLight,
                            borderBottomWidth: 1,
                            paddingBottom: 20,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '80%',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    color: COLORS.blue,
                                    backgroundColor: COLORS.backgroudLight,
                                    alignItems: 'center',
                                    padding: 12,
                                    borderRadius: 100,
                                    marginRight: 10,
                                }}>
                                    <Entypo name="location-pin" style={{
                                        fontSize: 16,
                                        color: COLORS.blue,
                                    }} />
                                </View>
                                <Text>Rustaveli Ave 15 , {'\n'} 17-002 , Batume</Text>
                            </View>
                            <Entypo name="chevron-right" style={{
                                fontSize: 24,
                                color: COLORS.backgroudDrak,
                            }} />
                        </View>
                        <View style={{
                            paddingHorizontal: 16
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500',
                                maxWidth: '85%',
                                color: COLORS.black,
                                marginBottom: 4,
                            }}>
                                &#8377; {productInfo.productsPrice}.00
                            </Text>

                            <Text>
                                Tax Rate 2% &#8377; {productInfo.productsPrice / 20} (&#8377;
                                {productInfo.productsPrice + productInfo.productsPrice / 20})
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    position: 'absolute',
                    bottom: 10,
                    height: '8%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <TouchableOpacity
                        onPress={() => (productInfo.isAvailable ? addToCart(productInfo.id) : null)}
                        style={{
                            width: '80%',
                            height: '90%',
                            backgroundColor: COLORS.blue,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                            letterSpacing: 1,
                            color: COLORS.white,
                            textTransform: 'uppercase'
                        }}>{productInfo.isAvailable ? 'Add To Cart' : 'Not Avialable'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AlertNotificationRoot>

    )
}