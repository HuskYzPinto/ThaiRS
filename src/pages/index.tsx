import React from "react";
import { PageProps } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

const NewsPost = styled.div`
  border-style: solid;
  padding: 5px;
`;

const Index: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Layout>
      <h2>ข่าวสารล่าสุด</h2>
      <NewsPost>
        <h3>[OSRS] แพทช์วันที่ 30 มิถุนายน 2564</h3>
        <ul>
          <li>เพิ่มบอส Nightmare แบบ hard mode</li>
          <li>เพิ่มไอเท็มใหม่ ดังนี้</li>
          <ul>
            <li>Bow of Faerdhinen</li>
            <li>Amethyst Darts</li>
          </ul>
          <li>ปรับบาลานซ์ไอเท็มต่าง ๆ ดังนี้</li>
          <ul>
            <li>Crystal Armour</li>
            <li>Toxic Blowpipe</li>
            <li>Shayzien Armour</li>
            <li>Armadyl Crossbow</li>
            <li>Crystal Bow</li>
            <li>Dragonhunter Crossbow</li>
            <li>Odium Ward</li>
            <li>Dragonfire Ward</li>
            <li>Twisted Buckler</li>
          </ul>
          <li>
            เปลี่ยนสี Blade of Saeldor ได้โดยการซื้อ Crystal ที่ NPC ชื่อ Lliann
            ในเมือง Prifddinas
          </li>
          <li>
            Corporeal Beast ฮีลแค่บางส่วนเวลาไม่มีผู้เล่นอยู่ในพื้นที่
            (บอสจะรีเลือดจนเต็มอีกครั้งถ้าไม่มีผู้เล่นนาน 3 นาที)
          </li>
          <li>Imbued Skull Sceptre สามารถร่าย Crumble Undead ได้แล้ว</li>
          <li>Weaken มีประสิทธิภาพมากขึ้น 50 % เมื่อใช้คู่กับ Tome of Water</li>
          <li>
            กระดูก Chaos Elemental, Insatiable Bloodveld, Bloodveld, Jogre,
            Jungle Horror สามารถใช้กับ Bonecrusher ได้
          </li>
          <li>
            ผู้เล่นสามารถเปิด-ปิดเอฟเฟกต์ Noted Dagannoth Bones จาก Fremmennik
            Diary ได้โดยการพูดคุยกับ Thorodin ใน Rellekka
          </li>
          <li>
            Bats ใน Inferno จะไม่ลดพลังโจมตีของผู้เล่นถ้าเปิด Protect from
            Missiles
          </li>
          <li>ปรับ Zealot's Armour</li>
          <li>
            บทสนทนาเวลาเข้าอุโมงค์ที่ Barrows ปรับให้เหลืออันเดียวได้ผ่านทาง
            Strange Old Man
          </li>
          <li>เพิ่มสีให้สัตว์เลี้ยง Sarachnis</li>
          <li>ปรับเรท xp สำหรับมินิเกม Shooting Stars</li>
          <li>ปรับ UI บางส่วน</li>
          <li>เปลี่ยน PVP world rotation</li>
        </ul>
        <p>
          อ่านข่าวฉบับเต็มได้ที่
          <a href="https://secure.runescape.com/m=news/phosanis-nightmare?oldschool=1">
            <u>ลิงก์นี้</u>
          </a>
        </p>
      </NewsPost>
    </Layout>
  );
};

export default Index;
