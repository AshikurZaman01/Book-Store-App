
const getImageURL = (name) => {
    return new URL(`../../assets/images/assets/books/${name}`, import.meta.url).href
}

export default getImageURL