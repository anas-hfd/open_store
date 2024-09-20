import { Button, Container, Flex, HStack, Link, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{
            base: "column",
            sm: "row",
        }}
        >

        <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.300, blue.300, blue.500)"}
            bgClip={"text"}
        >
            <Link href={"/"}>Open Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
            <Link href={"/create"}>
            <Button>
                <PlusSquareIcon fontSize={20} />
            </Button>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
            </Link>
        </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar