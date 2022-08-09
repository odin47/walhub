export const convertString = (value, splitTypeFrom, splitTypeTo) => {
    return value.replace(splitTypeFrom, splitTypeTo)
    .split(splitTypeTo)
    .map(item => item.replace(item.charAt(0), item[0].toUpperCase()))
    .join(splitTypeTo)
}