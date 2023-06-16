import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

import Home from '../TabBottom/Home';

import Cart from '../TabBottom/Cart';
import Frofile from '../TabBottom/Frofile';
import MyList from '../TabBottom/MyList';
// import { Entypo, AntDesign, FontAwesome ,Ionicons} from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function Tab_Bottom() {

  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: '#F14506',
      //   inactiveTintColor: '#000',
       
      // }}
      screenOptions={({ route }) => ({
        tabBarShowLabel:false,
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          // color = focused ? 'blue' : '#777777'
          // size =focused ? '30' : '26'
          if (route.name === "Home") {
            iconName = focused ? 'home' : 'home-outline';

          } else if (route.name === "Cart") {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if (route.name === "MyList") {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === "Frofile") {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />

        }

      }
      )}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='MyList' component={MyList} />
      <Tab.Screen name='Frofile' component={Frofile} />
    </Tab.Navigator>
  )

}

