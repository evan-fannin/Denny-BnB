import { rootURL } from "../axios";

export default function parseImageString(string) {
    const root = rootURL;

    if (string.charAt(0) == '/') {
        string = string.substring(1)
    }

    const image_url = root + string;
    return image_url;
}