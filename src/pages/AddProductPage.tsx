import FileUploader from "components/fileuploader/FileUploader";
import CustomTextField from "components/text-field/CustomTextField";

import React from "react";
import { useForm } from "react-hook-form";
import { FormFieldValues } from "./types";

const AddProductPage = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldValues>({
    defaultValues: {
      sku: "",
      name: "",
      stockLimit: "",
      version: "",
      retailPrice: "",
      description: "",
      productImages: { url: "", description: "" },
      howToUse: "",
      ingredients: "",
      categoryId: "",
      brandId: "",
      isArchived: "",
      itemSold: "",
      height: "",
      width: "",
      length: "",
      weight: "",
    },
    // resolver: yupResolver(createSyndicateSchema) as never as Resolver<
    //   FormFieldValues,
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   any
    // >,
  });

  const handleData = (values: FormFieldValues) => {
    console.log(values);
  };

  function createObjectURL(object: Blob | MediaSource | File) {
    return window.URL
      ? window.URL.createObjectURL(object)
      : window.webkitURL.createObjectURL(object);
  }

  const submitHandler = () => {
    return handleSubmit(handleData);
  };

  return (
    <div className="m-8">
      <div className="text-xl font-semibold">Add Product</div>
      <form onSubmit={submitHandler()}>
        <div className="flex flex-row">
          <CustomTextField
            name="sku"
            placeholder={"SKU"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="name"
            placeholder={"Name"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="stockLimit"
            placeholder={"Stock Limit"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
        <div className="flex flex-row w-[68%]">
          <CustomTextField
            name="description"
            placeholder={"Description"}
            control={control}
            errors={errors}
            multiline
            rows={3}
            wrapperClass="pt-6 mr-6 w-full"
          />
        </div>
        <div className="flex flex-row w-[100%]">
          <CustomTextField
            name="version"
            placeholder={"Version"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="retailPrice"
            placeholder={"Retail price"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="howToUse"
            placeholder={"How to use"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
        <div className="flex flex-row">
          <CustomTextField
            name="ingredients"
            placeholder={"Ingredients"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="categoryId"
            placeholder={"Category Id"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="brandId"
            placeholder={"Brand Id"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
        <div className="flex flex-row">
          <CustomTextField
            name="isArchived"
            placeholder={"Is Archived"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="itemSold"
            placeholder={"Items sold"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="height"
            placeholder={"Height"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
        <div className="flex flex-row">
          <CustomTextField
            name="width"
            placeholder={"Width"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="length"
            placeholder={"Length"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="weight"
            placeholder={"Weight"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
        <div className="flex flex-row w-[34%]">
          <div className="pt-6 pr-6 w-full">
            <div className="pb-2 text-base font-normal text-black/80">
              Product Image
            </div>
            <FileUploader
              name="productImages"
              enableCrop={true}
              sizeInMb={3}
              errors={errors}
              fileUploadSuccessHandler={(file, path) =>
                setValue('productImages', { url: createObjectURL(file), description: path })
              }
              deleteFileHandler={() =>
                setValue('productImages', { url: undefined, description: '' })
              }
            />
          </div>
        </div>
        {/* <div className="flex justify-end pt-10">
          <DualButton
            primaryButtonLabel={translate("next")}
            secondaryButtonLabel={translate("saveAsDraft")}
            onChangePrimaryButton={submitHandler()}
            onChangeSecondaryButton={submitHandler(true)}
          />
        </div> */}
        <div className="flex justify-end mt-8 mr-auto rounded-md text-white">
          <button
            className="p-3 bg-primary rounded-md"
            type="submit"
            onClick={submitHandler()}
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
