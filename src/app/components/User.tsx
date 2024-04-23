import { UserProps } from "@/types";
import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function User({ user }: { user: UserProps }) {
  return (
    <Card>
      <CardHeader title={`${user.title}`}></CardHeader>
    </Card>
  );
}
