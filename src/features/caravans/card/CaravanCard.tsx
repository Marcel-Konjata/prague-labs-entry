import { FC } from "react";
import { Caravan } from "../../../api/caravans/types";
import Image from "next/image";
import styled from "styled-components";
import ShoverIcon from "@svg/shover.svg";
import BedIcon from "@svg/bed.svg";
import PassengerIcon from "@svg/passenger.svg";
import ToiletIcon from "@svg/toilet.svg";
import ActionIcon from "@svg/action.svg";

const CardContainer = styled.div`
  max-width: 39.2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.biege};
  overflow: hidden;
  min-width: 34.3rem;

  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    width: 39.2rem;
  }
`;

const CommonContainer = styled.div`
  padding: 1.6rem 0 0.5rem;
  margin: 0 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
  display: flex;
  flex-direction: column;
`;

const TypeName = styled.span`
  text-align: left;
  font: normal normal bold 12px/12px Roboto;
  letter-spacing: 1px;
  color: #ff5e55;
  text-transform: uppercase;
`;

const VehicleName = styled.span`
  text-align: left;
  font: normal normal bold 24px/24px Roboto;
  letter-spacing: 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const PriceContainer = styled(CommonContainer)`
  border-bottom: none;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const LocationText = styled.p`
  text-align: left;
  font: normal normal normal 14px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font: normal normal normal 14px/16px Roboto;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.primaryText};
    margin-left: 0.2rem;
    opacity: 1;
    display: flex;
    align-items: center;
  }
`;

const StyledPriceText = styled.p`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.lightText};
`;
const StyledPriceValue = styled.div`
  display: flex;
  text-align: right;
  font: normal normal bold 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.primaryText};

  > svg {
    margin-left: 0.8rem;
  }
`;

export const CaravanCard: FC<Caravan> = (props) => {
  return (
    <CardContainer>
      <div style={{ height: "190px", position: "relative" }}>
        <Image
          src={props.pictures[0]}
          layout={"fill"}
          objectFit={"cover"}
          unoptimized={true}
        />
      </div>
      <CommonContainer>
        <TypeName>{props.vehicleType}</TypeName>
        <VehicleName>{props.name}</VehicleName>
      </CommonContainer>
      <CommonContainer>
        <LocationText>{props.location}</LocationText>
        <IconsContainer>
          <IconWrapper>
            <PassengerIcon /> <span>{props.passengersCapacity}</span>
          </IconWrapper>
          <IconWrapper>
            <BedIcon /> <span>{props.sleepCapacity}</span>
          </IconWrapper>
          {props.toilet && <ToiletIcon />}
          {props.shower && <ShoverIcon />}
        </IconsContainer>
      </CommonContainer>
      <PriceContainer>
        <StyledPriceText>cena od</StyledPriceText>
        <StyledPriceValue>
          <div>{props.price}/den</div>
          {props.instantBookable && <ActionIcon />}
        </StyledPriceValue>
      </PriceContainer>
    </CardContainer>
  );
};
