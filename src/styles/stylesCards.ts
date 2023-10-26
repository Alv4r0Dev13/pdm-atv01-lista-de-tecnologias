import { RootTagContext, StyleSheet } from "react-native";
import vars from "./styleVars";

const stylesCards = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: vars.bg1,
    borderRadius: 50,
    padding: 10
  },
  cardCheck: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: vars.textMain,
    width: 30,
    height: 30,
  },
  cardCheckText: {
    fontSize: 20,
    marginLeft: 5,
  },
  cardText: {
    color: vars.textMain,
    maxWidth: 200
  },
  cardTextChecked: {
    color: vars.textLight,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    textDecorationColor: vars.textLight
  },
  deleteBtn: {
    alignSelf: 'center',
    backgroundColor: vars.btnDanger,
    borderRadius: 50,
    padding: 5
  },
  deleteBtnImg: {
    width: 20,
    height: 20
  }
})

export default stylesCards;