// In App.js in a new project

import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './Firstt';
import Sec from './Sec';
import Thrd from './Thrd';
import Fourth from './Fourth';
import Lendingpg from './Lendingpg';
import CustomerSignin from './CustomerSignin';
import CustomerSignup from './CustomerSignup';
import Categorypg from './Categorypg';
import HelipSupport from './HelipSupport';
import Feedback from './Feedback';
import AdminCustomer from './AdminCustomer';
import AdminSignin from './AdminSignin';
import AdminDashboard from './AdminDashboard'
import AdminOrders from './AdminOrders';
import AdminOrderProcessing from './AdminOrderProcessing';
import AdminAddDish from './AdminAddDish';



// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AJ" component={First} options={{ headerShown: false }} />
        <Stack.Screen name="1" component={Sec} options={{ headerShown: false }} />
        <Stack.Screen name="2" component={Thrd} options={{ headerShown: false }} />
        <Stack.Screen name="3" component={Fourth} options={{ headerShown: false }} />
        <Stack.Screen name="4" component={Lendingpg} options={{ headerShown: false }} />


        <Stack.Screen name="CustomerSignin" component={CustomerSignin} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />



        <Stack.Screen name="CustomerSignup" component={CustomerSignup} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />


        <Stack.Screen name="Categorypg" component={Categorypg} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />


        <Stack.Screen name="Feedback" component={Feedback} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />



        <Stack.Screen name="Help" component={HelipSupport} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />


        <Stack.Screen name="AdminCustomer" component={AdminCustomer} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminSignin" component={AdminSignin} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminOrders" component={AdminOrders} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminOrderProcessing" component={AdminOrderProcessing} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />
        <Stack.Screen name="AdminAddDish" component={AdminAddDish} options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'black',
            opacity: 100,
          },
          headerTitleStyle: {
            color: "black",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{ marginLeft: 6 }}
            >
              <Image
                source={require("./Categories/back.png")}
                style={{ width: 32, height: 32, marginTop: 18, }}
              />
            </TouchableOpacity>
          ),
        })
        } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;