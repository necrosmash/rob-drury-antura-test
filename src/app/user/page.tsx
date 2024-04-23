import UserCard from "@/app/components/UserCard";
import { FetchedUser } from "@/types";
import styles from "./styles.module.css";

async function getData() {
  // "no-store" for server-rendering on-demand:
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const resUser = data.results[0];
  const user: FetchedUser = {
    gender: resUser.gender,
    title: resUser.name.title,
    nameFirst: resUser.name.first,
    nameLast: resUser.name.last,
    avatar: resUser.picture.large,
    address: [
      resUser.location.street.number + " " + resUser.location.street.name,
      resUser.location.city,
      resUser.location.state,
      resUser.location.country,
      resUser.location.postcode,
    ],
    dob: new Date(resUser.dob.date),
    username: resUser.login.username,
  };

  return (
    <div className={styles.userPage}>
      <UserCard user={user}></UserCard>
    </div>
  );
}
