import User from "@/app/components/User";
import { UserProps } from "@/types";

async function getData() {
  const res = await fetch("https://randomuser.me/api/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const user: UserProps = {
    gender: data.results[0].gender,
    title: data.results[0].name.title,
  };

  return <User user={user}></User>;
}
