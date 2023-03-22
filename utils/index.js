
export const checkImageURL = (url) => {
    if (url !== null) return true;
    else {
        const pattern = new RegExp('^http?:\\/\\/.(png|jpg|jpeg|bmp|gif|web)$', 'i');
        return pattern.test(url);
    }
};