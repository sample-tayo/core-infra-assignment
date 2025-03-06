import { cn } from "../../utils";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Logo({ className, ...props }: LogoProps) {
  return <img {...props} className={cn("w-full object-cover", className)} />;
}

export function CardInfraLogo({ className, ...props }: Partial<LogoProps>) {
  return (
    <Logo
      src="/cardinfra-logo.svg"
      alt="Card Infra Logo"
      width={94}
      height={42}
      className={className}
      {...props}
    />
  );
}

export function LapoBankLogo({ className, ...props }: Partial<LogoProps>) {
  return (
    <Logo
      src="/lapo-bank-logo.svg"
      alt="Lapo Microfinance Bank Logo"
      width={138}
      height={45}
      className={className}
      {...props}
    />
  );
}
