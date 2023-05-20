import { useEffect } from "react"

const UseTitles = (title) => {
    useEffect( () => {
        document.title =  `Action Toys | ${title}`
    }, [title])
};

export default UseTitles;