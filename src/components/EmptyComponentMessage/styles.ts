import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#333333",

    paddingVertical: 48,
    paddingHorizontal: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 16,

    color: colors.gray[300],
  },

  message: {
    color: colors.gray[300],
  },
});
