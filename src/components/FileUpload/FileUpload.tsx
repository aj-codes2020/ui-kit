import { useState, ChangeEvent } from 'react';
import './FileUpload.css';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
}

const FileUpload = ({
  onFileSelect,
  accept = '',
  multiple = false,
  className = '',
}: FileUploadProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      onFileSelect(fileArray[0] ?? null);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFiles([]);
    onFileSelect(null);
  };

  return (
    <div className={`file-upload ${className}`}>
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="file-input"
      />
      {selectedFiles.length > 0 && (
        <div className="file-info">
          <p>{selectedFiles.map((file) => file.name).join(', ')}</p>
          <button onClick={handleRemoveFile}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
