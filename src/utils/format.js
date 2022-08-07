
export function compare(a, b) {
    if (a.name.common < b.name.common) {
        return -1;
    }
    if (a.name.common > b.name.common) {
        return 1;
    }
    return 0;
}

export const FormatInput = (str) => { // chuẩn hóa xóa dấu tiếng Việt
    return str.toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
}