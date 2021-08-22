import React from "react";
import { PageProps } from "gatsby";
import { Box } from "@material-ui/core";

import Layout from "../components/layout";

const Membership: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
      <div className="row" id="content">
        <div className="column" id="content">
          <p>
            ผู้เล่นสามารถเล่นทั้งสองเกมได้ฟรีแบบมีข้อจำกัด
            การเติมสถานะสมาชิกจะปลดล็อกสกิล เควสต์ สถานที่ และระบบต่าง ๆ ในเกม
            ซึ่งเมื่อเติมเวลาสมาชิกใน RuneScape 3 หรือ OldSchool RuneScape
            ผู้เล่นจะได้รับสถานะการเป็นสมาชิกในทั้งสองเกม
            ไม่จำเป็นต้องซื้อสมาชิกแยกต่างหาก
          </p>
          <h2>วิธีเติมสถานะสมาชิก</h2>
          <h3> RuneScape </h3>
          <ul>
            <li>
              {" "}
              ซื้อผ่านเว็บไซต์{" "}
              <a href="https://www.runescape.com/members_benefits">
                {" "}
                RuneScape{" "}
              </a>
            </li>
            <li>
              {" "}
              ซื้อไอเท็ม <a href="https://www.runescape.com/bonds">
                {" "}
                Bonds{" "}
              </a>{" "}
              ผ่านทางเว็บไซต์แล้วกดใช้
            </li>
            <li>
              {" "}
              ซื้อ Bonds ผ่านทาง{" "}
              <a href="https://runescape.wiki/w/Grand_Exchange">
                Grand Exchange
              </a>
              ในเกมแล้วกดใช้
            </li>
          </ul>
          <h3> OldSchool RuneScape</h3>
          <ul>
            <li>
              {" "}
              สมัครผ่านเว็บไซต์{" "}
              <a href="https://oldschool.runescape.com/">
                {" "}
                OldSchool RuneScape{" "}
              </a>{" "}
              (ต้องล็อกอิน){" "}
            </li>
            <li>
              {" "}
              ซื้อไอเท็ม{" "}
              <a href="https://www.runescape.com/oldschool/bonds">
                Old School Bonds
              </a>{" "}
              ผ่านทางเว็บไซต์แล้วกดใช้
            </li>
            <li>
              {" "}
              ซื้อ Old School Bonds ผ่านทาง{" "}
              <a href="https://oldschool.runescape.wiki/w/Grand_Exchange">
                {" "}
                Grand Exchange{" "}
              </a>{" "}
              ในเกมแล้วกดใช้{" "}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Membership;
