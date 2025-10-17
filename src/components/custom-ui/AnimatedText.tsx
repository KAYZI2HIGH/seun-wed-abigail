import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

interface AnimatedTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  isMounted: boolean;
}

const AnimatedText = ({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  isMounted,
  ...props
}: AnimatedTextProps & ComponentPropsWithoutRef<ElementType>) => {
  const getAnimationClass = () => {
    const baseClass = `transition-all duration-700 ${
      isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

    return `${baseClass} ${className}`;
  };

  return (
    <Component
      className={getAnimationClass()}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedText;
