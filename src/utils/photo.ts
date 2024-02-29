
const noPhotosCode = ['BV', 'BL', 'IO', 'GP', 'GF', 'HM', 'PM', 'SJ', 'BQ', 'SX', 'UM', 'XK']

export function validatePhoto(code:string) {
    return noPhotosCode.includes(code) ? false : true;
}