import React from "react";

interface Props {
  className: string;
  text: string;
}

export default function Button({ className, text }: Props) {
  return <button className={className}>{text}</button>;
}
