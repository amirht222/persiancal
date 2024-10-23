import LogoutButton from "@/components/user-files/logout-btn";
import ShowLoginModalBtn from "@/components/user-files/ShowLoginModalBtn";
import { logout } from "@/lib/actions/auth/authActions";
import { getUserInfo } from "@/lib/actions/users/usersAction";

const apiURL: string = process.env.API_URL!;

export default async function UserFilesPage() {
  const { res, status } = await getUserInfo();
  // if (status === "403") {
  //   logout();
  // }

  return (
    <div className="container mx-auto px-16">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">لیست فایل های شما</h3>
        <LogoutButton />
      </div>
      {status === "403" && (
        <div className=" flex justify-center items-center flex-col gap-2">
          <p>توکن شما منقضی شده. لطفا مجددا وارد شوید</p>
          <ShowLoginModalBtn />
        </div>
      )}
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {res?.userFiles?.map((file: { userFileUrl: string }) => (
          <li
            className="flex justify-between items-center p-4 rounded-xl bg-secondary"
            key={file.userFileUrl}
          >
            <p>نام فایل: {file.userFileUrl.split("/")[1]}</p>
            <a
              className="btn btn-primary text-white"
              download={`${apiURL}/${file.userFileUrl}`}
              href={`${apiURL}/${file.userFileUrl}`}
            >
              دانلود فایل
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
