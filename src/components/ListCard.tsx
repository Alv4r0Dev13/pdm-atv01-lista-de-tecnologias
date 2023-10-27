import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";

import stylesCards from "../styles/stylesCards";
import vars from "../styles/styleVars";

interface CardProps {
  desc: string;
  isChecked: boolean;
  check: (desc: string) => void;
  remove: (desc: string) => void;
}

export default function Card({ desc, isChecked, check, remove }: CardProps) {
  return (
    <View style={stylesCards.cardContainer}>
      <Pressable onPress={() => check(desc)} style={[stylesCards.cardCheck, isChecked && { backgroundColor: vars.textMain }]}>
        <Text style={[stylesCards.cardCheckText, isChecked && { color: vars.bgMain }]}>{isChecked ? '✓' : ''}</Text>
      </Pressable>
      <Text style={[stylesCards.cardText, isChecked && stylesCards.cardTextChecked]}>{desc}</Text>
      <TouchableOpacity onPress={() => remove(desc)} style={stylesCards.deleteBtn}>
        <Image source={require('../assets/img/trash.png')} style={stylesCards.deleteBtnImg} />
      </TouchableOpacity>
    </View>
  )
};