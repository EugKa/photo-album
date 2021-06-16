export const fetchImagesData = async (searchParams?: string, page?: any) => {
    console.log(`object`, searchParams, page)
    const api = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchParams}&image_type=photo&pretty=true&page=${page}`
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data.hits
    } catch (error) {
        if (error) {
            return error.message
        }
    }
}
