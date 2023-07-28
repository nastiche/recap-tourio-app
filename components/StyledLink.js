import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6bb0e4;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: white;
  text-decoration: none;
  font-weight: bold;

  ${({ variant }) =>
    variant === "back" &&
    css`
      justify-self: flex-start;
      height: 44px;
      width: 44px;
      margin-top: 20px;
    `}
`;
