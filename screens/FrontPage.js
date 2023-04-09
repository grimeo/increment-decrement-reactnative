import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { useState } from "react";
import colors from "../assets/colors";

function FrontPage() {
  const [val, setVal] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textResult}>{val}</Text>
      </View>
      <View style={styles.btnsContainer}>
        <Button
          title="Minus"
          onPress={() => {
            setVal(val - 1);
          }}
        ></Button>
        <Button
          title="Reset"
          onPress={() => {
            setVal(0);
          }}
        ></Button>
        <Button
          title="Add"
          onPress={() => {
            setVal(val + 1);
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

export default FrontPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textResult: {
    color: colors.fontColor,
    fontSize: 100,
  },
  btnsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
