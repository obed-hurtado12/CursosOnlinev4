import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Link,
  Switch,
  Text,
  DarkMode,
  LightMode,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import GitHubButton from "react-github-btn";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import GradientBorder from "components/GradientBorder/GradientBorder";

import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import Footer from "components/Footer/Footer";

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  var fecha = new Date();

  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }
  let colorButton = "white";
  const secondaryButtonColor = "white";
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent
          bg="linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)"
          backdropFilter="blur(42px)"
        >
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton color="white" />
            <Text color="white" fontSize="xl" fontWeight="bold" mt="16px">
              Inbox Email
            </Text>
            {/* <Text color='white' fontSize='md' mb='16px'>
              See your dashboard options.
            </Text> */}
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Box>
                  <FormControl>
                    <FormLabel
                      ms="4px"
                      fontSize="sm"
                      fontWeight="normal"
                      color="white"
                    >
                      Para:
                    </FormLabel>
                    <Input
                      color="white"
                      bg="rgb(19,21,54)"
                      border="transparent"
                      borderRadius="20px"
                      fontSize="sm"
                      size="lg"
                      w={{ base: "100%", md: "346px" }}
                      maxW="70%"
                      type="text"
                      placeholder="Destinatario..."
                    />
                  </FormControl>
                  <br />
                  <Text color="white" fontSize="md" fontWeight="600" mb="4px">
                    Cuerpo del Mensaje:
                  </Text>
                  <textarea
                    rows="10"
                    cols="30"
                    style={{ borderRadius: "5%" }}
                    placeholder="Ingrese el mensaje..."
                  ></textarea>
                </Box>
                {/* <Flex
                  justifyContent='center'
                  alignItems='center'
                  w='100%'
                  mb='16px'>
                  <GitHubButton
                    href='https://github.com/creativetimofficial/vision-ui-dashboard-chakra'
                    data-icon='octicon-star'
                    data-show-count='true'
                    aria-label='Star creativetimofficial/vision-ui-dashboard-chakra on GitHub'>
                    Star
                  </GitHubButton>
                </Flex> */}

                <Box
                  display={fixedDisplay}
                  justifyContent="space-between "
                  mb="20px"
                >
                  <DarkMode>
                    <Text color="white" fontSize="md" fontWeight="600" mb="4px">
                      Guardar Borrador
                    </Text>
                    <Switch
                      colorScheme="brand"
                      isChecked={switched}
                      onChange={(event) => {
                        if (switched === true) {
                          props.onSwitch(false);
                          setSwitched(false);
                        } else {
                          props.onSwitch(true);
                          setSwitched(true);
                        }
                      }}
                    />
                  </DarkMode>
                </Box>
                <Box w="100%">
                  <LightMode>
                    <Flex justifyContent="center" alignContent="center">
                      <br />
                      {/* <Link
                        isExternal='true'
                        href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fvision-ui-dashboard-chakra'> */}
                      <Button
                        colorScheme="facebook"
                        // leftIcon={<FaFacebook />}
                      >
                        <Text>Enviar</Text>
                      </Button>
                      {/* </Link> */}
                    </Flex>
                  </LightMode>
                </Box>

                <br /><br />

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                  <strong style={{color:"#fff"}}>
                    <label className="form-control-label">Fecha</label>
                  </strong>
                  <br />
                  <DatePicker
                    value={fechaSeleccionada}
                    onChange={setFechaSeleccionada}
                    minDate={fecha}
                    required="required"
                  />
                </MuiPickersUtilsProvider>

                <br /><br />

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                  <strong style={{color:"#fff"}}>
                    <label className="form-control-label">Hora</label>
                  </strong>
                  <br />
                  <TimePicker
                    value={fechaSeleccionada}
                    onChange={setFechaSeleccionada}
                    required="required"
                  />
                </MuiPickersUtilsProvider>

                <br /><br />

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                  <strong style={{color:"#fff"}}>
                    <label className="form-control-label">Fecha y Hora</label>
                  </strong>
                  <br />
                  <DateTimePicker
                    value={fechaSeleccionada}
                    onChange={setFechaSeleccionada}
                    required="required"
                  />
                </MuiPickersUtilsProvider>
                <br /><br /><br />
                <Footer/>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
