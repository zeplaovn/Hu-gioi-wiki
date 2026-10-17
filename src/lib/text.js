export const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase()
export const money = (value, currency) => `${value} ${currency}`
export const filterRows = (rows, term) => !term ? rows : rows.filter(row => normalize(Object.values(row).join(' ')).includes(normalize(term)))
