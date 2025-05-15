import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,

    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,

    alignItems: "center",
    justifyContent: "center",

    borderColor: colors.gray[400],
    backgroundColor: colors.gray[500],
  },

  checkButton: {
    height: 24,
    width: 24,

    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    flex: 1,
    color: colors.gray[100],
  },

  trashButton: {
    height: 32,
    width: 32,

    alignItems: "center",
    justifyContent: "center",
  },

  trashButtonPressed: {
    borderRadius: 4,
    backgroundColor: colors.gray[400]
  },

  taskCheckedContainerVariant: {
    borderColor: colors.gray[500],
  },

  taskCheckedNameVariant: {
    textDecorationLine: "line-through",
    color: colors.gray[300],
  },
});
