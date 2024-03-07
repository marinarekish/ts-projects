import styled from "styled-components";

// main card - App.tsx
export const Card = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: max-content;
`;

// form counter - App.tsx
export const Counter = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

// container for Next and Back buttons - App.tsx
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

// buttons
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid darkblue;
  color: darkblue;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: medium;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

// container for form inputs - FormWrapper.tsx
export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 100px) minmax(auto, 400px);
  gap: 1rem 1rem;
  justify-content: flex-start;
`;

// header for every form input - FormWrapper.tsx
export const Header = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  color: darkblue;
`;
