import { useState } from "react";
import { VStack } from "native-base";
import { Alert } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  function handleNewOrderRegister() {
    if (!patrimony || !description) {
      return Alert.alert("Registrar", "Preencha todos os campos.");
    }

    setIsLoading(true);
    firestore()
      .collection("orders")
      .add({
        patrimony,
        description,
        status: "open",
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert("Solicitação", "Solicitação registrada com sucesso.");
        navigation.goBack();
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        return Alert.alert(
          "Solicitação",
          "Nâo foi possível registrar o pedido"
        );
      });
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />
      <Input
        placeholder="Número do Patrimônio"
        onChangeText={setPatrimony}
        mt={4}
      />
      <Input
        onChangeText={setDescription}
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        multiline
        textAlign="top"
      />
      <Button
        title="Cadastrar"
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
        mt={5}
      />
    </VStack>
  );
}
