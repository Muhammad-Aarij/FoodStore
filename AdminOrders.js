
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text,ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';



export default function AdminOrders({ navigation }) {
    const handleDishPress = (item) => {
        navigation.navigate('AdminOrderProcessing', { item });
      };
      
  
    const orders = [
      { name: 'Pad Thai', price: 250, source: './Categories/ButterChicken.jpg' },
      { name: 'Sushi Roll', price: 300, source: './Categories/ButterChicken.jpg' },
      { name: 'Kung Pao Chicken', price: 200, source: './Categories/ButterChicken.jpg' },
      { name: 'Mango Sticky Rice', price: 150, source: './Categories/ButterChicken.jpg' },
      { name: 'Chicken Tikka Masala', price: 280, source: './Categories/ButterChicken.jpg' },
      { name: 'Chicken Tikka Masala', price: 280, source: './Categories/ButterChicken.jpg' },
    ];
  
    return (
      <ScrollView style={styles.main}>
        <View style={styles.upper}>
          <Image style={styles.img} source={require('./logo.png')} />
        </View>
        <Text style={[styles.txt]}>Orders</Text>
        {orders.map((order, index) => (
          <Pressable style={styles.pressable} key={index} onPress={() => handleDishPress(order)}>
            <Text style={styles.txt}>{order.name}</Text>
            <Text style={styles.txt}>Price: {order.price} Rupees</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  }
  


  const styles = StyleSheet.create({

    main: {

        flex: 1,
        padding: 20,
        backgroundColor: "black",
        // marginBottom:50,
    },
    upper: {
        paddingTop: 60,
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        color: "white",
        fontSize: 24,
        alignSelf: "center",
        fontFamily: 'cursive',
        fontWeight: "bold"
    },
    img: {
        width: 188,
        height: 188,
    },

    pressable: {
        justifyContent: "center",
        backgroundColor: '#F76106',
        padding: 10,
        borderRadius: 80,
        height: 70,
        color: "white",
        marginTop: "5%",
        marginBottom: "5%",
        marginHorizontal: "10%",
    },

    sec: {
        marginTop: 50,
    },

    txtfld: {
        marginTop: 60
    },


    input: {

        // backgroundColor: '#B9B2AD',
        padding: 10,
        borderRadius: 20,
        height: 50,
        color: "white",
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#F76106",
        marginHorizontal: 25,
    },



});