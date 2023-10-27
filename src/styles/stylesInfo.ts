import { StyleSheet } from "react-native";
import vars from "./styleVars";


const stylesInfo = StyleSheet.create({
  listCounter: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // borderBottomColor: vars.textLight,
    // borderBottomWidth: 1,
    paddingBottom: 10
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },
  counterCreatedText: {
    color: vars.textBlue,
  },
  counterDoneText: {
    color: vars.textPurple,
  },
  counterNum: {
    color: vars.textMain,
    backgroundColor: vars.bg1,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  progressBar: {
    display: 'flex',
    justifyContent: "center",
    flex: 1
  }
});
export default stylesInfo;