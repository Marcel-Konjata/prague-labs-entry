import styled from "styled-components";

export const RangeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;
export const RangeTrack = styled.div`
  height: 3.6rem;
  display: flex;
  width: 100%;
`;

export const InnerTrack = styled.div`
  height: 0.5rem;
  width: 100%;
  border-radius: 0.4rem;
  align-self: center;
`;

export const RangeThumb = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px #aaa;
`;
