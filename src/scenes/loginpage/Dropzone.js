import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop }) => {
  const onDropCallback = useCallback(
    (acceptedFiles) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropCallback,
  });

  return (
    <div {...getRootProps()}>
      <input
        className=" w-full border-slate-400 cursor-pointer outline-none"
        placeholder=" Drag 'n' drop file here, or click to select file"
        type="file"
      />
      <input type="file" name="file" {...getInputProps()} />
    </div>
  );
};

export default Dropzone;
