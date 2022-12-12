import React from 'react'
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
import { faEarthAmericas, faTrash, faClock, faBarcode, faFaceSmile, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

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

function Detail() {
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
                    align="center"
                    w="30%"
                    justify="center"
                    py="1rem"
                >
                    <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px">
                        <CardHeader p="6px 0px 22px 0px">
                            <Flex direction="column" align="center" w="100%">
                                <Flex align="center" w="100%">
                                    <Text fontSize="lg" color="#fff" fontWeight="bold" mb="10px">
                                        Detalles
                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" w="100%">
                                    <img
                                        src={imgHtml}
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                            objectFit: "contain"
                                        }}
                                    />
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" w="100%" mt="10px" >
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} color="yellow" icon={faStar} />
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} color="yellow" icon={faStar} />
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faStar} color="yellow"/>
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faStar} color="yellow"/>
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faStarHalf} color="yellow"/>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" w="100%" mt="10px" >
                                    <Text fontSize="15px" color="yellow"  mb="10px">
                                        4.5 / 5
                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="start" w="100%" mt="10px" style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}>
                                    <Text fontSize="20px" color="#fff" mb="10px" mt="10px">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faEarthAmericas} />
                                        Español

                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="start" w="100%" mt="10px" >
                                    <Text fontSize="20PX" color="#fff" mb="10px">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClock} />
                                        21 hrs

                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="start" w="100%" mt="10px" >
                                    <Text fontSize="20PX" color="#fff" mb="10px">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFaceSmile} />
                                        15 años o más

                                    </Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="start" w="100%" mt="10px" >
                                    <Text fontSize="20PX" color="#fff" mb="10px">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBarcode} />
                                        #QL-12458
                                    </Text>
                                </Flex>
                                <Button
                                    variant="brand"
                                    fontSize="15px"
                                    p="6px 32px"
                                    mt="10px"
                                    W="100%"
                                >
                                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFaceSmile} />
                                    Agregar al carrito
                                </Button>

                            </Flex>
                        </CardHeader>
                        <CardBody>
                        </CardBody>
                    </Card>
                </Flex>
                <Spacer></Spacer>
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    align="start"
                    w="67%"
                    justify="center"
                    py="1rem"
                >
                    <Card my="22px" overflowX={{ sm: "scroll", md: "hidden" }} pb="0px">
                        <CardHeader p="6px 0px 22px 0px">
                            <Flex direction="column" align="center" w="100%">
                                <Flex align="center" w="100%">
                                    <Text fontSize="50px" color="#fff" fontWeight="bold" mb="10px">
                                        Curso HTML5, CSS y JavaScript
                                    </Text>
                                </Flex>
                                <Flex w="100%">
                                    <Text fontSize="14px" color="#fff" mb="10px">
                                        Por: Obed Ariel Hurtado
                                    </Text>
                                </Flex>
                                <Flex w="100%">
                                    <Text fontSize="15px" color="#fff" mb="10px">
                                        Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo INCLUYE 4 PROYECTOS FINALES
                                        En este curso sobre desarrollo web completo, aprenderás los conceptos básicos del desarrollo de aplicaciones web, así como todo sobre HTML, CSS, JavaScript, PHP, etc. y los principios básicos del diseño, de la usabilidad y de la accesibilidad web. Estudiarás cómo crear sitios web utilizando varios lenguajes de programación.
                                    </Text>
                                </Flex>
                                <Flex w="100%">
                                    <Table variant="simple" color="#fff" style={{ marginBottom: "20px", marginLeft: "30px", marginRight: "30px" }}>
                                        <Thead style={{ align: "left" }}>
                                            <Tr my=".8rem" ps="0px">
                                                <Th
                                                    ps="0px"
                                                    color="white"
                                                    fontFamily="Plus Jakarta Display"
                                                    borderBottomColor="#56577A"
                                                >
                                                    Contenido del curso
                                                </Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Th>
                                                    Los proyectos de este curso
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Editores de texto, IDE's y mucho más...
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Creando un proyecto paso a paso: HTML
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Creando un proyecto paso a paso: CSS
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Creando un proyecto paso a paso: HTML y CSS
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Introducción a JavaScript
                                                </Th>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    Introducción a PHP
                                                </Th>
                                            </Tr>

                                        </Tbody>
                                    </Table>
                                </Flex>

                            </Flex>
                        </CardHeader>
                        <CardBody>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </div>
    )
}

export default Detail