import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SwipeRow } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const ViewTask = ({ route, navigation }) => {
  const { todos, name } = route.params;

  return (
    <ScrollView>
      <View style={style.wrapper}>
        <View style={{ width: "100%" }}>
          <View style={style.headTextWrapper}>
            <Text style={[style.headText, { color: "#1eae98" }]}>
              Tasks Left
            </Text>
            <View
              style={[style.headTextUnderLine, { backgroundColor: "#1eae98" }]}
            />
          </View>
          <View style={style.innerWrapper}>
            {todos.map((task, index) => {
              return task.completed === "false" ? (
                <SwipeRow
                  key={index}
                  style={style.listItems}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  // <AntDesign name="plus" size={24} color={colors.blue} />
                  left={
                    <TouchableOpacity
                      style={[style.slideBtn, { backgroundColor: "#1eae98" }]}
                    >
                      <Ionicons
                        name="checkmark-done-sharp"
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                  }
                  body={
                    <View>
                      <Text style={style.itemText}>{task.name}</Text>
                    </View>
                  }
                  right={
                    <TouchableOpacity
                      style={[style.slideBtn, { backgroundColor: "#f29191" }]}
                    >
                      <AntDesign name="delete" size={24} color={"white"} />
                    </TouchableOpacity>
                  }
                />
              ) : null;
            })}
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View style={style.headTextWrapper}>
            <Text style={[style.headText, { color: "#f29191" }]}>
              Completed Tasks
            </Text>
            <View
              style={[style.headTextUnderLine, { backgroundColor: "#f29191" }]}
            />
          </View>
          <View style={style.innerWrapper}>
            {todos.map((task, index) => {
              return task.completed === "true" ? (
                <SwipeRow
                  key={index}
                  style={style.listItems}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  left={
                    <TouchableOpacity
                      style={[style.slideBtn, { backgroundColor: "#1eae98" }]}
                    >
                      <Ionicons
                        name="checkmark-done-sharp"
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                  }
                  body={
                    <View>
                      <Text style={style.itemText}>{task.name}</Text>
                    </View>
                  }
                  right={
                    <TouchableOpacity
                      style={[style.slideBtn, { backgroundColor: "#f29191" }]}
                    >
                      <AntDesign name="delete" size={24} color={"white"} />
                    </TouchableOpacity>
                  }
                />
              ) : null;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 35,
    width: "100%",
  },
  headTextWrapper: {
    alignSelf: "center",
  },
  headText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "200",
  },
  headTextUnderLine: {
    height: 2,
    backgroundColor: "black",
    marginBottom: 15,
    borderLeftWidth: 2,
    borderRadius: 10,
  },
  innerWrapper: {
    marginBottom: 35,
  },
  listItems: {
    alignSelf: "center",
    width: "100%",
  },
  itemText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  slideBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
