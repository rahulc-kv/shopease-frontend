import React, { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { FileDropZoneProps } from "./types";

import { SUPPORTED_FILE_FORMATS } from "./constants";

const FileDropZone: FC<FileDropZoneProps> = (props) => {
  const {
    onFileUpload,
    maxSizeInMb,
    supportedFormats = SUPPORTED_FILE_FORMATS,
    hasError = false,
  } = props;

  const handleOnDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onFileUpload(file);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [maxSizeInMb]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleOnDrop,
    accept: supportedFormats,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex justify-start items-center p-5 w-full min-h-[93px] rounded-lg border
         ${
           hasError ? "border-red" : "border-gray-200"
         } border-dashed cursor-pointer 
         ${isDragActive ? "bg-gray-300" : "bg-white"}`}
    >
      <input {...getInputProps()} />
      <div className="p-2">
      </div>
      <div className="flex flex-col ml-4">
        <>
          <div className="mb-2 text-base font-normal">
            <span className="text-primary underline">Click to upload</span>
            <span className="mx-1 text-black/90">or</span>
            <span className="text-black/80">drag and drop</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default FileDropZone;
