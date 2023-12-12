import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OptionsButton = styled.button`
  font-size: 12px;
  text-transform: capitalize;

  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  cursor: pointer;

  &:focus {
    color: white;
    background-color: #4a52ea;
  }
`;
