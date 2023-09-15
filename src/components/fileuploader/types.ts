
export type Accept = {
  [key: string]: string[];
};

export type FileUploaderPropsType = {
  name: string;
  enableCrop: boolean;
  sizeInMb: number;
  supportedFormats?: Accept;
  fileUploadSuccessHandler: (file: File, path: string) => void;
  deleteFileHandler: () => void;
  errors?: object;
  previousFile?: File;
};

export type GeneratePreSignedURLPayload = {
  content_type: string;
  content_name: string;
};

export type GeneratePreSignedURLResponse = {
  status: string;
  result: {
    upload_url: string;
    path: string;
  };
};

export type UploadFilePayload = {
  url: string;
  payload: File;
  contentType: string;
};
