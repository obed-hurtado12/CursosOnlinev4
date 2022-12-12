// Chakra imports
import {
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
  } from "@chakra-ui/react";
  // Styles for the circular progressbar
  import medusa from "assets/img/cardimgfree.png";
  // Custom components
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import CardHeader from "components/Card/CardHeader.js";
  import BarChart from "components/Charts/BarChart";
  import LineChart from "components/Charts/LineChart";
  import IconBox from "components/Icons/IconBox";
  // Icons
  import {
	CartIcon,
	DocumentIcon,
	GlobeIcon,
	RocketIcon,
	StatsIcon,
	WalletIcon,
  } from "components/Icons/Icons.js";
  import DashboardTableRow from "components/Tables/DashboardTableRow";
  import TimelineRow from "components/Tables/TimelineRow";
  import React from "react";
  import { AiFillCheckCircle } from "react-icons/ai";
  import { BiHappy } from "react-icons/bi";
  import { BsArrowRight } from "react-icons/bs";
  import {
	IoCheckmarkDoneCircleSharp,
	IoEllipsisHorizontal,
  } from "react-icons/io5";
  // Data
  import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard,
  } from "variables/charts";
  import { dashboardTableData, timelineData } from "variables/general";
  
  //Images
  import imgReact from "../../assets/img/Frameworks/LogoReactJs1.png";
  import imgNode from "../../assets/img/Frameworks/LogoNodeJs2.png";
  import imgHtml from "../../assets/img/Frameworks/LogoHtml3.png";
  import imgMonngo from "../../assets/img/Frameworks/LogoMongoDB4.png";
  
  import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
  
  export default function Dashboard() {
	const titleColor = "white";
	const textColor = "gray.400";
	return (
	  <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
		<Grid
		  templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
		  my="26px"
		  gap="18px"
		>
		  {/* Welcome Card */}
		  <Card
			p="0px"
			gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
			bgImage={medusa}
			bgSize="cover"
			bgPosition="50%"
		  >
			<CardBody w="100%" h="100%">
			  <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%" h="100%">
				<Flex
				  flexDirection="column"
				  h="100%"
				  p="22px"
				  minW="60%"
				  lineHeight="1.6"
				>
				  <Text fontSize="sm" color="gray.400" fontWeight="bold">
					Bienvenido,
				  </Text>
				  <Text fontSize="28px" color="#fff" fontWeight="bold" mb="18px">
					Cursos en Línea
				  </Text>
				  <Text
					fontSize="md"
					color="gray.400"
					fontWeight="normal"
					mb="auto"
				  >
					<strong>
					  Adquiere los mejores conocimientos en cualquier Área de
					  Programación! <br />
					  Encuentra cualquier curso que desees!
					</strong>
				  </Text>
				  <Spacer />
				  <Flex align="center">
					<Button
					  p="0px"
					  variant="no-hover"
					  bg="transparent"
					  my={{ sm: "1.5rem", lg: "0px" }}
					>
					  <Text
						fontSize="sm"
						color="#fff"
						fontWeight="bold"
						cursor="pointer"
						transition="all .3s ease"
						my={{ sm: "1.5rem", lg: "0px" }}
						_hover={{ me: "4px" }}
					  >
						Iniciar
						{/* Tab to record */}
					  </Text>
					  <Icon
						as={BsArrowRight}
						w="20px"
						h="20px"
						color="#fff"
						fontSize="2xl"
						transition="all .3s ease"
						mx=".3rem"
						cursor="pointer"
						pt="4px"
						_hover={{ transform: "translateX(20%)" }}
					  />
					</Button>
				  </Flex>
				</Flex>
			  </Flex>
			</CardBody>
		  </Card>
		</Grid>
		<br />
		<Text
		  fontSize="28px"
		  color="#fff"
		  fontWeight="bold"
		  mb="18px"
		  textAlign={{
			base: "center",
			xl: "start",
		  }}
		>
		  <strong>¡PORQUE QUIERES, PUEDES Y TE LO MERECES!</strong>
		</Text>
  
		<Text
		  fontSize="28px"
		  color="#fff"
		  fontWeight="light"
		  mb="18px"
		  textAlign={{
			base: "center",
			xl: "start",
		  }}
		>
		  ¿QUÉ TE GUSTARÍA APRENDER?
		</Text>
  
		<Text
		  fontSize="20px"
		  color="#fff"
		  fontWeight="boldS"
		  mb="18px"
		  textAlign={{
			base: "center",
			xl: "start",
		  }}
		>
		  Elige entre nuestras mejores opciones de cursos, aprender y desarrollar
		  Backend y Frontend desde cualquier Framework,
		  <br /> y eso es posible en
		  <strong>
			<i>{" "}Cursos en Línea</i>
		  </strong>
		  .<br /> Los mejores profesores en cualquier área de Desarrollo de
		  Software
		</Text>
		<br />
		<br />
		<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
		  <Card>
			<CardBody>
			  <Flex flexDirection="row" align="center" justify="center" w="100%">
				<img src={imgReact} style={{ height: "100px", width: "100px" }} />
				<Stat me="auto">
				  <StatLabel
					fontSize="sm"
					color="gray.400"
					fontWeight="bold"
					pb="2px"
				  >
					Curso React JS
				  </StatLabel>
				  <Flex>
					<StatNumber fontSize="lg" color="#fff">
					  $500
					</StatNumber>
					<StatHelpText
					  alignSelf="flex-end"
					  justifySelf="flex-end"
					  m="0px"
					  color="green.400"
					  fontWeight="bold"
					  ps="3px"
					  fontSize="md"
					>
					  +55%
					</StatHelpText>
				  </Flex>
				</Stat>
				<IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
				  <WalletIcon h={"24px"} w={"24px"} color="#fff" />
				</IconBox>
			  </Flex>
			</CardBody>
		  </Card>
		  <Card minH="83px">
			<CardBody>
			  <Flex flexDirection="row" align="center" justify="center" w="100%">
				<img src={imgNode} style={{ height: "100px", width: "150px" }} />
				{/* <SimpleGrid spacingX="300px" pb="10px"> */}
				<Stat me="auto">
				  <StatLabel
					fontSize="sm"
					color="gray.400"
					fontWeight="bold"
					pb="2px"
				  >
					Curso Node JS
				  </StatLabel>
				  <Flex>
					<StatNumber fontSize="lg" color="#fff">
					  $230
					</StatNumber>
					<StatHelpText
					  alignSelf="flex-end"
					  justifySelf="flex-end"
					  m="0px"
					  color="green.400"
					  fontWeight="bold"
					  ps="3px"
					  fontSize="md"
					>
					  +5%
					</StatHelpText>
				  </Flex>
				</Stat>
				<IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
				  <GlobeIcon h={"24px"} w={"24px"} color="#fff" />
				</IconBox>
				{/* </SimpleGrid> */}
			  </Flex>
			</CardBody>
		  </Card>
		  <Card>
			<CardBody>
			  <Flex flexDirection="row" align="center" justify="center" w="100%">
				<img src={imgHtml} style={{ height: "100px", width: "100px" }} />
				<Stat>
				  <StatLabel
					fontSize="sm"
					color="gray.400"
					fontWeight="bold"
					pb="2px"
				  >
					Curso HTML5, CSS y JavaScript
				  </StatLabel>
				  <Flex>
					<StatNumber fontSize="lg" color="#fff">
					  $320
					</StatNumber>
					<StatHelpText
					  alignSelf="flex-end"
					  justifySelf="flex-end"
					  m="0px"
					  color="red.500"
					  fontWeight="bold"
					  ps="3px"
					  fontSize="md"
					>
					  -14%
					</StatHelpText>
				  </Flex>
				</Stat>
				<Spacer />
				<IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
				  <DocumentIcon h={"24px"} w={"24px"} color="#fff" />
				</IconBox>
			  </Flex>
			</CardBody>
		  </Card>
		  <Card>
			<CardBody>
			  <Flex flexDirection="row" align="center" justify="center" w="100%">
				<img
				  src={imgMonngo}
				  style={{ height: "100px", width: "150px" }}
				/>
				<Stat me="auto">
				  <StatLabel
					fontSize="sm"
					color="gray.400"
					fontWeight="bold"
					pb="2px"
				  >
					Curso Mongo DB
				  </StatLabel>
				  <Flex>
					<StatNumber fontSize="lg" color="#fff" fontWeight="bold">
					  $370
					</StatNumber>
					<StatHelpText
					  alignSelf="flex-end"
					  justifySelf="flex-end"
					  m="0px"
					  color="green.400"
					  fontWeight="bold"
					  ps="3px"
					  fontSize="md"
					>
					  +8%
					</StatHelpText>
				  </Flex>
				</Stat>
				<IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
				  <CartIcon h={"24px"} w={"24px"} color="#fff" />
				</IconBox>
			  </Flex>
			</CardBody>
		  </Card>
		</SimpleGrid>
	  </Flex>
	);
  }
  