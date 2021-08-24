import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  const handleNewAddNewSkill = () => {
    setMySkills((oldSkills) => [...oldSkills, newSkill]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Marlon</Text>
      <TextInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleNewAddNewSkill}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      {mySkills.map((skill) => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "1f1e25",
    color: "fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "fff",
    fontSize: 17,
    fontWeight: "bold",
  },
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
});
