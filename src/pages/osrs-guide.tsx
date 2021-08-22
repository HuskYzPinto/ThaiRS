import React from "react";
import { PageProps } from "gatsby";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import Layout from "../components/layout";

const SkillTable = styled.table`
  align-self: left;
  background: #07292e;
  text-align: center;
  margin: 10px;

  tr td {
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 8px;
    padding-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 10pt;
    }
  }

  th {
    height: 5vh;
    font-size: 11pt;
    @media (max-width: 768px) {
      font-size: 10pt;
    }
  }

  .osrs_skills_info {
    width: 5%;

    @media (max-width: 768px) {
      width: auto;
    }
  }
  .osrs_skills_desc {
    width: 50%;
    @media (max-width: 768px) {
      width: auto;
    }
  }
`;

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const OSRS: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
      <h2>สกิล</h2>
      <p>
        {" "}
        ใน OldSchool RuneScape มีสกิลทั้งหมด 22 สกิล
        ซึ่งในนี้เป็นสกิลสำหรับผู้เล่นฟรี 15 สกิล และ สกิลสำหรับสมาชิกเท่านั้น 7
        สกิล{" "}
      </p>
      <p>
        {" "}
        ผู้เล่นฟรีสามารถพัฒนาสกิลฟรีได้จนถึงเลเวล 99 อย่างไรก็ตาม
        วิธีการในการเพิ่มเลเวลสำหรับผู้เล่นฟรีค่อนข้างจำกัดเมื่อเทียบกับสมาชิก
      </p>
      <SkillTable>
        <thead>
          <tr>
            <th className="osrs_skills_info">ไอคอน</th>
            <th className="osrs_skills_info">ชื่อสกิล</th>
            <th className="osrs_skills_info">สถานะ</th>
            <th className="osrs_skills_desc">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/f/fe/Attack_icon.png?b4bce" />
            </td>
            <td>Attack</td>
            <td>ฟรี</td>
            <td>
              จำเป็นในการสวมใส่อาวุธระยะใกล้
              และเพิ่มความแม่นยำในการโจมตีระยะประชิด
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/1/1b/Strength_icon.png?e6e0c" />
            </td>
            <td>Strength</td>
            <td>ฟรี</td>
            <td>เพิ่มพลังการโจมตีระยะประชิด</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/4/41/Defence.png?deeb7" />
            </td>
            <td>Defence</td>
            <td>ฟรี</td>
            <td>จำเป็นในการสวมใส่เกราะป้องกัน เพิ่มพลังป้องกันทางกายภาพ</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/1/19/Ranged_icon.png?01b0e" />
            </td>
            <td>Range</td>
            <td>ฟรี</td>
            <td>
              จำเป็นในการสวมใส่อาวุธโจมตีระยะไกล
              เพิ่มความแม่นยำและพลังโจมตีอาวุธระยะไกล
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/f/f2/Prayer_icon.png?ca0dc" />
            </td>
            <td>Prayer</td>
            <td>ฟรี</td>
            <td>
              ใช้สำหรับบัฟต่าง ๆ เช่น เพิ่มพลังโจมตี
              ป้องกันจากการโจมตีประเภทต่าง ๆ เป็นต้น
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/5/5c/Magic_icon.png?334cf" />
            </td>
            <td>Magic</td>
            <td>ฟรี</td>
            <td>ใช้ร่ายคาถาต่าง ๆ เพิ่มความแม่นยำและพลังป้องกันทางเวทย์</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/6/63/Runecraft_icon.png?c278c" />
            </td>
            <td>Runecraft</td>
            <td>ฟรี</td>
            <td>
              สกิลผลิตรูน ผู้เล่นสามารถนำ Essence ไปแปลงให้เป็นรูนต่าง ๆ
              ไว้ใช้ในการร่ายเวทย์ได้
              ถือเป็นหนึ่งในสกิลที่ใช้เวลาในการฝึกนานที่สุด
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/9/96/Hitpoints_icon.png?a4819" />
            </td>
            <td>Hitpoints</td>
            <td>ฟรี</td>
            <td>เพิ่มเลือด</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/c/cf/Crafting_icon.png?a1f71" />
            </td>
            <td>Crafting</td>
            <td>ฟรี</td>
            <td>สร้างเครื่องประดับและเกราะสำหรับการโจมตีระยะไกล</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/4/4a/Mining_icon.png?00870" />
            </td>
            <td>Mining</td>
            <td>ฟรี</td>
            <td>ขุดแร่และอัญมณีต่าง ๆ</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/d/dd/Smithing_icon.png?d26c5" />
            </td>
            <td>Smithing</td>
            <td>ฟรี</td>
            <td>
              หลอมแร่ให้กลายเป็นโลหะชนิดต่าง ๆ และใช้ตีอาวุธและเกราะที่ทำจากโลหะ
              (ส่วนมากสำหรับโจมตีระยะใกล้)
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/3/3b/Fishing_icon.png?15a98" />
            </td>
            <td>Fishing</td>
            <td>ฟรี</td>
            <td>ตกปลา บางชนิดสามารถนำมาทำให้สุก ใช้ทานเพื่อฟื้นฟู HP ได้</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/d/dc/Cooking_icon.png?a0156" />
            </td>
            <td>Cooking</td>
            <td>ฟรี</td>
            <td>ทำอาหารต่าง ๆ ยิ่งระดับสูงจะยิ่งทำอาหารไหม้น้อยลง</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/9/9b/Firemaking_icon.png?45ea0" />
            </td>
            <td>Firemaking</td>
            <td>ฟรี</td>
            <td>
              จุดไฟ สามารถใช้ไม้ขีดไฟกับขอนไม้เพื่อสร้างแคมป์ไฟ เอาไว้ทำอาหารได้
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/f/f4/Woodcutting_icon.png?6ead4" />
            </td>
            <td>Woodcutting</td>
            <td>ฟรี</td>
            <td>
              ตัดต้นไม้ สามารถใช้ไม้ขีดไฟเพื่อจุดไฟ หรือใช้มีดเพื่อ Fletch
              ให้เป็นลูกศร ธนู หรือโล่ หรือนำไปแปลงรูปเป็นแผ่นไม้
              ใช้ในการก่อสร้าง
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/8/86/Agility_icon.png?389e0" />
            </td>
            <td>Agility</td>
            <td>สมาชิก</td>
            <td>
              เพิ่มความคล่องแคล่ว ยิ่งเลเวลสูงยิ่งทำให้สามารถวิ่งได้นานขึ้น
              สามารถใช้ Shortcut ได้
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/0/03/Herblore_icon.png?ffa9e" />
            </td>
            <td>Herblore</td>
            <td>สมาชิก</td>
            <td>สกิลการปรุงยา สำหรับใช้ผสม Potion ต่าง ๆ ในเกม</td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/4/4a/Thieving_icon.png?973fe" />
            </td>
            <td>Thieving</td>
            <td>สมาชิก</td>
            <td>
              สกิลขโมยของจาก NPC ต่าง ๆ ได้ของตอบแทนเป็นไอเท็มหรือเงิน
              ยิ่งมีระดับสูงจะยิ่งเพิ่มโอกาสประสบความสำเร็จ
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/2/28/Slayer_icon.png?cd34f" />
            </td>
            <td>Slayer</td>
            <td>สมาชิก</td>
            <td>
              สกิลล่ามอนสเตอร์ในเกม ซึ่ง NPC จะกำหนดชนิดของมอนสเตอร์ที่ต้องการ
              เมื่อฆ่ามอนสเตอร์ชนิดนั้น ๆ จนครบตามกำหนดจะได้แต้ม
              นอกจากนั้นยังมีมอนสเตอร์พิเศษบางชนิดที่สามารถโจมตีได้เฉพาะ
              ผู้เล่นได้รับมอบหมายให้ล่าเท่านั้น
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/f/fc/Farming_icon.png?558fa" />
            </td>
            <td>Farming</td>
            <td>สมาชิก</td>
            <td>
              สกิลทำฟาร์ม สามารถปลูกต้นไม้ สมุนไพร และพืชชนิดต่าง ๆ ได้
              เป็นวิธีหาเงินแบบ Passive ยอดนิยมในหมู่ผู้เล่น OldSchool RuneScape
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/f/f6/Construction_icon.png?f9bf7" />
            </td>
            <td>Construction</td>
            <td>สมาชิก</td>
            <td>
              สกิลก่อสร้าง ซึ่งใน OSRS ผู้เล่นจะสามารถสร้างและต่อเติมบ้าน
              (Player-owned House) อำนวยความสะดวกในการเล่นเกม
              เช่นวางไอเท็มสำหรับเทเลพอร์ต บ่อสำหรับฟื้นฟูพลังงาน เป็นต้น
            </td>
          </tr>
          <tr>
            <td>
              <SkillIcon src="https://oldschool.runescape.wiki/images/d/dd/Hunter_icon.png?8762f" />
            </td>
            <td>Hunter</td>
            <td>สมาชิก</td>
            <td>
              สกิลล่าสัตว์ ใช้จับสัตว์ชนิดต่าง ๆ ในเกม บางชนิดเอาไว้ใช้เป็นอาวุธ
              บางชนิดเอาไว้ทำเครื่องสวมใส่ หรือบางชนิดให้กล่องรางวัลตอบแทน
            </td>
          </tr>
        </tbody>
      </SkillTable>
      <h2> เควสต์</h2>
      <p> [ข้อมูลกำลังอยู่ในระหว่างการจัดทำ]</p>
    </Layout>
  );
};

export default OSRS;
