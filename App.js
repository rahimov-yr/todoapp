import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
/// Just comments
const ToDoList = () => {
  const [toDo, setToDo] = useState(["Buy milk", "Read book"]);
  const [inputText, setInputText] = useState("");

  const addToDo = () => {
    if(inputText) setToDo([...toDo, inputText]);
    setInputText("");
    /// -------   
    /// -------   
  };

  const deleteHandle = (nameOfToDo) => {
    const newData = toDo.filter((item) => {
      // console.log(item)
      // console.log(item)
      return item !== nameOfToDo
    })

    /// intro
    setToDo(newData);
  }

  return (
    <View style={styles.conainer}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        placeholder="Enter you TO DO"
      />
      <TouchableOpacity onPress={addToDo} style={styles.button}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>
      {toDo.map((toDo, index) => (
        <TouchableOpacity onPress={() => deleteHandle(nameOfToDo = toDo)} key={index} style={styles.text}>
          <Text style={{ color: "white", textAlign: "center" }}>{toDo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#bf42f5",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    // borderColor: '#bf42f5',
    // borderWidth: 3,
    backgroundColor: "#f4e1fc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  textButton: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    color: "#bf42f5",
  },
  conainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 15,
  },
  text: {
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    padding: 10,
    backgroundColor: "#bf42f5",
    marginBottom: 10,
  },
});

export default ToDoList;
