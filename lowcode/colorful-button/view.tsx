import { Button } from '@alifd/next';
import * as React from 'react';
import { createElement } from 'react';
export default function colorfullButtonView(props: any) {
  return (
    <Button type={props.type} style={{backgroundColor: props.color}}>2{props.children}</Button>
  );
}
