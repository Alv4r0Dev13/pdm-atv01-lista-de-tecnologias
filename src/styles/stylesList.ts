import { StyleSheet } from "react-native";
import vars from "./styleVars";

const stylesList = StyleSheet.create({
  noContentText: {
    color: vars.textLight,
    textAlign: 'center'
  },
  listContainer: {
    // backgroundColor: vars.bg1,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 50
  },
  list: {
    gap: 10,
    marginTop: 20
  },
})
export default stylesList;