import { useParams } from 'react-router-dom'
import { URLParam } from 'src/types/url'

export const useURL = () => {
    const { path } = useParams<URLParam>()

    return {
        path,
    }
}
