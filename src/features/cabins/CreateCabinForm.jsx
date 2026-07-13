import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";


function CreateCabinForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm();
  const { createCabin, isCreating } = useCreateCabin();

  function onSubmit(data) {
    createCabin(
      { ...data, image: data.image[0] },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" htmlFor="name" error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name", { required: "Name is required"})} />
      </FormRow>

      <FormRow label="Maximum capacity" htmlFor="maxCapacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity", { required: "Maximum capacity is required" ,min:{
          value: 1,
          message: "Maximum capacity must be at least 1"
        }})} />
      </FormRow>

      <FormRow label="Regular price" htmlFor="regularPrice" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", { required: "Regular price is required",
          min: {
            value: 0,
            message: "Regular price must be at least 0"
          }
         })} />
      </FormRow>

      <FormRow label="Discount" htmlFor="discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", { required: "Discount is required",
          validate: value => value >= 0 && value <= getValues().regularPrice || "Discount must be between 0 and the regular price" })} />
      </FormRow>

      <FormRow label="Description for website" htmlFor="description" error={errors?.description?.message}>
        <Textarea id="description" defaultValue="" {...register("description", { required: "Description is required" })} />
      </FormRow>

      <FormRow label="Cabin photo" htmlFor="image" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" {...register("image", { required: "Image is required" })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type="submit">Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
