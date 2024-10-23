import { getUserInfo } from "@/lib/actions/users/usersAction";
import { Provider } from "@/lib/interfaces/general-types";
import NavItem from "./nav-item";
import CustomerServiceBtn from "./customer-service-btn";

interface Props {
  provider: Provider;
}

export default async function AuthorizationCheck({provider}: Props) {
    const res = await getUserInfo();

  return (
    <>
      {res?.authorized && (
        <NavItem href={`/${provider}/user-files`}>خدمات مشتری</NavItem>
      )}
      {!res?.authorized && <CustomerServiceBtn />}
    </>
  );
}
