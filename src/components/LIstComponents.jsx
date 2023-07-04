// const ListComponents = (props) => {
//   const { data } = props;
//   return (
//     <>
//       <div></div>
//       <div style={{ border: "2px solid black" }}>
//         {data.map((item, index) => {
//           return (
//             <div style={{ border: "1px solid red" }} key={index}>
//               <p>{item}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default ListComponents;

import React from "react";
// imports related to DND
import { Droppable, Draggable } from "react-beautiful-dnd";

export function ListComponents({ Marvel, DC }) {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "darkgrey",
    width: "21%",
    margin: "auto",
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "darkgrey" : "white",
    color: isDragging ? "white" : "black",
    padding: isDragging ? "0%" : "2%",
    paddingLeft: "2%",
    margin: "0%",
    fontSize: "17px",
    borderBottom: "0.5px solid gray",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Droppable droppableId="Marvel_drop_area">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  padding: "0%",
                  width: "100%",
                }}
              >
                <h6 style={{ paddingLeft: "2%" }}>DC SuperHeroes</h6>
                {Marvel.map((data, index) => (
                  <Draggable
                    key={data}
                    draggableId={`${data}${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        key={index}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {data}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="DC_drop_area">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  padding: "0%",
                  width: "100%",
                }}
              >
                <h6 style={{ paddingLeft: "2%" }}>DC SuperHeroes</h6>

                {DC.map((data, index) => (
                  <Draggable
                    key={data}
                    // draggableId={`${data}${index}`}
                    draggableId={`${data}${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        key={index}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {data}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default ListComponents;
