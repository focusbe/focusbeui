import _Button from "@alifd/next/es/button";
import * as React from 'react';
export default function colorfullButtonView(props) {
  return /*#__PURE__*/React.createElement(_Button, {
    type: props.type,
    style: {
      backgroundColor: props.color
    }
  }, "2", props.children);
}