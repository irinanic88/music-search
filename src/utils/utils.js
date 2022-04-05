export const urlEncode = (string) => {
    return string.split(' ').join('+');
}