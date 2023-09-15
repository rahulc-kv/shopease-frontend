/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Modal } from "@mui/material";
import CustomSwitch from "components/custom-switch/CustomSwitch";
import { CSV_FORMAT } from "components/filedropzone/constants";
import FileUploader from "components/fileuploader/FileUploader";
import RichTextEditor from "components/richTextEditor/RichTextEditor";
import CustomTextField from "components/text-field/CustomTextField";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormFieldValues, TranslateFormFieldValues } from "./types";

import { Verified } from "assets/icons";
import { usePostBulkUploadMutation } from "services/api";

const AddProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentField, setCurrentField] = useState<string>();
  const [showCommitmentAmount, setshowCommitmentAmount] =
    useState<boolean>(false);

  const [bulkUpload, { data: uploadData, isSuccess: isSuccessOnUpload }] = usePostBulkUploadMutation();
  const [openModal, setOpenModal] = useState(false);
  const [verifyTranslate, setVerifyTransalate] = useState('');
  const [verifiedTranslations, setVerifiedTransaltions] = useState<string[]>([]);
  const [translatedValues, setTranslatedValues] = useState({
    malayalam: {},
    hindi: {},
    tamil: {}
  });
  const [uploadedFile, setUploadedFile] = useState<File>();

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

  const {
    control: translateControl,
    setValue: setTranslateValue,
    handleSubmit: translateHandleSubmit,
    formState: { errors: translateErrors },
  } = useForm<TranslateFormFieldValues>({
    defaultValues: {
      name: "",
      description: "",
      howToUse: "",
      ingredients: "",
    },
    // resolver: yupResolver(createSyndicateSchema) as never as Resolver<
    //   FormFieldValues,
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   any
    // >,
  });

  useEffect(() => {
    if (verifyTranslate) {
      // call api;
      const response = {
        name: 'Name',
        description: "desc",
        ingredients: "sdjfhdgsf",
        howToUse: "sdsfsdf"
      }
      setTranslateValue('name', response.name);
      setTranslateValue('description', response.description);
      setTranslateValue('howToUse', response.howToUse);
      setTranslateValue('ingredients', response.ingredients);
    }
  }, [verifyTranslate]);

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

  const handleUploadFile = () => {
    console.log('file' , uploadedFile);
    bulkUpload(uploadedFile);
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [uploadData, isSuccessOnUpload]);

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
  const handleTranslateVerifiedData = (values: TranslateFormFieldValues) => {
    setTranslatedValues((curr) => ({
      ...curr,
      [verifyTranslate]: values
    }))
    setVerifiedTransaltions((curState) => {
      curState.push(verifyTranslate);
      return curState;
    })
    setVerifyTransalate('');

  }
  console.log(translatedValues);

  const translateSubmitHandler = () => {
    return translateHandleSubmit(handleTranslateVerifiedData);
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
            onClickTextField={() => { setShowModal(true) }}
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
            className="p-3 bg-primary rounded-md mr-6"
            type="submit"
            onClick={() => setOpenModal(true)}
          >
            Translate Details
          </button>
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
                fileUploadSuccessHandler={(file, path) =>{
                  // setValue("bulkFile", {
                  //   url: createObjectURL(file),
                  //   description: path,
                  // })
                  setUploadedFile(file)
                  console.log(file)
                }}
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

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-full">
          <div className=" relative flex items-center p-8 font-workSans text-[#212529] bg-white w-[800px] h-[400px] rounded-lg" >
            <div
              className="absolute top-5 text-2xl cursor-pointer right-5"
              onClick={() => setOpenModal(false)}
            >
              X
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-lg w-full p-4 mb-4">
                Verify transation in Malayalam
                {verifiedTranslations.includes('malayalam') ? (
                  <Verified width={80} height={40} />
                ) : (
                  <div
                    className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer"
                    onClick={() => setVerifyTransalate('malayalam')}>
                    Verify
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-lg w-full p-4 mb-4">
                Verify transation in Hindi
                {verifiedTranslations.includes('hindi') ? (
                  <Verified width={80} height={40} />
                ) : (
                  <div className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer"
                    onClick={() => setVerifyTransalate('hindi')}>
                    Verify
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-lg w-full p-4 mb-4">
                Verify transation in Tamil
                {verifiedTranslations.includes('tamil') ? (
                  <Verified width={80} height={40} />
                ) : (
                  <div className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer"
                    onClick={() => setVerifyTransalate('tamil')}>
                    Verify
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>


      <Modal
        open={!!verifyTranslate}
        onClose={() => setVerifyTransalate('')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-full">
          <div className=" relative flex flex-col items-center p-8 font-workSans text-[#212529] bg-white w-[800px] h-[520px] rounded-lg" >
            <div
              className="absolute top-5 text-2xl cursor-pointer right-5"
              onClick={() => setVerifyTransalate('')}
            >
              X
            </div>
            <div className="w-full text-xl font-workSans text-[#212529]">
              Verify Transalation in {verifyTranslate}
            </div>
            <div className="w-full">
              <CustomTextField
                name="name"
                placeholder={"Name"}
                control={translateControl}
                errors={translateErrors}
                wrapperClass="pt-6 mr-6 w-full"
              />
              <CustomTextField
                name="description"
                placeholder={"Description"}
                control={translateControl}
                errors={translateErrors}
                multiline
                rows={3}
                wrapperClass="pt-6 mr-6 w-full"
              />
              <CustomTextField
                name="ingredients"
                placeholder={"Ingredients"}
                control={translateControl}
                errors={translateErrors}
                wrapperClass="pt-6 mr-6 w-full"
              />
              <CustomTextField
                name="howToUse"
                placeholder={"How to use"}
                control={translateControl}
                errors={translateErrors}
                wrapperClass="pt-6 mr-6 w-full"
              />
            </div>
            <div className=" flex w-full justify-end mt-10">
              <div className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer mr-4"
                onClick={() => setVerifyTransalate('')}>
                Back
              </div>
              <div className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer"
                onClick={
                  translateSubmitHandler()
                }>
                Confirm
              </div>
            </div>
          </div>
        </div>
      </Modal >


    </div >
  );
};

export default AddProductPage;
