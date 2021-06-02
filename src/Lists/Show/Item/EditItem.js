import React, { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

const EditItem = ({content, toggle }) => {
  const [input, setInput] = useState(content);

  const handleUpdate = () => {
    console.log("update", content, input);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
        <FaUpload onClick={() => handleUpdate()} />
        <FaTimes onClick={() => toggle()} />
      </input>
    </>
  );
};

export default EditItem;
