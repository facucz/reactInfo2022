/**
 *  Convert a string that represents a date and return the same date in the following format : 28-06-2022 a las 03:00 hs
 * 
 * @param {string} date - Date in format YYYY-MM-DD-THH:MM:SS
 */
export function getCustomDate(date) {
    const editedDate = date.slice(0, -1)
    const d = new Date(editedDate);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hour = d.getHours();
    const minutes = d.getMinutes();

    return `${day}-${month}-${year} a las ${hour}:${minutes} hs.`;
}