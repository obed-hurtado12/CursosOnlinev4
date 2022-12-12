import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

import { NavLink, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// Assets
import signUpImage from "assets/img/signUpImage.png";
import Footer from "components/Footer/Footer";
import fondo from "../../assets/img/Fondos/background1.png"

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";

  const history = useHistory();

  const handleRoute = () => {
    history.push("/admin/landing");
  };

  return (
    <>
      {/* <br/><br/><br/> */}
      <Flex position="relative" overflow={{ lg: "hidden" }}>
        <Flex
          flexDirection="column"
          h={{ sm: "initial", md: "unset" }}
          w={{ base: "90%" }}
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          pt={{ sm: "100px", md: "0px" }}
          me={{ base: "auto", lg: "50px", xl: "auto" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            flexDirection="column"
            mx={{ base: "auto", lg: "unset" }}
            ms={{ base: "auto", lg: "auto" }}
            mb="50px"
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex
              direction="column"
              textAlign="center"
              justifyContent="center"
              align="center"
              mt={{ base: "60px", md: "140px", lg: "200px" }}
              mb="50px"
            >
              <Text
                fontSize="4xl"
                lineHeight="39px"
                color="white"
                fontWeight="bold"
              >
                Bienvenido!
              </Text>
              <Text
                fontSize="md"
                color="white"
                fontWeight="normal"
                mt="10px"
                w={{ base: "100%", md: "90%", lg: "90%", xl: "80%" }}
              >
                Inicia sesión o crea una cuenta nueva para acceder a nuestros
                cursos.
              </Text>
            </Flex>
            <GradientBorder
              p="2px"
              me={{ base: "none", lg: "30px", xl: "none" }}
            >
              <Flex
                background="transparent"
                borderRadius="30px"
                direction="column"
                p="40px"
                minW={{ base: "unset", md: "430px", xl: "450px" }}
                w="100%"
                mx={{ base: "0px" }}
                bg={{
                  base: "rgb(19,21,56)",
                }}
              >
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  textAlign="center"
                  mb="22px"
                >
                  Registrarse con
                </Text>
                <HStack spacing="15px" justify="center" mb="22px">
                  <GradientBorder borderRadius="15px">
                    <Flex
                      _hover={{ filter: "brightness(120%)" }}
                      transition="all .25s ease"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      bg="rgb(19,21,54)"
                      w="71px"
                      h="71px"
                      borderRadius="15px"
                    >
                      <Link href="#">
                        <Icon
                          color={titleColor}
                          as={FaFacebook}
                          w="30px"
                          h="30px"
                          _hover={{ filter: "brightness(120%)" }}
                        />
                      </Link>
                    </Flex>
                  </GradientBorder>
                  <GradientBorder borderRadius="15px">
                    <Flex
                      _hover={{ filter: "brightness(120%)" }}
                      transition="all .25s ease"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      bg="rgb(19,21,54)"
                      w="71px"
                      h="71px"
                      borderRadius="15px"
                    >
                      <Link href="#">
                        <Icon
                          color={titleColor}
                          as={FaApple}
                          w="30px"
                          h="30px"
                          _hover={{ filter: "brightness(120%)" }}
                        />
                      </Link>
                    </Flex>
                  </GradientBorder>
                  <GradientBorder borderRadius="15px">
                    <Flex
                      _hover={{ filter: "brightness(120%)" }}
                      transition="all .25s ease"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      bg="rgb(19,21,54)"
                      w="71px"
                      h="71px"
                      borderRadius="15px"
                    >
                      <Link href="#">
                        <Icon
                          color={titleColor}
                          as={FaGoogle}
                          w="30px"
                          h="30px"
                          _hover={{ filter: "brightness(120%)" }}
                        />
                      </Link>
                    </Flex>
                  </GradientBorder>
                </HStack>
                <Text
                  fontSize="lg"
                  color="gray.400"
                  fontWeight="bold"
                  textAlign="center"
                  mb="22px"
                >
                  o
                </Text>
                <FormControl>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Nombre de Usuario
                  </FormLabel>

                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="text"
                      placeholder="Tu nombre de usuario"
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Email
                  </FormLabel>
                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="email"
                      placeholder="Tu dirección de correo electrónico"
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms="4px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Contraseña
                  </FormLabel>
                  <GradientBorder
                    mb="24px"
                    h="50px"
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius="20px"
                  >
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="100%"
                      h="46px"
                      type="password"
                      placeholder="Tu contraseña"
                    />
                  </GradientBorder>
                  <FormControl display="flex" alignItems="center" mb="24px">
                    <DarkMode>
                      <Switch
                        id="remember-login"
                        colorScheme="brand"
                        me="10px"
                      />
                    </DarkMode>

                    <FormLabel
                      color={titleColor}
                      htmlFor="remember-login"
                      mb="0"
                      fontWeight="normal"
                    >
                      Recordarme
                    </FormLabel>
                  </FormControl>
                  <Button
                    variant="brand"
                    fontSize="10px"
                    type="submit"
                    w="100%"
                    maxW="350px"
                    h="45"
                    mb="20px"
                    mt="20px"
                    to='/admin/landing'
                    onClick={handleRoute}
                  >
                    Registrarse
                  </Button>
                </FormControl>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  maxW="100%"
                  mt="0px"
                >
                  <Text color={textColor} fontWeight="medium">
                    <i>¿Ya tienes una cuenta? </i> {" "}
                    <NavLink
                      color={titleColor}
                      as="span"
                      ms="5px"
                      to='/auth/signin'
                      fontWeight="bold"
                    >
                      <strong>Inicia Sesión</strong>
                    </NavLink>
                  </Text>
                </Flex>
              </Flex>
            </GradientBorder>
          </Flex>
          <Box
            w={{ base: "335px", md: "450px" }}
            mx={{ base: "auto", lg: "unset" }}
            ms={{ base: "auto", lg: "auto" }}
            mb="90px"
          >
            {/* <AuthFooter /> */}
            <Footer/>
          </Box>
          <Box
            display={{ base: "none", lg: "block" }}
            overflowX="hidden"
            h="1300px"
            maxW={{ md: "50vw", lg: "48vw" }}
            w="960px"
            position="absolute"
            left="0px"
          >
            <Box
              bgImage={fondo}
              w="100%"
              h="1300px"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              pos='absolute'
              // position='absolute'
            >
              <Text
                textAlign="center"
                color="white"
                letterSpacing="8px"
                fontSize="20px"
                fontWeight="500"
              >
                INSPIRANDO EN EL FUTURO:
              </Text>
              <Text
                textAlign="center"
                color="transparent"
                letterSpacing="8px"
                fontSize="36px"
                fontWeight="bold"
                bgClip="text !important"
                bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
              >
                Regístrate y obtén los mejores cursos a un nivel muy alto
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default SignUp;
