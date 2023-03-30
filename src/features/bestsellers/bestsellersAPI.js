 export const fetchData = async () => {
    const response = await fetch("http://localhost:7070/api/top-sales");
    const json = await response.json()

    return json
}

