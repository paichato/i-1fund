import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function SkillCard({skill}) {
    return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
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
        color: "fff",
        backgroundColor: "#1f1e25",
        padding: 20,
        fontSize: 18,
        fontWeight: "bold",
      },
})
