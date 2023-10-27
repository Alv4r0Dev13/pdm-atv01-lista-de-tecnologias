import { Index } from './src/Screens/Index';
import { useFonts, Abel_400Regular } from "@expo-google-fonts/abel";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Abel': Abel_400Regular
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <Index />
    </>
  )
}
