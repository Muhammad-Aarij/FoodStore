import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View, Switch, Image, Pressable, SafeAreaView, ActivityIndicator, Touchable } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';




export default function AdminDashboard({ navigation }) {

    const handleNavigation = (screenname) => {
        console.log(screenname);
        navigation.navigate(screenname);
    }




    return (

        <ScrollView style={styles.main}>

            <View style={styles.upper}>
                <Image style={styles.img} source={require('./logo.png')} />
         

            </View>


<View style={{marginBottom:"19%"}}>

            <Pressable style={styles.pressable}>
                <Text style={styles.txt}>Total Orders</Text>
                <Text style={styles.txt}>500</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Text style={styles.txt}>Today's Orders</Text>
                <Text style={styles.txt}>100</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Text style={styles.txt}>Total Revenue</Text>
                <Text style={styles.txt}>1000000</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={()=>handleNavigation("AdminOrders")}
            >
                <Text style={styles.txt}>View Orders</Text>

            </Pressable>
            <Pressable style={styles.pressable} onPress={()=>handleNavigation("AdminAddDish")}
            >
                <Text style={styles.txt}> Add Dish</Text>

            </Pressable>
</View>

        </ScrollView>


    );

}


const styles = StyleSheet.create({

    main: {

        flex: 1,
        padding: 20,
        paddingBottom:300,
        backgroundColor: "black",
    },
    upper: {
        paddingTop: 40,
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom:30,
    },
    txt: {
        color: "white",
        fontSize: 24,
        alignSelf: "center",
        fontFamily: 'cursive',
        fontWeight: "bold",
        // padding:"4%"
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
        marginTop: "10%",
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
