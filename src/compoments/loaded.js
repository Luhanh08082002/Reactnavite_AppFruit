import react from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native'


const Loaded = ({ loading = false }) => {
    const { height, width } = useWindowDimensions();
    return (
        loading &&
        (
            <View style={[style.loaded, { height, width }]}>
                <View style={style.listLoaded}>
                    <ActivityIndicator style={style.iconLoaded} size="large" color="#00ff00" />
                    <Text style={style.titleLoaded}>Loading...</Text>
                </View>
            </View>
        )
    )
}


const style = StyleSheet.create({
    loaded: {
        zIndex: 10,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLoaded: {
        padding: 12,
        backgroundColor: '#555',
        borderRadius: 12
    },


    listLoaded: {

        alignContent: 'center',
        alignItems: 'center'

    },
    titleLoaded: {
        color: 'white',
        fontSize: 24,

    }
})

export default Loaded;