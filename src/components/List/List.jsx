import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './styles.scss'
import InputContainer from "../InputContainer/InputContainer";



const List = ({ list, index }) => {
    return (
        <Draggable draggableId={list.id} index={index}>
            {

                (provided) => {
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className="list-cards">
                            <div className="list-title">

                            </div>
                            <div className="container-cards">
                                <Draggable draggableId={list.id} type="task">
                                    {(provided) => {
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="card-container"
                                        >
                                            {list.cards.maps((card, index) =>
                                                (<h1>card</h1>)
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    }}
                                </Draggable>
                            </div>
                            <InputContainer listId={list.id} type="card" />
                        </div>
                    </div>
                }
            }

        </Draggable>
    )
}

export default List