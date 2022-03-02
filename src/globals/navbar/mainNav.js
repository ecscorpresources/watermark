import React from "react";
import styled from "styled-components";

import Categories from "../toolbar/Categories";
import Toolbar from "../toolbar/Toolbar";

function Navbar() {
  return (
    <Wrapper>
      <Toolbar />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default Navbar;
