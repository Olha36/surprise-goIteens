import { useState } from "react";

export const [showNastiia, setShowNastiia] = useState(false);

export const handleMouseEventNastiia = () => {
  setShowNastiia(true);
};