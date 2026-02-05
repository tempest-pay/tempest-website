import Image from "next/image";
import logoImg from "@/assets/logo.png";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logoImg}
        alt="Tempest Logo"
        width={32}
        height={32}
        className="object-contain"
      />
      <span className="text-lg font-medium tracking-tight">Tempest</span>
    </div>
  );
}
