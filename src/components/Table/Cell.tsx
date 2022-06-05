import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

export const Td = styled.td<TypographyProps>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  vertical-align: middle;

  ${typography}
`;

export const Th = styled(Td).attrs({ as: "th" })`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  text-transform: uppercase;
`;
