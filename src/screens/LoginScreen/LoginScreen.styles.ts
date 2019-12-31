import { StyleSheet } from "react-native";
import * as colors from "../../util/colors";
import { white } from "react-native-paper/lib/typescript/src/styles/colors";

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.BANANA_YELLOW,
    paddingHorizontal: "15%"
  },
  input: {
    height: 50,
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  passwordContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white"
  }
});
