import React from "react";
import { View, Text, ScrollView, } from "react-native";

import * as Progress from "react-native-progress"
import stylesInfo from "../styles/stylesInfo";
import vars from "../styles/styleVars";

interface InfoProps {
  created: number;
  done: number
}

export default function ListInfo({ created, done }: InfoProps) {
  return (
    <ScrollView>
      <View style={stylesInfo.listCounter}>
        <View style={stylesInfo.counterContainer}>
          <Text style={stylesInfo.counterCreatedText}>Criadas:</Text>
          <Text style={stylesInfo.counterNum}>{created}</Text>
        </View>
        <View style={stylesInfo.counterContainer}>
          <Text style={stylesInfo.counterDoneText}>Concluídas:</Text>
          <Text style={stylesInfo.counterNum}>{done}</Text>
        </View>
      </View><View style={stylesInfo.progressBar}>
        <Progress.Bar
          progress={done !== 0 ? done / created : 0}
          height={2}
          width={null}
          borderWidth={0}
          color={vars.textPurple}
          unfilledColor={created !== 0 ? vars.textBlue : vars.textLight} />
      </View>
    </ScrollView>
  )
}