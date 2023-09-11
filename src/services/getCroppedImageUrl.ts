import i from "../assets/no-image.webp";
const getCroppedImageUrl = (url: string) => {
    if(!url) return i;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    let newUrl = url.slice(0, index) + "crop/600/400/"+ url.slice(index);    
    return newUrl;
}

export default getCroppedImageUrl;