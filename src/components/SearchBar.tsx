import { useState } from "react";
import { TextInput, TouchableOpacity, View, Image, Alert } from "react-native";

import { stylesSearchBar } from "../styles/stylesSearchBar";
import vars from "../styles/styleVars";

interface SearchBarProps {
  techs: string[];
  setTechs: (newValue: string[]) => void;
}

export default function SearchBar({ techs, setTechs }: SearchBarProps) {

  const [techDesc, setTechDesc] = useState(''),
    [isFocused, setIsFocused] = useState(false);

  function addTechnology() {
    if (techDesc === '') Alert.alert('Error', 'Digite a descrição da tecnologia!');
    else if (techs.includes(techDesc)) Alert.alert('Error', 'Tecnologia já adicionada!');
    else setTechs([...techs, techDesc]);
    setTechDesc('');
  }

  return (
    <>
      <View style={stylesSearchBar.searchBar}>
        <TextInput
          style={[stylesSearchBar.searchBarInput, isFocused && stylesSearchBar.searchBarInputFocused]}
          placeholder="Adicione uma tecnologia"
          placeholderTextColor={vars.textLight}
          onChangeText={text => setTechDesc(text)}
          value={techDesc}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={stylesSearchBar.searchBarBtn} onPress={addTechnology}>
          <Image source={require('../assets/img/add.png')} style={stylesSearchBar.searchBarBtnImg} />
        </TouchableOpacity>
      </View>
    </>
  )
}