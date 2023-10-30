import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

export default function API_Screen_01() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.img} source={require('../assets/Book.png')}>
                </Image>
                <View style={styles.text} >
                    <Text style={styles.txt}>MANAGE YOUR TASK</Text>
                </View>
            </View>
            <View style={styles.header} >
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.body}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1
    },
    img: {
        width: 271,
        height: 271
    },
    txt: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: '36px',
        textAlign: 'center',
        fontFamily: 'Epilogue',
        color: '#8353E2',
 
    },
    text:{
        marginTop: 20,
        width: 200,
        height: 72
    },
    input:{
        width: 334,
        height:43,
        borderWidth:2,
        borderRadius:5,
        borderColor:'red',
    }
})