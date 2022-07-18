import React from "react";
import {useDropzone} from 'react-dropzone';
import { baseStyle, focusedStyle, acceptStyle, rejectStyle } from "./style";

export default function UploadForm(props) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'image/*': []}});

  const style = React.useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="mt-5">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Przeciągnij tutaj badania bądź kliknij aby wysłać</p>
      </div>
    </div>
  );
}
