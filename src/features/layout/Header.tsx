import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { MaxWidthContentContainer } from "../../../styles/reusables";

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
  padding: 2.2rem 0;

  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    justify-content: flex-start;
  }
`;
const LogoContainer = styled.span`
  width: 20.1rem;
  height: 3.5rem;

  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    margin-left: 5.5rem;
  }
`;

const ContentContainer = styled(MaxWidthContentContainer)`
  align-items: center;
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    align-items: flex-start;
  }
`;

export const Header: FC = () => {
  return (
    <FlexContainer>
      <ContentContainer>
        <LogoContainer>
          <Image
            src="/svg/logo.svg"
            alt="logo"
            width={201}
            height={31.5}
            layout={"responsive"}
          />
        </LogoContainer>
      </ContentContainer>
    </FlexContainer>
  );
};
