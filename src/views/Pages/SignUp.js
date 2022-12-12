import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/background-body-admin.png";
import logo from "../../assets/img/Logos/Logo3Cursos.png";
import fondo from "../../assets/img/Fondos/background1.png"

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import Footer from "components/Footer/Footer";
import { NavLink, useHistory } from "react-router-dom";


function SignIn() {
  const titleColor = "white";
  const textColor = "gray.400";

  const history = useHistory();
  const handleRoute = () => {
    history.push("/admin/landing");
  };

  return (
    <>
      <Flex>
        <Flex
          minH="100vh"
          h={{ base: "120vh", lg: "fit-content" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          pt={{ sm: "100px", md: "0px" }}
          flexDirection="column"
          me={{ base: "auto", lg: "50px", xl: "auto" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none", marginTop:"-3%" }}
            mx={{ base: "auto", lg: "unset" }}
            ms={{ base: "auto", lg: "auto" }}
            w={{ base: "100%", md: "50%", lg: "450px" }}
            px="50px"
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
              mb={{ base: "60px", lg: "95px" }}
            >
              <Heading color={titleColor} fontSize="32px" mb="5px">
                Bienvenido
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Ingresa tus datos
              </Text>
              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Nombre de Usuario:
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    placeholder="Usuario"
                  />
                </GradientBorder>
              </FormControl>
              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Email:
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    placeholder="Tu dirección de correo electrónico"
                  />
                </GradientBorder>
              </FormControl>
              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Contraseña:
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="password"
                    placeholder="Tu contraseña"
                  />
                </GradientBorder>
              </FormControl>
              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Confirmar contraseña:
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="password"
                    placeholder="Confirmar contraseña"
                  />
                </GradientBorder>
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <DarkMode>
                  <Switch id="remember-login" colorScheme="brand" me="10px" />
                </DarkMode>
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                  color="white"
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
              >
                Registrarse
              </Button>

              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  ¿Ya tienes una cuenta?
                  <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                    Inicia Sesión
                  </Link>
                </Text>
              </Flex>
              <br />
              <Footer />
            </Flex>
          </Flex>

          <Box
            w={{ base: "335px", md: "450px" }}
            mx={{ base: "auto", lg: "unset" }}
            ms={{ base: "auto", lg: "auto" }}
            mb="80px"
          ></Box>
          <Box
            display={{ base: "none", lg: "block" }}
            overflowX="hidden"
            h="1%"
            maxW={{ md: "50vw", lg: "50vw" }}
            minH="100vh"
            w="960px"
            position="absolute"
            left="0px"
          >
            <Box
              bgImage={fondo}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                textAlign="center"
                color="white"
                letterSpacing="8px"
                fontSize="20px"
                fontWeight="500"
                // style={{ color: "black" }}
              >
                <strong>BIENVENIDO A LOS CURSOS EN LÍNEA:</strong>
              </Text>
              <Text
                textAlign="center"
                color="transparent"
                letterSpacing="8px"
                fontSize="56px"
                fontWeight="bold"
                bgClip="text !important"
                bg="linear-gradient(94.56deg, #ffff 79.99%, #21242F 102.65%)"
              >
                LENGUAJES DE PROGRAMACIÓN
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>

      {/* <AuthFooter /> */}
    </>
  );
}

export default SignIn;
