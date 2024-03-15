import { Btn } from "./styledButton";

type ButtonProps = {
  children: string;
  $primary?: boolean;
  onClick?: () => void;
};

export function Button({ children, $primary, onClick }: ButtonProps) {
  return (
    <Btn $primary={$primary} onClick={onClick}>
      {children}
    </Btn>
  );
}
