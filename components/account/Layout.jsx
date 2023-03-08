import { useEffect } from "react";
import { useRouter } from "next/router";

import { userService } from "services";

// export { Layout };

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    // if (userService.userValue.username !== "admin") {
    //   router.push("/");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="col-md-6 offset-md-3 mt-28">{children}</div>;
};

export default Layout;
