import { CheckIcon } from "../../components/icons/check-icon";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { ReactNode } from "react";

export function SuccessfulDialog({
  trigger,
  message,
}: {
  trigger: ReactNode;
  message: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent showClose={false} className="gap-8" widthInRem={25}>
        <DialogHeader className="gap-4">
          <div className="rounded-[10px] border border-gray-200 p-3 text-xl text-[#007129] shadow-xs w-fit">
            <CheckIcon />
          </div>
          <div className="space-y-2">
            <DialogTitle className="font-medium">Successful</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button label="Continue" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
