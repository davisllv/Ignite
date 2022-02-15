import { Flex } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Siderbar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
