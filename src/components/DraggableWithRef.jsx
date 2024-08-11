import React, { forwardRef } from 'react';
import Draggable from 'react-draggable';

const DraggableWithRef = forwardRef((props, ref) => (
  <Draggable bounds="parent">
    <div ref={ref} {...props} />
  </Draggable>
));

export default DraggableWithRef;
