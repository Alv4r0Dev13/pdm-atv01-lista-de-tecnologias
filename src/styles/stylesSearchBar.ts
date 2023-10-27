import { StyleSheet } from "react-native";
import vars from "./styleVars";

export const stylesSearchBar = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
    maxWidth: '100%'
  },
  searchBarInput: {
    color: vars.textMain,
    backgroundColor: vars.bg1,
    flexGrow: 2,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 285
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