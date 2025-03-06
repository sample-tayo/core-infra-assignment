import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, SquarePlus } from "lucide-react";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { RadioGroup } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";
import { ACCOUNT_PAD, CURRENCY, FEE_FREQUENCY, FEE_IMPACT } from "../../mock";
import { cn } from "../../utils";
import { addFeeSchema, currencies } from "../../schemas";

const feeFrequency = Object.values(FEE_FREQUENCY);
const feeImpact = Object.values(FEE_IMPACT);
const accountPad = Object.values(ACCOUNT_PAD);

type AddFeeFormType = z.infer<typeof addFeeSchema>;

export function AddFeeDialog({
  open: openProp,
  setOpen: setOpenProp,
  trigger,
  setFeeValue,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  trigger?: ReactNode;
  setFeeValue?: (feeValue: AddFeeFormType) => void;
}) {
  const [openInternal, setOpenInternal] = useState(false);

  const open = openProp || openInternal;
  const setOpen = setOpenProp || setOpenInternal;

  const addFeeForm = useForm<AddFeeFormType>({
    resolver: zodResolver(addFeeSchema),
    defaultValues: {
      feeName: "",
      currency: CURRENCY.NAIRA,
      feeFrequency: "",
      feeImpact: "",
      accountPad: ACCOUNT_PAD.NONE,
      account: "",
    },
  });

  const handleClose = (value: boolean) => {
    if (value === false) {
      addFeeForm.reset();
      return setOpen(false);
    }
    return setOpen(true);
  };

  const onSubmit = (data: AddFeeFormType) => {
    if (setFeeValue) {
      setFeeValue(data);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="gap-0 p-0" widthInRem={32}>
        <Form {...addFeeForm}>
          <form onSubmit={addFeeForm.handleSubmit(onSubmit)}>
            <DialogHeader className="flex-row gap-4 p-6">
              <div className="rounded-[10px] border border-gray-200 p-3 shadow-xs">
                <SquarePlus className="size-5 stroke-gray-700" />
              </div>
              <div className="space-y-2">
                <DialogTitle className="font-bold">Add Fee</DialogTitle>
                <DialogDescription>Fill in fee details</DialogDescription>
              </div>
            </DialogHeader>
            <Separator className="bg-gray-200" />
            <div className="space-y-4 px-6 pt-5 pb-8">
              <FormField
                control={addFeeForm.control}
                name="feeName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Fee Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Maintenance"
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="value"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0"
                        rightIcon={<ChevronsUpDown className="size-5" />}
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex items-center gap-5"
                        disabled
                        name={field.name}
                        onChange={field.onChange}
                        checked={(value: string) => field.value === value}
                        renderRadio={(value: string) => (
                          <div className="flex items-center gap-2 rounded-lg peer-disabled:opacity-50 peer-checked:[&_>div]:border-primary peer-checked:[&_>div]:bg-primary peer-checked:[&_div_div]:bg-white">
                            <div className="flex size-6 items-center justify-center rounded-full border border-black/[0.56] bg-gray-150">
                              <div className="size-3 rounded-full bg-gray-150" />
                            </div>
                            <p className="text-sm">{value}</p>
                          </div>
                        )}
                        values={currencies}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="feeFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee Frequency</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex items-center gap-5"
                        onChange={field.onChange}
                        name={field.name}
                        checked={(value: string) => field.value === value}
                        renderRadio={(value: string) => (
                          <div className="flex items-center gap-2 rounded-lg peer-checked:[&_>div]:border-primary peer-checked:[&_>div]:bg-primary peer-checked:[&_div_div]:bg-white">
                            <div className="flex size-6 items-center justify-center rounded-full border border-black/[0.56] bg-gray-150">
                              <div className="size-3 rounded-full bg-gray-150" />
                            </div>
                            <p className="text-sm">{value}</p>
                          </div>
                        )}
                        values={feeFrequency}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="feeImpact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee Impact</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex items-center gap-5"
                        onChange={field.onChange}
                        name={field.name}
                        checked={(value: string) => field.value === value}
                        renderRadio={(value: string) => (
                          <div className="flex items-center gap-2 rounded-lg peer-checked:[&_>div]:border-primary peer-checked:[&_>div]:bg-primary peer-checked:[&_div_div]:bg-white">
                            <div className="flex size-6 items-center justify-center rounded-full border border-black/[0.56] bg-gray-150">
                              <div className="size-3 rounded-full bg-gray-150" />
                            </div>
                            <p className="text-sm">{value}</p>
                          </div>
                        )}
                        values={feeImpact}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="accountPad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Pad</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex items-center gap-5"
                        onChange={field.onChange}
                        name={field.name}
                        checked={(value: string) => field.value === value}
                        renderRadio={(value: string) => (
                          <div className="flex items-center gap-2 rounded-lg peer-checked:[&_>div]:border-primary peer-checked:[&_>div]:bg-primary peer-checked:[&_div_div]:bg-white">
                            <div className="flex size-6 items-center justify-center rounded-full border border-black/[0.56] bg-gray-150">
                              <div className="size-3 rounded-full bg-gray-150" />
                            </div>
                            <p className="text-sm">{value}</p>
                          </div>
                        )}
                        values={accountPad}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addFeeForm.control}
                name="account"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Account</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="bg-gray-200" />
            <DialogFooter className="p-6">
              <Button type="submit" className="w-full">
                Add fee
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
