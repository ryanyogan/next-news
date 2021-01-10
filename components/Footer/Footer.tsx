import React, { FunctionComponent } from "react";
import { Center } from "../Center/style";
import { Container } from "./style";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://yogan.dev">yogan.dev</a> {currentYear}
      </Center>
    </Container>
  );
};
