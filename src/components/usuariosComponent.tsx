import { useFetch } from "../hooks/fetchHook"


export const UsuariosComponent = () => {

    const { data=[], isLoading, errors } = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
        <>
            {isLoading ? <h3 className="loading-data">Cargando...</h3> :
            errors? <h3 className="error-data">Ha ocurrido un error {errors}</h3> :
                (
                    data.map((user) => {
                        return (
                            <table key={user.id}>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Information</th>
                                    </tr>
                                </thead>
                                <tbody><tr>
                                    <td>User id</td>
                                    <td>{user.id}</td>
                                </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Username</td>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Website</td>
                                        <td>{user.website}</td>
                                    </tr>
                                </tbody>

                            </table>
                        )
                    })
                )}
        </>
    )
}
