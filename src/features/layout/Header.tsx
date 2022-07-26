import {FC} from 'react'
import Image from 'next/image'
import styled from "styled-components";


const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid beige;
`
const LogoContainer = styled.span`
  width: 20.1rem;
  height: 3.5rem;
`;

export const Header: FC = () => {

    return (
        <FlexContainer>
            <LogoContainer>
                <Image src="/svg/logo.svg" alt="logo" width={201} height={31.5} layout={"responsive"}/>
            </LogoContainer>
        </FlexContainer>
    )
}
