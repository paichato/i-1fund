import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Marlon</Text>
            <TextInput style={styles.input}/>
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
    }
})
