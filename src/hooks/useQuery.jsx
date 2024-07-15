import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function useQuery() {
    //get the URL params
    const { search } = useLocation();

    //search for the parameter defined in the search. will only be executed when search changes
    return useMemo(() => new URLSearchParams(search), [search])
}