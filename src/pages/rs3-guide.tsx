import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";


import Layout from "../components/layout";

const RS3: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8"/>
        <title> แนะนำผู้เล่นใหม่ RS3 </title>
      </Helmet>
      ยังไม่มีข้อมูลในขณะนี้
    </Layout>
  );
};

export default RS3;
