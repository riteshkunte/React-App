import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "Mumbai", "Delhi", "Pune"];
  //let selectedIndex = 0;
  //this build function is hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; //selected index
  //arr[1]; //updater function
  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              selectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
