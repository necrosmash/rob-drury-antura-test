import { FetchedUser } from "@/types";
import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function User({ user }: { user: FetchedUser }) {
  return (
    <>
      <Card>
        <CardHeader
          title={`${user.title} ${user.nameFirst} ${user.nameLast}`}
        ></CardHeader>
      </Card>
    </>
  );
}
