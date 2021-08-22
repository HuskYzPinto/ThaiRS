import React from "react";
import { PageProps } from "gatsby";
import { Box } from "@material-ui/core";

import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const Error: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title> Error 404: Page Not Found </title>
      </Helmet>{" "}
      Hello, you exploded something there!{" "}
    </Layout>
  );
};

export default Error;
