"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b8146a4d-71b6-4b11-bb32-66c0682e9687");
  }, []);

  return null;
};
