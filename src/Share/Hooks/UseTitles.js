import { useEffect } from "react"

const UseTitles = (title) => {
    useEffect( () => {
        document.title =  `${title} - Action Toys`
    }, [title])
};

export default UseTitles;