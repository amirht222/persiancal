import { getUserInfo } from "@/lib/actions/users/usersAction";

export default async function UserFilesPage() {
  const res = await getUserInfo();
  return <div>your files!</div>;
}