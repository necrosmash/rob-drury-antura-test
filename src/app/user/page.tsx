import User from "@/app/components/User";
import { FetchedUser } from "@/types";

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
  const user: FetchedUser = {
    gender: data.results[0].gender,
    title: data.results[0].name.title,
    nameFirst: data.results[0].name.first,
    nameLast: data.results[0].name.last,
  };

  console.log(user.nameFirst);
  return <User user={user}></User>;
}
