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

            <View>
              <Text>Remaining</Text>
              <Text>{getCount(data.todos, 1)}</Text>
            </View>
            <View>
              <Text>Completed</Text>
              <Text>{getCount(data.todos, 2)}</Text>
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
    fontSize: 18,
    fontWeight: "bold",
  },
});

const sectionStyle = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
