import React from "react";

// Chakra imports
import { Box, Button, Flex, Grid, Icon, Spacer, Text } from "@chakra-ui/react";

// Images
import BackgroundCard1 from "assets/img/billing-background-card.png";
import Banco1 from "../../assets/img/Fondos/Banco1.jpg"
import Banco2 from "../../assets/img/Fondos/Banco2.png"
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";
import IconBox from "components/Icons/IconBox";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";

// Icons
import { FaPencilAlt, FaRegCalendarAlt, FaTrashAlt } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RiMastercardFill } from "react-icons/ri";
import {
  BillIcon,
  GraphIcon,
  MastercardIcon,
  VisaIcon,
} from "components/Icons/Icons";

// Data
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";

function Billing() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} mx="auto">
      <Grid templateColumns={{ sm: "1fr", lg: "95% 50%" }}>
        {/* RESUMEN DE COMPRA */}
        <Card
          p="22px"
          my={{ sm: "24px", lg: "0px" }}
          ms={{ sm: "0px", lg: "24px" }}
        >
          <CardHeader>
            <Flex
              justify="space-between"
              align="center"
              mb="1rem"
              w="100%"
              // mb='28px'
            >
              <Text fontSize="lg" color="#fff" fontWeight="bold">
                Resumen de Compra
              </Text>
            </Flex>
          </CardHeader>

          {/* CUADRO CENTRAL */}
          <Flex direction="column">
            <Flex
              justify="space-between"
              p="22px"
              mb="18px"
              bg="linear-gradient(127.09deg, rgba(34, 41, 78, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              borderRadius="18px"
            >
              {/* MASTERCARD */}
              <Flex direction="column">
                <Card
                  backgroundImage={BackgroundCard1}
                  backgroundRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="10%"
                  p="16px"
                >
                  <CardBody h="100%" w="100%">
                    <Flex
                      direction="column"
                      color="white"
                      h="100%"
                      p="0px 10px 20px 10px"
                      w="100%"
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontSize="md" fontWeight="bold">
                          Banamex
                        </Text>
                        <Icon
                          as={RiMastercardFill}
                          w="48px"
                          h="auto"
                          color="gray.400"
                        />
                      </Flex>
                      <Spacer />
                      <Text fontSize="md" fontWeight="bold">
                        Obed Ariel Hurtado Hernández
                      </Text>
                      <br />
                      <Flex direction="column">
                        <Box>
                          <Text
                            fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
                            letterSpacing="2px"
                            fontWeight="bold"
                          >
                            4169 1607 1080 0336
                          </Text>
                        </Box>
                        <Flex mt="14px">
                          <Flex direction="column" me="34px">
                            <Text fontSize="xs">GOOD THRU</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              10/27
                            </Text>
                          </Flex>
                          <Flex direction="column">
                            <Text fontSize="xs">CVV</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              456
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              </Flex>
              <Flex direction="column">
                <Card
                  backgroundImage={Banco1}
                  backgroundRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="10%"
                  p="16px"
                >
                  <CardBody h="100%" w="100%">
                    <Flex
                      direction="column"
                      color="white"
                      h="100%"
                      p="0px 10px 20px 10px"
                      w="100%"
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontSize="md" fontWeight="bold">
                          Banorte
                        </Text>
                        <Icon
                          as={RiMastercardFill}
                          w="48px"
                          h="auto"
                          color="gray.400"
                        />
                      </Flex>
                      <Spacer />
                      <Text fontSize="md" fontWeight="bold">
                        Obed Ariel Hurtado Hernández
                      </Text>
                      <br />
                      <Flex direction="column">
                        <Box>
                          <Text
                            fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
                            letterSpacing="2px"
                            fontWeight="bold"
                          >
                            4169 1607 1080 0336
                          </Text>
                        </Box>
                        <Flex mt="14px">
                          <Flex direction="column" me="34px">
                            <Text fontSize="xs">GOOD THRU</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              10/27
                            </Text>
                          </Flex>
                          <Flex direction="column">
                            <Text fontSize="xs">CVV</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              456
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              </Flex>
              <Flex direction="column">
                <Card
                  backgroundImage={Banco2}
                  backgroundRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="10%"
                  p="16px"
                >
                  <CardBody h="100%" w="100%">
                    <Flex
                      direction="column"
                      color="white"
                      h="100%"
                      p="0px 10px 20px 10px"
                      w="100%"
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontSize="md" fontWeight="bold">
                          BanCoppel
                        </Text>
                        <Icon
                          as={RiMastercardFill}
                          w="48px"
                          h="auto"
                          color="gray.400"
                        />
                      </Flex>
                      <Spacer />
                      <Text fontSize="md" fontWeight="bold">
                        Obed Ariel Hurtado Hernández
                      </Text>
                      <br />
                      <Flex direction="column">
                        <Box>
                          <Text
                            fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
                            letterSpacing="2px"
                            fontWeight="bold"
                          >
                            4169 1607 1080 0336
                          </Text>
                        </Box>
                        <Flex mt="14px">
                          <Flex direction="column" me="34px">
                            <Text fontSize="xs">GOOD THRU</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              10/27
                            </Text>
                          </Flex>
                          <Flex direction="column">
                            <Text fontSize="xs">CVV</Text>
                            <Text fontSize="xs" fontWeight="bold">
                              456
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              </Flex>
            </Flex>
          </Flex>

          <br />
          <CardBody>
            <Flex direction="column" w="100%">
              {invoicesData.map((row) => {
                return (
                  <>
                    <InvoicesRow
                      date={row.date}
                      code={row.code}
                      price={row.price}
                      //logo={row.logo}
                      //format={row.format}
                    />
                  </>
                );
              })}
            </Flex>
          </CardBody>
          {/* METODOS DE PAGO */}
          <Flex
            direction={{ sm: "column", md: "row" }}
            align="center"
            w="100%"
            justify="center"
            py="1rem"
          >
            <GradientBorder
              mb={{ sm: "24px", md: "0px" }}
              me={{ sm: "0px", md: "24px" }}
              w="100%"
              borderRadius="20px"
            >
              <Flex
                p="22px"
                bg="rgb(31, 35, 89)"
                border="transparent"
                borderRadius="20px"
                align="center"
                w="100%"
              >
                <IconBox me="10px" w="25px" h="22px">
                  <MastercardIcon w="100%" h="100%" />
                </IconBox>
                <Text color="#fff" fontSize="sm">
                  7812 2139 0823 XXXX
                </Text>
                <Spacer />
                <Button
                  p="0px"
                  bg="transparent"
                  w="16px"
                  h="16px"
                  variant="no-hover"
                >
                  <Icon as={FaPencilAlt} color="#fff" w="12px" h="12px" />
                </Button>
              </Flex>
            </GradientBorder>
            <GradientBorder w="100%" borderRadius="20px">
              <Flex
                p="22px"
                bg="rgb(31, 35, 89)"
                w="100%"
                borderRadius="20px"
                border="transparent"
                align="center"
              >
                <IconBox me="10px" w="25px" h="25px">
                  <VisaIcon w="100%" h="100%" color="#fff" />
                </IconBox>
                <Text color="#fff" fontSize="sm">
                  7812 2139 0823 XXXX
                </Text>
                <Spacer />
                <Button
                  p="0px"
                  bg="transparent"
                  w="16px"
                  h="16px"
                  variant="no-hover"
                >
                  <Icon as={FaPencilAlt} color="#fff" w="12px" h="12px" />
                </Button>
              </Flex>
            </GradientBorder>
          </Flex>
          {/* TOTAL DE COMPRA */}
          <Flex direction="column">
            <Flex
              justify="space-between"
              p="22px"
              mb="18px"
              bg="linear-gradient(127.09deg, rgba(34, 41, 78, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              borderRadius="18px"
            >
              <Flex direction="column">
                <Text color="#E9EDF7" fontSize="12px">
                  Total de compra:
                </Text>
                <Text color="#fff" fontWeight="bold" fontSize="34px">
                  $1,810
                </Text>
              </Flex>
              <Flex direction="column">
                <Button
                  bg="transparent"
                  _hover="none"
                  _active="none"
                  alignSelf="flex-end"
                  p="0px"
                >
                  <Icon
                    as={IoEllipsisHorizontalSharp}
                    color="#fff"
                    w="24px"
                    h="24px"
                    justifySelf="flex-start"
                    alignSelf="flex-start"
                  />
                </Button>
                <GraphIcon w="60px" h="18px" />
              </Flex>
            </Flex>
          </Flex>
          <Button
            variant="brand"
            fontSize="10px"
            fontWeight="bold"
            p="6px 32px"
          >
            Pagar
          </Button>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Billing;