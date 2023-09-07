import Image from "next/image";

interface ChatProps {
    label: string;
  }
  
  export const Chat = ({
    label
  }: ChatProps) => {
    return (
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image src="/chat.png" fill alt="Chat" />
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {label}
        </p>
      </div>
    );
  };