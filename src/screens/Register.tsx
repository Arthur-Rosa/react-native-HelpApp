import { VStack } from "native-base";
import { Button } from "../components/Button";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />
      <Input placeholder="Número do Patrimônio" mt={4} />
      <Input
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        multiline
        textAlign="top"
      />
      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}
