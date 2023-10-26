import { useState } from "react";
import { Alert, Text, View, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Card } from "../components/listCard";
import { stylesMain, stylesSearchBar, stylesList } from "../styles/stylesMain";
import * as Progress from "react-native-progress"
import vars from "../styles/styleVars";

export function Index() {

  const [techDesc, setTechDesc] = useState('');
  const [techs, setTech] = useState([] as string[]);
  const [checked, setChecked] = useState([] as string[])
  const [created, setCreated] = useState(0);
  const [done, setDone] = useState(0);

  const [isFocused, setIsFocused] = useState(false);

  function checkItem(desc: string) {
    if (checked.includes(desc)) {
      setChecked(checked.filter(Tech => Tech !== desc));
      setDone(done - 1);
    } else {
      setChecked([...checked, desc]);
      setDone(done + 1);
    }
  }

  function addTechnology() {
    if (techDesc === '') Alert.alert('Error', 'Digite a descrição da tecnologia!');
    else if (techs.includes(techDesc)) Alert.alert('Error', 'Tecnologia já adicionada!');
    else {
      setTech([...techs, techDesc]);
      setCreated(created + 1);
    }
    setTechDesc('');
  }

  function removeTechnology(desc: string) {
    Alert.alert('Remove', 'Deseja realmente remover esta tecnologia?', [
      {
        text: 'Sim',
        onPress: () => {
          setTech(techs.filter(Card => Card !== desc))
          setCreated(created - 1)
        }
      },
      { text: 'Cancelar' }
    ]);
  }

  return (
    <ScrollView style={stylesMain.container}>

      <Text style={stylesMain.title}>Minhas tecnologias</Text>

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
        <Pressable style={stylesSearchBar.searchBarBtn} onPress={addTechnology}>
          <Image source={require('../assets/img/add.png')} style={stylesSearchBar.searchBarBtnImg} />
        </Pressable>
      </View>

      <View style={stylesList.listContainer}>

        <View style={stylesList.listCounter}>
          <View style={stylesList.counterContainer}>
            <Text style={stylesList.counterCreatedText}>Criadas:</Text>
            <Text style={stylesList.counterNum}>{created}</Text>
          </View>
          <View style={stylesList.counterContainer}>
            <Text style={stylesList.counterDoneText}>Concluídas:</Text>
            <Text style={stylesList.counterNum}>{done}</Text>
          </View>
        </View>

        <View style={stylesList.progressBar}>
          <Progress.Bar
            progress={done !== 0 ? done / created : 0}
            height={2}
            width={null}
            borderWidth={0}
            color={vars.textPurple}
            unfilledColor={created !== 0 ? vars.textBlue : vars.textLight}
          />
        </View>

        <View style={stylesList.list}>
          {techs.length === 0 ? (
            <View>
              <Text style={stylesList.noContentText}>Nenhuma tecnologia cadastrada...</Text>
            </View>
          ) : (
            techs.map(item => (
              <Card key={item} desc={item} isChecked={checked.includes(item)} check={() => checkItem(item)} remove={() => removeTechnology(item)} />
            ))
          )}
        </View>

      </View>
    </ScrollView>
  );
}