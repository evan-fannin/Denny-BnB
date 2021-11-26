export default function parseDateString(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const namedDay = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const day = date.getDate().toString();




    return (
        namedDay.concat(', ', month, ' ', day)
    );
}