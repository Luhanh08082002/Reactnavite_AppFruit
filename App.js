import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Hello from './src/Hello';
import Flast from './src/Flat';
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import ProductInfo from './src/screens/ProductInfo'
import MyCart from './src/screens/MyCart'
import CheckoutScreen from './src/screens/CheckoutScreen'
import Order_completedScreen from './src/screens/Order_completedScreen'
import { NavigationContainer } from '@react-navigation/native';
import Tab_Bottom from './src/screens/Tab_Bottom'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Tab_Bottom'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} />
        <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} />
        <Stack.Screen name='Order_completedScreen' component={Order_completedScreen} />
        {/* <Stack.Screen name='MyCart' component={MyCart} /> */}
        <Stack.Screen name={'Tab_Bottom'} component={Tab_Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
