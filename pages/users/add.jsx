import { userService } from "../../services";
import { useRouter } from "next/router";
import AddEdit from "../../components/users/AddEdit";
import Layout from "../../components/account/Layout";

export default Add;

function Add() {
  const Router = useRouter();

  if (userService.userValue.username === "admin") {
    return (
      <Layout>
        <h1>Add User</h1>
        <AddEdit />
      </Layout>
    );
  } else {
    Router.replace("/");
    return null;
  }
}
