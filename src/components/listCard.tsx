import { View, Text, Pressable, Image } from "react-native";

import stylesCards from "../styles/stylesCards";

interface CardProps {
  desc: string;
  remove: (desc: string) => void;
}

export function Card({ desc, remove }: CardProps) {
  return (
    <View style={stylesCards.cardContainer}>
      <Text>{desc}</Text>
      <Pressable onPress={() => remove(desc)}>
        <Image source={require('../assets/img/trash.svg')} />
      </Pressable>
    </View>
  )
};