"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocalePaths } from "../hooks/useLocalePaths";

const NotFoundPage = () => {
  const router = useRouter();
  const { localizePath } = useLocalePaths();

  useEffect(() => {
    router.replace(localizePath(""));
  }, []);

  return null;
};

export default NotFoundPage;
