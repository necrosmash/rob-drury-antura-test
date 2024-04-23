import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import { FetchedUser } from "@/types";
import styles from "./UserCard.module.css";

export default function UserCard({ user }: { user: FetchedUser }) {
  return (
    <Card className={styles.card}>
      <div className={styles.cardTop}>
        <CardHeader
          sx={{ padding: 0 }}
          title={`${user.title} ${user.nameFirst} ${user.nameLast}`}
        ></CardHeader>
        <Image
          className={styles.avatar}
          src={`${user.avatar}`}
          alt={`${user.nameFirst} ${user.nameLast}'s avatar`}
          width={200}
          height={200}
        ></Image>
      </div>
      <div className={styles.cardBody}>
        <CardContent>
          <h4>Address</h4>
          {user.address.map((addressSegment, index) => (
            <p key={index}>{addressSegment}</p>
          ))}
        </CardContent>
        <div>
          <CardContent>
            <h4>Username</h4>
            {user.username}
          </CardContent>
          <CardContent>
            <h4>Date of birth</h4>
            {user.dob.toLocaleDateString()}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
