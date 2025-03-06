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

export function DeleteCardProfileDialog({
  trigger,
  deleteFn,
  cardName,
}: {
  trigger: ReactNode;
  deleteFn: () => void;
  cardName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent showClose={false} widthInRem={25}>
        <DialogHeader>
          <DialogTitle>Delete card profile</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the card profile for{" "}
            <span className="font-bold">{cardName}</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="*:grow">
          <DialogClose asChild>
            <Button
              className="hover:text- border-gray-700 bg-transparent text-foreground hover:bg-gray-100"
              label="Cancel"
            />
          </DialogClose>
          <Button
            className="border-red-500 bg-red-500 text-white hover:bg-red-700 hover:text-white"
            label="Delete"
            onClick={deleteFn}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
