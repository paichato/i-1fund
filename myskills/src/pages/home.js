import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import ButtonAdd from "../components/button";


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
        onChangeText={txt=>setNewSkill(txt)}
      />
      <ButtonAdd action={handleNewAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      {/* {mySkills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
      ))} */}
      <FlatList data={mySkills} renderItem={({item})=><SkillCard  skill={item}/>} keyExtractor={item=>item} />
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
  
  
});
