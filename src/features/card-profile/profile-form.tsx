import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { SelectInput } from "../../components/ui/select-input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { ROUTES } from "../../constants";
import { AddFeeDialog } from "./add-fee-dialog";
import { DashboardCard } from "../dashboard/dashboard-card";
import { cn } from "../../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  CreateCardProfileSchemaType,
  createCardProfileSchema,
  branchBlackList,
  cardSchemes,
  currencies,
} from "../../schemas";

const TABLE_HEADERS = [
  "Name",
  "Value",
  "Frequency",
  "Currency",
  "Impact",
  "Account Pad",
  "Account",
] as const;

export function CardProfileForm({
  defaultValues,
}: {
  defaultValues?: CreateCardProfileSchemaType;
}) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const createCardProfileForm = useForm<CreateCardProfileSchemaType>({
    resolver: zodResolver(createCardProfileSchema),
    values: defaultValues || {
      cardName: "",
      binPrefix: "",
      cardScheme: "",
      expiration: "",
      description: "",
      currency: "",
      branchBlacklist: "",
      fees: [],
    },
  });

  const onSubmit = () => {
    navigate(`/${ROUTES.CARDS.PROFILE.LIST}`);
  };

  return (
    <>
      <Form {...createCardProfileForm}>
        <form onSubmit={createCardProfileForm.handleSubmit(onSubmit)}>
          <DashboardCard className="mt-6 space-y-7 pb-7">
            <h2 className="text-lg font-medium">Profile Details</h2>
            <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-x-[7.8125rem] gap-y-5">
              <FormField
                control={createCardProfileForm.control}
                name="cardName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Card Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter card name"
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="binPrefix"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Bin Prefix*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="00000000"
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="cardScheme"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Card Scheme*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={cardSchemes}
                        placeholder="Verve"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="expiration"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Expiration*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                        rightIcon={<ChevronsUpDown className="size-5" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
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
              <FormField
                control={createCardProfileForm.control}
                name="currency"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Currency*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={currencies}
                        placeholder="NGN"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="branchBlacklist"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Branch Blacklist*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={branchBlackList}
                        placeholder="Head Office"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </DashboardCard>
          <DashboardCard className="mt-4 min-h-64 space-y-6">
            <h2 className="text-lg font-medium">Fees</h2>
            <div className="space-y-3">
              <Button
                leftIcon={<PlusIcon className="size-5" />}
                label="Add Fee"
                size={"sm"}
                className="px-3"
                onClick={() => setOpen(true)}
              />
              <Table>
                <TableHeader>
                  <TableRow>
                    {TABLE_HEADERS.map((header) => (
                      <TableHead
                        key={header}
                        className="w-[10.16rem] text-center"
                      >
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {createCardProfileForm.getValues("fees").length > 0 ? (
                    createCardProfileForm.getValues("fees").map((fee) => {
                      const cellValues = [
                        fee.feeName,
                        fee.value,
                        fee.feeFrequency,
                        fee.currency,
                        fee.feeImpact,
                        fee.accountPad,
                        fee.account,
                      ];

                      return (
                        <TableRow key={fee.feeName}>
                          {cellValues.map((value, index) => (
                            <TableCell key={index} className="text-center">
                              {value}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      {Array(7)
                        .fill(null)
                        .map((_, index) => (
                          <TableCell
                            key={index}
                            className="text-center opacity-0"
                          >
                            a
                          </TableCell>
                        ))}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </DashboardCard>
          <div className="mt-9 max-w-[18.25rem]">
            <Button
              type="submit"
              label={`${defaultValues ? "Save" : "Create"} Profile`}
              className="w-full"
            />
          </div>
        </form>
      </Form>
      <AddFeeDialog
        open={open}
        setOpen={setOpen}
        setFeeValue={(fee) =>
          createCardProfileForm.setValue("fees", [
            ...createCardProfileForm.getValues("fees"),
            fee,
          ])
        }
      />
    </>
  );
}
