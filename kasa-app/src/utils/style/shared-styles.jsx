import { Link } from "react-router-dom";
import colors from "./colors";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 40px;
  padding: 0 20px;
  &:hover {
    text-decoration: underline;
  }
`;
