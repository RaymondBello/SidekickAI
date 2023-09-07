import Image from "next/image";

interface PhotoProps {
    label: string;
  }
  
  export const Photo = ({
    label
  }: PhotoProps) => {
    return (
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image src="/photo.png" fill alt="Photo" />
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {label}
        </p>
      </div>
    );
  };