import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "./Styles/Colors";
import { AntDesign } from "@expo/vector-icons";
import fakeData from "../fakedata.json";
import { Rooms } from "./Rooms";

export const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoCon}>
          <View style={styles.divider}></View>
          <Text style={styles.logo}>
            TODO <Text style={styles.logoSub}>APP</Text>
          </Text>
          <View style={styles.divider}></View>
        </View>
        <View style={styles2.container}>
          <TouchableOpacity
            style={styles2.addBtn}
            onPress={() => console.log("clicked!")}
          >
            <AntDesign name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles2.addText}>Add Entry</Text>
        </View>
        <Rooms data={fakeData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: colors.lightBlue,
  },
  logo: {
    fontSize: 36,
    marginLeft: 10,
    marginRight: 10,
  },
  logoSub: {
    color: colors.blue,
    fontWeight: "bold",
  },
});

const styles2 = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
  },
  addBtn: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  addText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    color: colors.blue,
  },
});
