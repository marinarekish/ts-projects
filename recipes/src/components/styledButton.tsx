import styled from "styled-components";

export const Btn = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "blue" : "white")};
  color: ${(props) => (props.$primary ? "white" : "blue")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;
