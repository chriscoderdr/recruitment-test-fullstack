import { redirect } from "next/navigation";
import { AdminContainer } from "@app/containers/admin-container/admin_container";
import { cookies } from "next/headers";
import { apiAuthService } from "@app/api/service/auth";

const Admin = async () => {
  const cookieStore = cookies();
  const authSession = await apiAuthService.authSession(cookieStore);
  if (!authSession.validCredentials) {
    return redirect("/store/auth/login");
  }

  return <AdminContainer />;
};

export default Admin;
