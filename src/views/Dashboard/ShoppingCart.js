import React from "react";
// Chakra imports
import {
    Button,
    Flex,
    Table,
    Tbody,
    Icon,
    Text,
    Th,
    Thead,
    Tr,
    Td,
    Spacer,
    Stack,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import imgReact from "../../assets/img/Frameworks/LogoReactJs1.png";
import imgNode from "../../assets/img/Frameworks/LogoNodeJs2.png";
import imgHtml from "../../assets/img/Frameworks/LogoHtml3.png";
import IconBox from "components/Icons/IconBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
    MastercardIcon,
    VisaIcon
} from "components/Icons/Icons.js";

export default function ShoppingCart() {
    return (
        <div>
            <Flex
                direction="row"
                pt={{ base: "120px", md: "100px" }}
                w="100%"
                h="50%"
            >
                {/* Products Table */}
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    align="left"
                    w="72%"
                    justify="left"
                    py="1rem"
                >
                    <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px">
                        <CardHeader p="6px 0px 22px 0px">
                            <Flex direction="column">
                                <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
                                    Mi compra
                                </Text>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Table variant="simple" color="#fff" style={{ marginBottom: "20px" }}>
                                <Thead style={{ align: "left" }}>
                                    <Tr my=".8rem" ps="0px">
                                        <Th
                                            ps="0px"
                                            color="gray.400"
                                            fontFamily="Plus Jakarta Display"
                                            borderBottomColor="#56577A"
                                        >
                                            Cursos
                                        </Th>
                                        <Th borderBottomColor="#56577A"></Th>
                                        <Th borderBottomColor="#56577A"></Th>
                                        <Th borderBottomColor="#56577A"></Th>
                                        <Th borderBottomColor="#56577A"></Th>
                                        <Th borderBottomColor="#56577A"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <img
                                                src={imgReact}
                                                style={{
                                                    height: "100px",
                                                    width: "100px",
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="center" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff" style={{ textAlign: "start" }}>
                                                    React para principiantes
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "start" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Duración: 6 horas aprox
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "center" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Autor: Obed Ariel
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff">
                                                    $200.50
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <IconBox
                                                    as="box"
                                                    h={"35px"}
                                                    w={"35px"}
                                                    bg="brand.200"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </IconBox>

                                            </Flex>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <img
                                                src={imgHtml}
                                                style={{
                                                    height: "100px",
                                                    width: "100px",
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="center" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff" style={{ textAlign: "start" }}>
                                                Curso HTML5, CSS y JavaScript
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "start" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Duración: 48 horas aprox
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "center" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Autor: Obed Ariel
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff">
                                                    $320.00
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <IconBox
                                                    as="box"
                                                    h={"35px"}
                                                    w={"35px"}
                                                    bg="brand.200"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </IconBox>

                                            </Flex>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <img
                                                src={imgNode}
                                                style={{
                                                    height: "100px",
                                                    width: "100px",
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="center" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff" style={{ textAlign: "start" }}>
                                                    Curso Node JS
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "start" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Duración: 16 horas aprox
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <StatLabel
                                                style={{ textAlign: "center" }}
                                                fontSize="sm"
                                                color="gray.400"
                                                fontWeight="bold"
                                            >
                                                Autor: Mario Rodriguez
                                            </StatLabel>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <StatNumber fontSize="md" color="#fff">
                                                    $230.00
                                                </StatNumber>

                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex w="100%" align="right" flexDirection="column">
                                                <IconBox
                                                    as="box"
                                                    h={"35px"}
                                                    w={"35px"}
                                                    bg="brand.200"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </IconBox>

                                            </Flex>
                                        </Td>
                                    </Tr>

                                </Tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Flex>
                <Spacer></Spacer>
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    align="start"
                    w="28%"
                    justify="center"
                    py="1rem"
                >
                    <Flex direction="column" align="center" justify="center" >
                        <Flex align="center">
                            <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px" w="100%" >
                                <CardHeader >
                                    <Text fontSize="lg" color="#fff" fontWeight="bold" w="100%">
                                        Summary
                                    </Text>
                                </CardHeader>
                                <CardBody>
                                    <Flex direction="column" align="center" justify="center" >
                                        <Flex align="center">
                                            <Table variant="simple" color="#fff">
                                                <Thead>
                                                    <Tr my=".8rem" ps="0px">
                                                        <Th borderBottomColor="#56577A"></Th>
                                                        <Th borderBottomColor="#56577A"></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>
                                                            <StatLabel
                                                                fontSize="sm"
                                                                color="gray.400"
                                                                fontWeight="bold"
                                                                pb="2px"
                                                            >
                                                                Cursos
                                                            </StatLabel>
                                                        </Td>
                                                        <Td>
                                                            <Flex w="100%" align="right" flexDirection="column">
                                                                <StatNumber fontSize="lg" color="#fff">
                                                                    $800.50
                                                                </StatNumber>
                                                            </Flex>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>
                                                            <StatLabel
                                                                fontSize="sm"
                                                                color="gray.400"
                                                                fontWeight="bold"
                                                                pb="2px"
                                                            >
                                                                Total (iva incluido)
                                                            </StatLabel>
                                                        </Td>
                                                        <Td>
                                                            <Flex w="100%" align="right" flexDirection="column">
                                                                <StatNumber fontSize="lg" color="#fff">
                                                                    $800.50
                                                                </StatNumber>
                                                            </Flex>
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </Flex>
                                        <Flex align="center" w="100%" style={{ marginTop: "20px", marginBottom: "20px" }}>
                                            <Button
                                                variant="brand"
                                                fontSize="10px"
                                                fontWeight="bold"
                                                p="6px 32px"
                                            >
                                                Ir a pagar
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>
                        <Flex align="left" w="100%">
                            <Card overflowX={{ sm: "scroll", md: "hidden" }} pb="20px" w="100%" style={{alignItems: 'left',}}>
                                <CardHeader pb="10px">
                                    <Text fontSize="lg" color="#fff" fontWeight="bold" w="100%">
                                        Formas de pago
                                    </Text>
                                </CardHeader>
                                <CardBody>
                                    <Flex direction="column" align="center" justify="center" >
                                        <Flex align="center">
                                            <IconBox me="10px" w="25px" h="22px">
                                                <MastercardIcon w="100%" h="100%" />
                                            </IconBox>
                                            <IconBox me="10px" w="25px" h="25px">
                                                <VisaIcon w="100%" h="100%" color="#fff" />
                                            </IconBox>
                                        </Flex>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}