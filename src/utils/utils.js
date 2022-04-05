export const urlEncode = (string) => {
    const encodedURL = encodeURIComponent(string);
    const finalURL = encodedURL.replaceAll('%20', '+');
    return finalURL;
}