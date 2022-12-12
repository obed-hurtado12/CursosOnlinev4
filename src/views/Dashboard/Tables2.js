import React from "react";

// Chakra imports
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Select,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import swal from "sweetalert";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const alertInfo = () => {
    swal({
      title: "Registro Exitoso",
      icon: "success",
      buttons: ["Cerrar", "OK"],
      //buttons: ["No", "Si"],
    });
    window.location.reload();
  }


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* Authors Table */}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Nuestros Profesores
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              {/* <Button style={{color:"saddlebrown", backgroundColor:"#000"}} onClick={onOpen}>Open Modal</Button> */}
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#376e2a",
                  right: "-250%",
                  marginTop: "-20%",
                }}
                onClick={onOpen}
              >
                Registrar
              </Button>

              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Profesor
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Curso
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Status
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Fecha Inicio
                </Th>
                <Th borderBottomColor="#56577A">Editar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <>
                    <TablesTableRow
                      name={row.name}
                      logo={row.logo}
                      email={row.email}
                      subdomain={row.subdomain}
                      domain={row.domain}
                      status={row.status}
                      date={row.date}
                      lastItem={index === arr.length - 1 ? true : false}
                    ></TablesTableRow>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro de Profesor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre(s):</FormLabel>
              <Input type="text" placeholder="Nombre del profesor"></Input>
              {/* <FormHelperText>Ingrese el nombre completo.</FormHelperText> */}
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Apellido Paterno:</FormLabel>
              <Input type="text" placeholder="Primer Apellido"></Input>
              {/* <FormHelperText>Ingrese el nombre completo.</FormHelperText> */}
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Email:</FormLabel>
              <Input type="email" placeholder="Email"></Input>
              {/* <FormHelperText>Ingrese el nombre completo.</FormHelperText> */}
            </FormControl>
            <br />
            <FormControl as="fieldset">
              <FormLabel as="legend">Seleccione el Rol:</FormLabel>
              <RadioGroup defaultValue="Profesor">
                <HStack spacing="24px">
                  <Radio value="Profesor">Profesor</Radio>
                  <Radio value="Alumno">Alumno</Radio>
                  <Radio value="Administrador">Administrador</Radio>
                </HStack>
              </RadioGroup>
              <br />
            </FormControl>
            <FormControl>
              <FormLabel>Asignar a Curso:</FormLabel>
              <Select placeholder="Seleccione el curso">
                <option>HTML, CSS y JS</option>
                <option>SPRING BOOT</option>
              </Select>
            </FormControl>
            <br />
            <br />
          </ModalBody>

          <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => alertInfo()}>
              Guardar
            </Button>{" "}
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Tables;
