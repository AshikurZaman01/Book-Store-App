
const getImageURL = (name) => {
    return new URL(`../../assets/Data/books.json/${name}`, import.meta.url).href
}

export default getImageURL