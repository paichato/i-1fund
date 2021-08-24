import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import ButtonAdd from "../components/button";
import SkillCard from "../components/skillCard";

interface SkillData{
  id:string,
  name:string,
  date?: Date
}


const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');



  const handleNewAddNewSkill = () => {

    const data={
      id:String(new Date().getTime()),
      name: newSkill
    }

    setMySkills((oldSkills) => [...oldSkills, data]);
  };

  useEffect(()=>{
    const currentHour=new Date().getHours();

    currentHour <12 ? setGreeting('Good Morning') : currentHour >=12 && currentHour <18 ? setGreeting('Good Afternoon') : setGreeting('Good Night');

  },[])

  return (
    <View style={styles.container}>
       
      <Text style={styles.title}>Welcome Marlon</Text>
      <Text style={styles.greeting} >{greeting}</Text>
      <TextInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkill}
        value={newSkill}
      />
      
      <ButtonAdd action={handleNewAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      
      <FlatList showsVerticalScrollIndicator={false} data={mySkills} renderItem={({item})=><SkillCard  skill={item.name}/>} keyExtractor={item=>item.id} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
   
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting:{
      color: 'white'
  }
  
  
});
