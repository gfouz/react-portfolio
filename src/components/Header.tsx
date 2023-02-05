import styled from 'styled-components';

interface IHeader {
  color?: string;
  bg?: string;
}

export const Header = styled.header`
  grid-area: header;
  padding: 1em;
  text-align: center;
  color: ${(props: IHeader) => props.color || '#fff4a3'};
  background-color: ${(props: IHeader) => props.bg || '#000000'};
  letter-spacing: 5px;
  font-weight: bolder;
  text-transform: uppercase;
`;
