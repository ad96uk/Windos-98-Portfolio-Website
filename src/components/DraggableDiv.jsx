import React from 'react'
import Draggable from 'react-draggable';

export default function DraggableDiv() {
    return (
        <Draggable bounds="parent">
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'lightblue',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Перетащи меня!
          </div>
        </Draggable>
      );
}
