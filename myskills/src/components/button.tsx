import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
  title:string
}

export default function ButtonAdd({title,...rest}:ButtonProps) {
    return (
        <TouchableOpacity
        // onPress={onPress}
        activeOpacity={0.7}
        style={styles.button}
        {...rest}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button: {
        backgroundColor: "#a370f7",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20,
      },
      buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
      },
})
