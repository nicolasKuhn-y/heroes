import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  margin: ${({ mr }) => mr || 0};
  max-width: ${({ mxWidth }) => mxWidth || "none"};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: ${({ pd }) => pd || 0};
  overflow: hidden;
  background-color: #fff;
`;

export const CardHeading = styled.h2`
  margin-bottom: ${({ mb }) => mb || "1rem"};
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: ${({ pd }) => pd || 0};
  width: ${({ width }) => width || "100%"};
`;

export const FlexWrapper = styled(Wrapper)`
  display: flex;

  align-items: ${({align}) => align || "start"};

  @media (max-width: 31.25rem){
    flex-direction: column;
  }
`;
