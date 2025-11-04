import { useState, useRef } from "react";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {};
  const removeImage = () => {};

  return <div>MessageInput</div>;
};
export default MessageInput;
