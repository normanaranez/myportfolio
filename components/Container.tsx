import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn('max-w-screen-2xl mx-auto px-4 w-full md:px-8', className)}>{children}</div>
    );
};

export default Container;