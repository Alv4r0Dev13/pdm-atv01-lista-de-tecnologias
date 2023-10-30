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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 40,
    maxWidth: '100%'
  }
});
export default stylesMain;