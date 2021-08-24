import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Marlon</Text>
            <TextInput placeholder='New Skill' placeholderTextColor='#555' style={styles.input}/>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
            <Text style={[styles.title,{marginTop:50}]} >My Skills</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121015',
        paddingHorizontal:20,
        paddingVertical:70,
        paddingHorizontal:30
    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'1f1e25',
        color: 'fff',
        fontSize:18,
        padding: 15,
        marginTop:30,
        borderRadius:7,
    },
    button:{
        backgroundColor:'#a370f7',
        padding: 15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20
    },
    buttonText:{
        color: 'fff',
        fontSize:17,
        fontWeight:'bold',

    }
})
