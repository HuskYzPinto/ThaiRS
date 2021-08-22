import React from "react";

import { Box } from "@material-ui/core";

interface Props {}

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <Box>
      <footer className="container">
        <div>Made by Huskiez 2021 ©</div>
      </footer>
    </Box>
  );
};

export default Footer;
