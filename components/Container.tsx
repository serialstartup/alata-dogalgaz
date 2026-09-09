import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[75rem] px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
