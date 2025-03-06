import { ComponentPropsWithRef } from "react";
import { Link } from "react-router";
import { Button } from "./button";

type LinkButtonProps = ComponentPropsWithRef<typeof Button> & {
  href: Pick<ComponentPropsWithRef<typeof Link>, "to">["to"];
};

export function LinkButton({ href, ...props }: LinkButtonProps) {
  return (
    <Link to={href}>
      <Button {...props} />
    </Link>
  );
}
