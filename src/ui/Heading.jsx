import styled from "styled-components";
import { css } from "styled-components";
const test = css`text-align: center;`

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
 
  
  ${props => props.as === 'h1' && css`
    font-size: 30px;
    font-weight: 600;`}

    ${props => props.as === 'h2' && css`
    font-size: 24px;
    font-weight: 500;
  `}
  ${props => props.as === 'h3' && css`
    font-size: 20px;
    font-weight: 400;
  `}`





export default Heading;
