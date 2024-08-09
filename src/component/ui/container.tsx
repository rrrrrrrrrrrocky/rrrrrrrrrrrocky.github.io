import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: Props) => {
  return (
    <div
      className={twMerge("w-full mx-auto", props.className || "")}
      {...props}>
      {children}
    </div>
  );
};

export default Container;
