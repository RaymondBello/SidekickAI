import Image from "next/image";

interface MusicProps {
    label: string;
  }
  
  export const MusicUI = ({
    label
  }: MusicProps) => {
    return (
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image src="/voice.png" fill alt="Music" />
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {label}
        </p>
      </div>
    );
  };