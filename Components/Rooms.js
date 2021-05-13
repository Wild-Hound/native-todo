import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Rooms = (props) => {
  function getCount(arr, which) {
    let x = 0;
    arr.forEach((data) => x++);
    let completed = 0;
    arr.forEach(
      (data) => data.completed == "true" && data.completed && completed++
    );
    let remaining = x - completed;
    if (which === 1) {
      return completed;
    } else {
      return remaining;
    }
  }

  return (
    <View style={sectionStyle.wrapper}>
      {props.data?.map((data, index) => {
        return (
          <View
            key={index}
            style={[roomStyle.wrapper, { backgroundColor: data.color }]}
          >
            <Text style={[roomStyle.text]}>{data.name}</Text>

            <View style={roomStyle.taskInfo}>
              <Text style={roomStyle.infoText}>Remaining</Text>
              <Text style={roomStyle.infoNumber}>
                {getCount(data.todos, 1)}
              </Text>
            </View>
            <View style={roomStyle.taskInfo}>
              <Text style={roomStyle.infoText}>Completed</Text>
              <Text style={roomStyle.infoNumber}>
                {getCount(data.todos, 2)}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const roomStyle = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
    color: "white",
  },
  infoNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

const sectionStyle = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
