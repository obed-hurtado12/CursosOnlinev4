// Chakra Imports
import { Button, useColorModeValue } from "@chakra-ui/react";
// Custom Icons
import { SettingsIcon } from "components/Icons/Icons";
import PropTypes from "prop-types";
import React from "react";

import message from "../../assets/img/Logos/message.png"
export default function FixedPlugin(props) {
  const { secondary, onChange, onSwitch, fixed, ...rest } = props;
  // Chakra Color Mode
  let navbarIcon = "white";
  let bgButton = "brand.200";
  // if (props.secondary) {
  //   fixedDisplay = "none";
  // }

  const settingsRef = React.useRef();
  return (
    <>
      <Button
        h='90px'
        w='90px'
        onClick={props.onOpen}
        // bg={message}
        position='fixed'
        variant='no-hover'
        left={document.documentElement.dir === "rtl" ? "35px" : ""}
        right={document.documentElement.dir === "rtl" ? "" : "35px"}
        bottom='30px'
        borderRadius='50px'
        boxShadow='0 2px 12px 0 rgb(0 0 0 / 16%)'>
        <img src={message} style={{height:'50px', width:'50px'}}></img>
      </Button>
    </>
  );
}

FixedPlugin.propTypes = {
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  onSwitch: PropTypes.func,
};
