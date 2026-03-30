import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  isScrolled?: boolean;
};

export function Logo({ isScrolled = false }: LogoProps) {
  const maxWidth = isScrolled ? "50px" : "60px";

  return (
    <Link
      href="/"
      className="group flex items-center relative z-10"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Image
        src="/URB-logo.png"
        alt="URB Insurance Logo"
        width={170}
        height={170}
        className="h-7 w-auto sm:h-8 lg:h-9 object-contain transition-all duration-300 group-hover:opacity-90"
        style={{
          maxWidth,
          height: "auto",
          display: "block",
          visibility: "visible",
          opacity: 1,
        }}
        priority
        unoptimized
      />
    </Link>
  );
}
