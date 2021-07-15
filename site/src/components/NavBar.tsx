import * as React from "react"

import { Box, Button, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby";

interface Props {

}
const NavBar = (props: Props) => {
  return (
    <Box>
      <Link as={GatsbyLink} to="/"> 
        <Button>
          หน้าหลัก
        </Button>
      </Link>
      <Link as={GatsbyLink}  to="/introduction">
        <Button>
            แนะนำ RuneScape
        </Button>
      </Link>
      <Link as={GatsbyLink} to="/membership">
        <Button>
          ข้อมูลระบบสมาชิก
        </Button>
      </Link>
      <Link as={GatsbyLink}  to="/osrs_guide">
        <Button>
          แนะนำผู้เล่นใหม่ OSRS
        </Button>
      </Link>
      <Link as={GatsbyLink} to="/rs3_guide">
        <Button>
          แนะนำผู้เล่นใหม่ RS3
        </Button>
      </Link>
      <Link href="https://discord.rune.in.th/">
        <Button>
          ดิสคอร์ด
        </Button>
      </Link>
    </Box>
  )
}

export default NavBar;