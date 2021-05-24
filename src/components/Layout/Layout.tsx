import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Container = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin: 0 auto;
  width: 120rem;
`;

const Layout: React.FC = (props) => {
  return (
    <Container>
      <Navbar />
      <MainContent>{props.children}</MainContent>
    </Container>
  );
};

export default Layout;
