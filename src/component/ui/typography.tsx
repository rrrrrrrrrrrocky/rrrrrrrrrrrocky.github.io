import { cn } from "@/script/util/ui-utils";
import { ClassValue } from "clsx";
import React, {
  ComponentProps,
  createElement,
  ReactNode,
  useMemo,
} from "react";

type ReactTextTagName = keyof Pick<
  React.JSX.IntrinsicElements,
  "p" | "h1" | "h2" | "h3" | "span" | "label"
>;

declare const Typo: <TTag extends ReactTextTagName>(
  // eslint-disable-next-line no-unused-vars
  props: Omit<ComponentProps<TTag>, "children"> & {
    component?: TTag;
    children?: ReactNode;
  }
) => React.JSX.Element;

export const Typography: typeof Typo = ({
  children,
  component = "span",
  color,
  ...props
}) => {
  const componentResetClassName = useMemo((): ClassValue => {
    switch (component) {
      case "h1": {
        return "b1-700";
      }
      case "h2": {
        return "b2-700";
      }
      case "h3": {
        return "b3-700";
      }
      case "p": {
        return "c1-400";
      }
      default: {
        return "c2-400";
      }
    }
  }, []);

  return createElement(
    component,
    {
      ...props,
      className: cn(componentResetClassName, props.className),
    },
    children
  );
};
