import { useState } from "react";

export const [showErik, setShowErik] = useState(false);

export const handleMouseEventErik = () => {
  setShowErik(true);
};
