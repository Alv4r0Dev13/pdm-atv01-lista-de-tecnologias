import { StyleSheet } from "react-native";
import vars from "./styleVars";

const stylesList = StyleSheet.create({
  noContentText: {
    color: vars.textLight,
    textAlign: 'center'
  },
  listContainer: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 15,
    // marginBottom: 50
  },
  list: {
    flex: 0,
    gap: 10,
    // height: 500,
    // paddingTop: 30,
    justifyContent: 'flex-start'
    // paddingBottom: 50
  },
})
export default stylesList;