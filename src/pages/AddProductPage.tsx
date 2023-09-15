import { Box, Modal } from "@mui/material";
import CustomSwitch from "components/custom-switch/CustomSwitch";
import { CSV_FORMAT } from "components/filedropzone/constants";
import FileUploader from "components/fileuploader/FileUploader";
import RichTextEditor from "components/richTextEditor/RichTextEditor";
import CustomTextField from "components/text-field/CustomTextField";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormFieldValues } from "./types";

const AddProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState<string>();
  const [showCommitmentAmount, setshowCommitmentAmount] =
  useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFieldValues>({
    defaultValues: {
      sku: "",
      name: "",
      stockLimit: "",
      version: "",
      retailPrice: "",
      description: "",
      productImages: [{ url: "", description: "" }],
      howToUse: "",
      ingredients: "",
      categoryId: "",
      brandId: "",
      isArchived: false,
      itemSold: "",
      height: "",
      width: "",
      length: "",
      weight: "",
    },
  });

  const handleData = (values: FormFieldValues) => {
    console.log(values);
  };

  const submitHandler = () => {
    return handleSubmit(handleData);
  };

  const handleBulkUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleOnChange = (data: string) => {
    setCurrentField(data);
  };

  const handleCancelCLick = () => {
    setIsModalOpen(false);
  };

  const onClickToggleCommitmentAmount = () => {
    setshowCommitmentAmount(!showCommitmentAmount);
  };

  const handleUploadFile = (file) => {
    console.log(file);
  };

  const handleCloseRangeModal = (index: number) => {
    setValue(`description`, currentField);
    setShowModal(false);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  };

  return (
    <div className="m-8 bg-white p-8">
      <Modal
        open={showModal}
        aria-labelledby="modal-text"
        onClose={handleCloseRangeModal}
      >
        <Box sx={style} id="modal-text">
          <RichTextEditor onChange={(data) => handleOnChange(data)} />
        </Box>
      </Modal>
      <div className="flex flex-row justify-between items-center text-xl font-semibold">
        <div className="flex flex-row justify-center items-center">
          <span className="mr-4">Add Product</span>
        <CustomSwitch
              name="isArchived"
              control={control}
              label={'Is Archived'}
              checked={showCommitmentAmount}
              handleChange={onClickToggleCommitmentAmount}
            />
        </div>
        <div
          className="flex justify-end text-sm
         text-normal rounded-md text-white"
        >
          <button
            className="p-3 bg-primary rounded-md"
            type="button"
            onClick={handleBulkUploadClick}
          >
            Bulk Upload
          </button>
        </div>
      </div>
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
            onClickTextField={()=>{setShowModal(true)}}
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
        <div className="flex flex-row w-[66%]">
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
        <div className="flex flex-row w-[66%]">
          <CustomTextField
            name="productImages.[0].url"
            placeholder={"Image URL"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 mr-6 w-full"
          />
          <CustomTextField
            name="productImages.[0].description"
            placeholder={"Description"}
            control={control}
            errors={errors}
            wrapperClass="pt-6 w-full"
          />
        </div>
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
      <Modal open={isModalOpen} onClose={handleCancelCLick}>
        <div className="flex justify-center items-center h-full bg-black/60">
          <div
            className="flex flex-col justify-center p-4 min-w-[500px] min-h-[400px] max-w-3xl max-h-fit
             bg-white rounded-lg shadow-lg"
          >
            <div className="w-full">
              <div className="pb-2 text-base font-normal text-black/80">
                Upload your File
              </div>
              <FileUploader
                name="bulkFile"
                enableCrop={true}
                sizeInMb={3}
                supportedFormats={CSV_FORMAT}
                errors={errors}
                fileUploadSuccessHandler={(file, path) =>
                  // setValue("bulkFile", {
                  //   url: createObjectURL(file),
                  //   description: path,
                  // })
                  console.log(file)
                }
                deleteFileHandler={() =>
                  // setValue("bulkFile", { url: undefined, description: "" })
                  console.log("deletef file")
                }
              />
              <div className="flex justify-end mt-8 mr-auto rounded-md text-white">
                <button
                  className="p-3 mr-3 border text-primary border-primary bg-white rounded-md"
                  type="button"
                  onClick={handleCancelCLick}
                >
                  Cancel
                </button>
                <button
                  className="p-3 bg-primary rounded-md"
                  type="submit"
                  onClick={handleUploadFile}
                >
                  Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddProductPage;
