import { FC, ReactNode } from "react";

import { Container, ContentContainer, Triangle } from "./Tooltip.styles";

interface ToolTipProps {
  className?: string;
  children?: ReactNode;
}

const Tooltip: FC<ToolTipProps> = ({ children, className = "" }) => {
  return (
    <Container className={className}>
      <ContentContainer>{children}</ContentContainer>
      <Triangle />
    </Container>
  );
};

export default Tooltip;
