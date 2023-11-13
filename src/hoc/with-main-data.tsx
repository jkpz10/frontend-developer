/* eslint-disable no-undef */
import { ComponentType } from 'react';

export function withMainData<T extends JSX.IntrinsicAttributes>(
  Content: ComponentType<T>
): ComponentType<T> {
  return function MainDataContent(props) {
    return <Content {...props} />;
  };
}
