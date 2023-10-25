import { StyleSheet } from "react-native";

export const stylesMain = StyleSheet.create({
  container: {
    // backgroundColor: '#0c0c1a',
    backgroundColor: 'white',
    padding: 30,
    height: '100%'
  },
  title: {
    // color: '#3cabff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export const stylesSearchBar = StyleSheet.create({
  searchBar: {},
  searchBarInput: {
    // backgroundColor: '#20202f',
    borderWidth: 1,
    padding: 5
  },
  searchBarBtn: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
  },
  searchBarBtnImg: {
    width: 20,
    height: 20,
  },
  searchBarInputFocused: {},
});

export const stylesList = StyleSheet.create({
  listContainer: {},
  listCounter: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderBottomColor: '#20202f',
    // borderBottomWidth: 1,
    // width: '100%',
    // padding: 10
  },
  counterCreatedText: {
    // color: '#3cabff',
    width: 48
  },
  counterDoneText: {
    // color: '#554bff',
    width: 71
  },
  list: {},
})