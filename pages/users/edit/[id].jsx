import { useState, useEffect } from 'react';

import { Layout, AddEdit } from 'components/users';
import { Spinner } from 'components';
import { userService, alertService } from 'services';
import {useRouter} from "next/router";

export default Edit;

function Edit({ id }) {
    const [user, setUser] = useState(null);
    const Router = useRouter()

    useEffect(() => {
        // fetch user and set default form values if in edit mode
        userService.getById(id)
            .then(x => setUser(x))
            .catch(alertService.error)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if( userService.userValue.username === 'admin'){
        return (
            <Layout>
                <h1>Edit User</h1>
                {user ? <AddEdit user={user} /> : <Spinner /> }
            </Layout>
        );
    } else {
        Router.replace('/')
        return null
    }


}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
