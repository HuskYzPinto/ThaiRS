import React, { Props } from "react";
import { PageProps } from "gatsby";
import { Box } from "@material-ui/core";


import Layout from "../components/layout";

const Introduction: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
        <div className="row" id="content">
          <div className="column" id="content">
            <h2>เล่นในไหนได้บ้าง?</h2>
            <h3>RuneScape</h3>
            <ul>
              <li>
                ดาวน์โหลดตัวเกมโดยตรงจาก
                <a href="https://www.runescape.com/a=13/download">
                  เว็บไซต์อย่างเป็นทางการ
                </a>
              </li>
              <li>
                ดาวน์โหลดตัวเกมผ่านทาง
                <a href="https://store.steampowered.com/app/1343400/RuneScape/">
                  Steam
                </a>
              </li>
              <li>
                เล่นผ่านมือถือ [
                <a href="https://apps.apple.com/au/app/old-school-runescape/id1269648762">
                  iOS
                </a>
                |
                <a href="https://play.google.com/store/apps/details?id=com.jagex.runescape.android">
                  Android
                </a>
                ]
              </li>
            </ul>
            <h3>OldSchool RuneScape</h3>
            <ul>
              <li>
                ดาวน์โหลดตัวเกมโดยตรงจาก
                <a href="https://oldschool.runescape.com/a=13/download/">
                  เว็บไซต์อย่างเป็นทางการ
                </a>
              </li>
              <li>
                ดาวน์โหลดตัวเกมผ่านทาง
                <a href="https://store.steampowered.com/app/1343370/Old_School_RuneScape/">
                  Steam
                </a>
              </li>
              <li>
                เล่นบนคอมพิวเตอร์ผ่านทาง
                <a href="https://runelite.net/"> RuneLite </a>
              </li>
              <li>
                เล่นผ่านมือถือ [
                <a href="https://apps.apple.com/us/app/old-school-runescape/id1269648762">
                  iOS
                </a>
                |
                <a href="https://play.google.com/store/apps/details?id=com.jagex.oldscape.android">
                  Android
                </a>
                ]
              </li>
            </ul>

            <h2>เปรียบเทียบ OldSchool RuneScape กับ RuneScape</h2>

            <p>
              เดิมแล้ว OldSchool RuneScape เป็นตัวเกมที่แยกมาจาก RuneScape
              สำหรับผู้เล่นที่ไม่ชอบระบบการต่อสู้แบบใหม่
              แต่ปัจจุบันทั้งสองเกมมีเนื้อหาใหม่เพิ่มเข้ามาแตกต่างกัน
            </p>
            <table id="comparison">
              <thead>
                <th></th>
                <th>OSRS</th>
                <th>RS3</th>
              </thead>
              <tr>
                <th>สกิล</th>
                <td>ผู้เล่นฟรี 15 สกิล | สมาชิก 23 สกิล สูงสุดเลเวล 99</td>
                <td>
                  ผู้เล่นฟรี 17 สกิล (สามารถเล่นสกิลสมาชิกได้ถึงเลเวล 5) |
                  สมาชิก 28 สกิล สูงสุดเลเวล 120
                </td>
              </tr>
              <tr>
                <th>เควสต์</th>
                <td>ผู้เล่นฟรี 22 เควสต์ | สมาชิก 150 เควสต์</td>
                <td>ผู้เล่นฟรี 40 เควสต์ | สมาชิก 231 เควสต์</td>
              </tr>
              <tr>
                <th>ระบบการต่อสู้</th>
                <td>
                  Legacy: โจมตีธรรมดา มีแค่ Special Attack ใช้ได้บางครั้ง
                  ไม่มีสกิลอื่น
                </td>
                <td>
                  3 รูปแบบ: Legacy (เหมือน OSRS), Revolution
                  (เลือกสกิลมาใส่ตามช่องแล้วเกมใช้สกิลให้อัตโนมัติ), Manual
                  (กดสกิลเองทุกอย่าง)
                </td>
              </tr>
              <tr>
                <th>ระบบ Home Teleport</th>
                <td>จุดหมายปลายทางจำกัด มี Cooldown นาน</td>
                <td>
                  เดินทางไปที่จุดเซฟใดก็ได้
                  สามารถซื้อไอเท็มเพื่อเพิ่มความเร็วในการเทเลพอร์ต
                </td>
              </tr>
              <tr>
                <th>ร้านค้าเติมเงินในเกม</th>
                <td>ไม่มีระบบเติมเงิน</td>
                <td>สามารถเติมเงินซื้อไอเท็มพิเศษได้</td>
              </tr>
              <tr>
                <th>Game Mode</th>
                <td>Normal | Iron Man | Hardcore Ironman | Ultimate Ironman</td>
                <td>Normal | Iron Man | Hardcore Ironman </td>
              </tr>
            </table>

            <p>ถ้าใครสนใจดูวิดีโอเพิ่มเติมก่อนเล่น RuneScape</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gu01EoUrDpI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p7a5PIQYFec"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
    </Layout>
  );
};

export default Introduction;
