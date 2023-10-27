import { useState } from "react";
import { Text, View } from "react-native";

import SearchBar from "../components/SearchBar";
import ListInfo from "../components/ListInfo";
import TechList from "../components/List";
import stylesMain from "../styles/stylesMain";
import stylesList from "../styles/stylesList";

export function Index() {

  const [techs, setTechs] = useState([] as string[]),
    [checked, setChecked] = useState([] as string[]);
  const done = checked.length, created = techs.length;

  return (
    <View style={stylesMain.container}>

      <Text style={[stylesMain.title]}>Minhas tecnologias</Text>

      <SearchBar techs={techs} setTechs={setTechs} />

      <View style={stylesList.listContainer}>
        <ListInfo created={created} done={done} />
        <TechList techs={techs} setTechs={setTechs} checked={checked} setChecked={setChecked} />
      </View>
    </View>
  );
}