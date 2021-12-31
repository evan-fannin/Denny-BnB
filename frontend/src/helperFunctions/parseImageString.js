export default function parseImageString(string) {
    const root = 'http://13.58.89.254';

    if (string.charAt(0) !== '/') {
        string = '/' + string;
    }

    const image_url = root + string;
    return image_url;
}