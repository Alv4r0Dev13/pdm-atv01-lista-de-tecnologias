import { StyleSheet } from "react-native";
import vars from "./styleVars";

const stylesMain = StyleSheet.create({
  container: {
    backgroundColor: vars.bgMain,
    padding: 30,
    minHeight: '100%'
  },
  title: {
    color: vars.textBlue,
    // fontFamily: 'Abel',
    fontSize: 30,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 50,
    maxWidth: '100%'
  }
});
export default stylesMain;