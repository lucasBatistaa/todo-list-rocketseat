import { StyleSheet } from "react-native";

import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,

    justifyContent: "center",
  },

  quantity: {
    color: colors.gray[200],
  },

  quantityContainer: {
    height: 19,
    width: 24,

    borderRadius: 999,
    backgroundColor: colors.gray[400],

    justifyContent: 'center',
    alignItems: 'center'
  },
});
