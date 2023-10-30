import { ScrollView, View, Text, Alert } from "react-native";
import Card from "./ListCard";
import stylesList from "../styles/stylesList";

interface ListProps {
  techs: string[];
  checked: string[];
  setTechs: (newValue: string[]) => void;
  setChecked: (newValue: string[]) => void;
}

export default function TechList({ techs, setTechs, checked, setChecked }: ListProps) {

  function checkItem(desc: string) {
    if (checked.includes(desc)) setChecked(checked.filter(Tech => Tech !== desc));
    else setChecked([...checked, desc]);
  }

  function removeTechnology(desc: string) {
    Alert.alert('Remove', 'Deseja realmente remover esta tecnologia?', [
      {
        text: 'Sim',
        onPress: () => {
          if (checked.includes(desc)) setChecked(checked.filter(tech => tech !== desc));
          setTechs(techs.filter(tech => tech !== desc));
        }
      },
      { text: 'Cancelar' }
    ]);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={stylesList.list}>
        {techs.length === 0 ? (
          <View>
            <Text style={stylesList.noContentText}>Nenhuma tecnologia cadastrada...</Text>
          </View>
        ) : (
          techs.map(item => (
            <Card key={item} desc={item} isChecked={checked.includes(item)} check={() => checkItem(item)} remove={() => removeTechnology(item)} />
          ))
        )}
    </ScrollView>
  )
}