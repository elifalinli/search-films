import { cn } from "../utils";


const MaxWidthWrapper = ({
    className,
    children,
}) => {
    return (
      <div className={cn("mx-auto w-full max-w-screen-xl px-2 md:px-20", className)}>
        {children}
      </div>
    );
  };
  
  export default MaxWidthWrapper;