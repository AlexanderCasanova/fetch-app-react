import { useEffect, useState } from "react"

interface User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
}

export const useFetch = (url: string) => {

    const [state, setState] = useState<{
        data: User[];
        isLoading: boolean;
        errors: string;
    }>({
        data: [],
        isLoading: true,
        errors: ""
    });


    const dataFetch = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: ""
            })
        } catch (err: unknown) {
            if (err instanceof Error) {
                setState({
                    data: [],
                    isLoading: false,
                    errors: 'Ocurrió un error inesperado ' + err.message,
                });
            } else {
                // Aquí puedes manejar otros tipos de errores si es necesario.
                console.log('Error inesperado:', err);
            }
        }
    }

    useEffect(() => {
        dataFetch()
    }, [url])

    return state
}