import { useState } from "react";
import { Alert, Text, View, TextInput, Pressable, Image } from "react-native";
import { Card } from "../components/listCard";
import { stylesMain, stylesSearchBar, stylesList } from "../styles/stylesMain";

export function Index() {

  const [techDesc, setTechDesc] = useState('');
  const [techs, setTech] = useState([] as string[]);
  const [created, setCreated] = useState(0);
  const [done, setDone] = useState(0);

  const [isFocused, setIsFocused] = useState(false);

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
    <View style={stylesMain.container}>

      <Text style={stylesMain.title}>Minhas tecnologias</Text>

      <View style={stylesSearchBar.searchBar}>
        <TextInput
          style={[stylesSearchBar.searchBarInput, isFocused && stylesSearchBar.searchBarInputFocused]}
          placeholder="Adicione uma tecnologia"
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
          <View>
            <Text style={stylesList.counterCreatedText}>Criadas</Text>
            <Text>{created}</Text>
          </View>
          <View>
            <Text style={stylesList.counterDoneText}>Concluídas</Text>
            <Text>{done}</Text>
          </View>
        </View>

        <View style={stylesList.list}>
          {techs.length === 0 ? (
            <View>
              <Text>Nenhuma tecnologia cadastrada...</Text>
            </View>
          ) : (
            techs.map(item => (
              <Card key={item} desc={item} remove={() => removeTechnology(item)} />
            ))
          )}
        </View>

      </View>
    </View>
  );
}