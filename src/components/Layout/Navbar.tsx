import styled from "styled-components";

import { ReactComponent as LogoutIcon } from "assets/icons/log-out.svg";

const Nav = styled.nav`
  background-color: var(--color-white);
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 120rem;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--color-red);
    margin-right: .6rem;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Menu>
        <h2>Shapes</h2>
        <Logout>
          <span>Logout</span>
          <LogoutIcon />
        </Logout>
      </Menu>
    </Nav>
  );
}

export default Navbar;
