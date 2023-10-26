import { StyleSheet } from "react-native";
import vars from "./styleVars";

export const stylesMain = StyleSheet.create({
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
    marginBottom: 50
  }
});

export const stylesSearchBar = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  searchBarInput: {
    color: vars.textMain,
    backgroundColor: vars.bg1,
    flexGrow: 2,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  searchBarBtn: {
    backgroundColor: vars.btnAdd,
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 5
  },
  searchBarBtnImg: {
    width: 30,
    height: 30,
  },
  searchBarInputFocused: {},
});

export const stylesList = StyleSheet.create({
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
  },
  list: {
    gap: 10,
    marginTop: 20
  },
})