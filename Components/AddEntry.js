import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export const AddEntry = () => {
  return (
    <View>
      <View style={style.wrapper}>
        <Text style={style.headerText}>Add New Task Room</Text>
        <TextInput style={style.input} placeholder="Room Name" />
        <Text style={style.colorText}>Select Color</Text>
        <View style={style.colorViewWrapper}>
          <TouchableOpacity
            style={[style.colorView, { backgroundColor: "#289672" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[style.colorView, { backgroundColor: "#2f5d62" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[style.colorView, { backgroundColor: "#233e8b" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[style.colorView, { backgroundColor: "#393e46" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[style.colorView, { backgroundColor: "#7b113a" }]}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity style={style.btnStyle}>
          <Text style={style.btnText}>Add Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "85%",
    borderWidth: 2,
    borderColor: "#536162",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    fontSize: 18,
    marginBottom: 25,
  },
  colorViewWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  colorText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#29bb89",
  },
  colorView: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  btnStyle: {
    width: "85%",
    paddingVertical: 5,
    marginTop: 25,
    backgroundColor: "#29bb89",
    borderWidth: 2,
    borderColor: "#29bb89",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
