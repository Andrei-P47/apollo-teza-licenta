import { Layout, AddEdit } from 'components/users';
import {userService} from "../../services";
import {Link, Spinner} from "../../components";
import {useRouter} from "next/router";

export default Add;

function Add() {
    const Router = useRouter()

    if( userService.userValue.username === 'admin'){
        return (
            <Layout>
                <h1>Add User</h1>
                <AddEdit />
            </Layout>
        );
    } else {
        Router.replace('/')
        return null
    }
}