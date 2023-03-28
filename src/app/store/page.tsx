import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { ProductCarousel } from "../components/product-carousel/product-carousel";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { charUtils } from "@app/utils/charUtils";

import { redirect } from "next/navigation";
import { LogoutContainer } from "@app/containers/logout_container";
import { apiAuthService } from "@app/api/service/auth";
import { productsService } from "@app/service/products";
import { ProductsContainer } from "@app/containers/products_container";

const Store = async () => {
  const cookieStore = cookies();
  const authSession = await apiAuthService.authSession(cookieStore);
  if (!authSession.validCredentials) {
    return redirect("/store/auth/login");
  }

  const username = authSession?.user
    ? charUtils.capitalize(authSession.user.username)
    : "";

  return (
    <div>
      <div className={styles.title_container}>
        <h1>Bienvenido {username}</h1>
        <h2>Productos</h2>
        <LogoutContainer />
      </div>
      <div className={styles.main_container}>
        <ProductsContainer />
      </div>
    </div>
  );
};

export default Store;
