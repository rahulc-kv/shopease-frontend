import React, { FC, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { isEmpty } from "lodash";

import { FileUploaderPropsType } from "./types";
import { Delete, FileIcon, Refresh, Success } from "assets/icons";
import {
  SUPPORTED_FILE_FORMATS,
  FILE_UPLOAD_STATUS,
} from "components/filedropzone/constants";
import FileDropZone from "components/filedropzone/FileDropZone";

const FileUploader: FC<FileUploaderPropsType> = (props) => {
  const {
    name,
    enableCrop,
    sizeInMb,
    size = "small",
    supportedFormats = SUPPORTED_FILE_FORMATS,
    fileUploadSuccessHandler,
    deleteFileHandler,
    errors,
    previousFile,
  } = props;

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  // const [generatePreSignedURL] = useGeneratePreSignedURLMutation();
  // const [uploadFileToS3] = useUploadFileToS3Mutation();

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    handleUpload(file);
  };

  const bytesToMB = (bytes: number = 0) => {
    const megabytes = bytes / 1000000;
    return megabytes.toFixed(2);
  };

  const handleRemoveFileClick = () => {
    setUploadedFile(null);
    setStatus("");
    deleteFileHandler();
  };

  const handleUpload = async (file: File) => {
    setIsModalOpen(false);
    setUploadedFile(file);
    setStatus(FILE_UPLOAD_STATUS.uploading);

    setStatus(FILE_UPLOAD_STATUS.success);
    fileUploadSuccessHandler(file, file.name);
  };

  const renderContent = (hasError: boolean = false) => (
    <div
      className={`flex justify-between items-center p-5 w-full ${
        size === "large" ? "min-h-[200px]" : "min-h-[93px]"
      } rounded-lg border 
        ${
          hasError && status === FILE_UPLOAD_STATUS.failed
            ? "border-red"
            : "border-gray-200"
        } border-dashed`}
    >
      {status === FILE_UPLOAD_STATUS.uploading ||
      status === FILE_UPLOAD_STATUS.success ? (
        <div className="flex flex-row grow items-center space-x-4 w-full leading-7">
          <FileIcon className="shrink-0 m-4" />
          <div className="flex flex-col mr-2">
            <span className="shrink text-[16px] font-normal text-black/80">
              {uploadedFile?.name}
            </span>
            <div className="flex flex-row space-x-2 text-[14px] text-black/60">
              <span>{`${bytesToMB(uploadedFile?.size)}MB`}</span>
              <span>
                {status === FILE_UPLOAD_STATUS.success ? "Complete" : "Loading"}
              </span>
            </div>
          </div>
          <div className="flex grow" />
          <Delete
            className="shrink-0 m-4 cursor-pointer"
            onClick={handleRemoveFileClick}
          />
          {status === FILE_UPLOAD_STATUS.success ? (
            <Success className="w-10 h-10" />
          ) : (
            <Refresh className="shrink-0 animate-rotate" />
          )}
        </div>
      ) : (
        <div className="flex flex-row grow items-center space-x-4 w-full leading-7 text-red">
          <FileIcon className="m-4" />
          <div className="flex flex-col mr-2">
            <span className="text-[16px]">Upload Failed</span>
            <div className="flex flex-row space-x-2 text-[14px]">
              <span>File is too large</span>
              <span>Failed</span>
            </div>
          </div>
          <div className="flex grow" />
          <div className="ml-auto cursor-pointer">
            <Delete onClick={handleRemoveFileClick} />
          </div>
        </div>
      )}
    </div>
  );

  useEffect(() => {
    if (previousFile) {
      setUploadedFile(previousFile);
      setStatus(FILE_UPLOAD_STATUS.success);
    }
  }, [previousFile]);

  return (
    <>
      {uploadedFile && (
        <Modal open={enableCrop && isModalOpen} onClose={handleRemoveFileClick}>
          <div className="flex justify-center items-center h-full bg-black/60">
            <div
              className="flex flex-col justify-center p-4 min-w-[360px] max-w-3xl max-h-fit
             bg-white rounded-lg shadow-lg"
            ></div>
          </div>
        </Modal>
      )}
      {status ? (
        renderContent(
          !isEmpty(errors) && !!(errors[name] as { message?: string })?.message
        )
      ) : (
        <FileDropZone
          supportedFormats={supportedFormats}
          onFileUpload={handleFileUpload}
          maxSizeInMb={sizeInMb}
          hasError={
            !isEmpty(errors) &&
            !!(errors[name] as { message?: string })?.message
          }
        />
      )}
    </>
  );
};

export default FileUploader;
