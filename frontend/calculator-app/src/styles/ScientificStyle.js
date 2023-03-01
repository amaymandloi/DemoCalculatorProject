import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 40px auto;
  grid-template-columns: repeat(5, 110px);
  grid-template-rows: minmax(120px, auto) repeat(7, 80px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;

  width: 600px;
  height: 700px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 10px;
  margin-align: center;

  margin-right: 30px;
  height: 90px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;

  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const Prevoius = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  // border-radius: 20px;

  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${({ blank }) =>
    blank &&
    `background-color:#00000000;border: none; &:hover {
    background-color:#00000000;
  }`};

  ${({ operation }) => operation && `background-color:gray;`};
  ${({ control }) => control && `background-color:skyBlue;`};
  ${({ del }) => del && `background-color:skyBlue;height:160px`};
  ${({ equals }) => equals && `background-color:gray;;width:110px`};
  ${({ decimal }) =>
    decimal && `background-color:gray;border-bottom-left-radius:10px;`};
`;
