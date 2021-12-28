export default function parseImageString(string) {
    const root = 'http://127.0.0.1:8000';

    if (string.charAt(0) !== '/') {
        string = '/' + string;
    }

    const image_url = root + string;
    return image_url;
}