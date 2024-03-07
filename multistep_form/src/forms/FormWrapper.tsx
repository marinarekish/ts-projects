import { ReactNode } from "react";
import { Content, Header } from "../styles/styledComponents";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </div>
  );
}
