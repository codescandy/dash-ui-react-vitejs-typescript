// import node module libraries
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap";

const thumbsContainer = {
  display: "flex" as "flex",
  flexDirection: "row" as "row",
  flexWrap: "wrap" as "wrap",
  marginTop: 16,
  boxSizing: "border-box" as const,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box" as const,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  boxSizing: "border-box" as const,
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  boxSizing: "border-box" as const,
};

type FileType = {
  name: string;
  size: number;
  type: string;
  preview: string;
};

export const DropFiles = () => {
  const [files, setFiles] = useState<FileType[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image src={file.preview} style={img} alt={file.name} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="text-center">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};
