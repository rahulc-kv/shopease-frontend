export type FileDropZoneProps = {
  onFileUpload: (file: File) => void;
  maxSizeInMb: number;
  supportedFormats?: Accept;
  hasError?: boolean;
  };
  
  export type Accept = {
    [key: string]: string[];
  };
  