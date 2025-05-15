import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    
    backgroundColor: colors.gray[600],
  },

  header: {
    paddingVertical: 70,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.gray[700],
  },

  addTaskForm: {
    flexDirection: "row",
    gap: 4,

    marginHorizontal: 24,
    transform: [{ translateY: '-50%' }],
  },

  input: {
    flex: 1,
    height: 52,

    fontSize: 16,
    color: colors.gray[100],
    backgroundColor: colors.gray[500],

    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray[700]
  },

  inputFocus: {
    borderColor: colors.purpleDark
  },

  button: {
    height: 52,
    width: 52,

    backgroundColor: colors.blueDark,
    borderRadius: 6,

    alignItems: "center",
    justifyContent: "center",
  },

  addTaskButtonPressed: {
    backgroundColor: colors.blue
  },
  
  tasks: {
    marginBottom: 20,

    paddingHorizontal: 24,
  },

  tasksInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  tasksList: {
    marginHorizontal: 24,
  }
});
