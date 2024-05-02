import styled from "styled-components"

const StylesBase = styled.div`
div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10rem;
  height: 5rem;
  /* background: red; */
  color: white;
  font-size: 120px;
  margin-left: 50rem;
}
`;

export const Sugestions = ({ sugestinos }) => {
  console.log("response", sugestinos)
  return (
    <StylesBase id="Sugestions">
    {/* {sugestinos ? ( */}
    <>
    {sugestinos.map((_item, _index) => {
      <div key={_index}>
      <h1>{_item["query"]}</h1>
      </div>
    })}
    </>
    {/* ) : null} */}
    </StylesBase>
    )
  }
