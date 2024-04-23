"use client";

import { Button } from "@mui/material";
//import Link from "next/link";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error loading user!</h2>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
