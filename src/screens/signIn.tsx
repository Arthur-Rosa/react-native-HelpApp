import { useState } from "react";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSignIn() {}

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        onChangeText={setName}
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
      <Button onPress={handleSignIn} title="Entrar" />
    </VStack>
  );
}
