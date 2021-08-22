import React from "react";
import { PageProps } from "gatsby";
import { Box } from "@material-ui/core";

import Layout from "../components/layout";

const Error: React.FC<PageProps> = (props: PageProps) => {
  return <Layout> Hello, you exploded something there! </Layout>;
};

export default Error;
