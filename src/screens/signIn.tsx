import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { Alert } from "react-native";

import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe E-mail e Senha");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((e) => {
        console.log(e);
        setIsLoading(false);

        if (e.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail inválido.");
        }
        if (
          e.code === "auth/user-not-found" ||
          e.code === "auth/wrong-password"
        ) {
          return Alert.alert("Entrar", "E-mail ou Senha inválida.");
        }

        return Alert.alert("Entrar", "Não foi possível acessar");
      });
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        onChangeText={setEmail}
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color="gray.300" />} ml={4} />}
      />
      <Input
        onChangeText={setPassword}
        placeholder="Senha"
        mb={8}
        secureTextEntry
        InputLeftElement={<Icon as={<Key color="gray.300" />} ml={4} />}
      />
      <Button onPress={handleSignIn} isLoading={isLoading} title="Entrar" />
    </VStack>
  );
}
