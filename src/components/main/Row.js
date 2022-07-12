import Cell from "./Cell";

const Row = (props) => {
  // let organicedEvents = []
  // (props.fullEvent);
  return (
    <tr>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
      <Cell data={props.data}></Cell>
    </tr>
  );
};

export default Row;
