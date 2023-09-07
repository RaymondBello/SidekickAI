import Image from "next/image";

interface VideoProps {
    label: string;
  }
  
  export const Video = ({
    label
  }: VideoProps) => {
    return (
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image src="/computer.png" fill alt="Video" />
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {label}
        </p>
      </div>
    );
  };