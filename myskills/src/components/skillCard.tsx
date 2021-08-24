import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
skill:string;
}

export default function SkillCard({skill, ...rest}:SkillCardProps) {
    return (
        <TouchableOpacity  style={styles.buttonSkill} {...rest} >
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: "#1f1e25",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginVertical:10,
      },
      textSkill: {
        color: "#fff",
        backgroundColor: "#1f1e25",
        padding: 20,
        fontSize: 18,
        fontWeight: "bold",
      },
})
