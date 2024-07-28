import { useState } from "react";

const MinimalFileInputTest = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file); // Log the file to ensure it is captured
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    console.log("File ready to be uploaded:", selectedFile);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Minimal File Input Test</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fileInput">Choose file:</label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={handleFileChange}
            style={{
              display: "block",
              marginTop: "10px",
              padding: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default MinimalFileInputTest;
