import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import Checkbox from "../../ui/Checkbox";
import Spinner from "../../ui/Spinner";

import { useCabins } from "../cabins/useCabins";
import { useGuests } from "./useGuests";
import { useSettings } from "../settings/useSettings";
import { useCreateBooking } from "./useCreateBooking";
import { subtractDates } from "../../utils/helpers";

const StyledSelect = styled.select`
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

function CreateBookingForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hasBreakfast: false,
      hasPaid: false,
      observations: "",
    },
  });

  const { cabins, isLoading: isLoadingCabins } = useCabins();
  const { guests, isLoading: isLoadingGuests } = useGuests();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { createBooking, isCreating } = useCreateBooking();

  const isLoading = isLoadingCabins || isLoadingGuests || isLoadingSettings;

  if (isLoading) return <Spinner />;

  const watchCabinId = watch("cabinId");
  const selectedCabin = cabins?.find((c) => c.id === Number(watchCabinId));
  const maxGuestsAllowed =
    selectedCabin?.maxCapacity > 0
      ? selectedCabin.maxCapacity
      : settings?.maxGuestsPerBooking ?? 1;

  function onSubmit(data) {
    const cabin = cabins.find((c) => c.id === Number(data.cabinId));
    const numNights = subtractDates(data.endDate, data.startDate);
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extrasPrice = data.hasBreakfast
      ? numNights * (settings?.breakfastPrice ?? 0) * Number(data.numGuests)
      : 0;
    const totalPrice = cabinPrice + extrasPrice;

    const newBooking = {
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      numNights,
      numGuests: Number(data.numGuests),
      cabinId: Number(data.cabinId),
      guestId: Number(data.guestId),
      hasBreakfast: data.hasBreakfast,
      observations: data.observations,
      hasPaid: false,
      cabinPrice,
      extrasPrice,
      totalPrice,
      status: "unconfirmed",
    };

    createBooking(newBooking, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin" htmlFor="cabinId" error={errors?.cabinId?.message}>
        <StyledSelect
          id="cabinId"
          {...register("cabinId", { required: "Please select a cabin" })}
        >
          <option value="">— Select cabin —</option>
          {cabins?.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              {cabin.name} (max {cabin.maxCapacity} guests · ${cabin.regularPrice}
              /night)
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow label="Primary Guest" htmlFor="guestId" error={errors?.guestId?.message}>
        <StyledSelect
          id="guestId"
          {...register("guestId", { required: "Please select a guest" })}
        >
          <option value="">— Select guest —</option>
          {guests?.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.fullName} ({guest.emailAddress})
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow
        label="Start date"
        htmlFor="startDate"
        error={errors?.startDate?.message}
      >
        <Input
          type="date"
          id="startDate"
          {...register("startDate", { required: "Start date is required" })}
        />
      </FormRow>

      <FormRow
        label="End date"
        htmlFor="endDate"
        error={errors?.endDate?.message}
      >
        <Input
          type="date"
          id="endDate"
          {...register("endDate", {
            required: "End date is required",
            validate: (value) => {
              const startDate = getValues("startDate");
              if (!startDate) return "Please select a start date first";
              const nights = subtractDates(value, startDate);
              if (nights < 1) return "End date must be after start date";
              if (
                settings?.minBookingLength &&
                nights < settings.minBookingLength
              )
                return `Minimum booking is ${settings.minBookingLength} night${
                  settings.minBookingLength !== 1 ? "s" : ""
                }`;
              if (
                settings?.maxBookingLength &&
                nights > settings.maxBookingLength
              )
                return `Maximum booking is ${settings.maxBookingLength} night${
                  settings.maxBookingLength !== 1 ? "s" : ""
                }`;
              return true;
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Number of guests"
        htmlFor="numGuests"
        error={errors?.numGuests?.message}
      >
        <Input
          type="number"
          id="numGuests"
          min={1}
          max={maxGuestsAllowed}
          {...register("numGuests", {
            required: "Number of guests is required",
            min: { value: 1, message: "At least 1 guest is required" },
            max: {
              value: maxGuestsAllowed,
              message: `Maximum ${maxGuestsAllowed} guest${
                maxGuestsAllowed !== 1 ? "s" : ""
              } allowed for this cabin`,
            },
          })}
        />
      </FormRow>

      <FormRow label="Observations" htmlFor="observations">
        <Textarea
          id="observations"
          placeholder="Any special requests or notes..."
          {...register("observations")}
        />
      </FormRow>

      <FormRow label="Include breakfast?">
        <Controller
          name="hasBreakfast"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="hasBreakfast"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            >
              Add breakfast (${settings?.breakfastPrice ?? 0}/person/night)
            </Checkbox>
          )}
        />
      </FormRow>

      {/* <FormRow label="Has paid?">
        <Controller
          name="hasPaid"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="hasPaid"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            >
              Guest has paid in full
            </Checkbox>
          )}
        />
      </FormRow> */}

      <FormRow>
        <Button variation="secondary" type="button" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          Create booking
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
