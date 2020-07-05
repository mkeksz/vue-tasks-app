export default function dateFilter(value) {
  const [year, month, day] = value.split('-')
  return `${day}.${month}.${year}`
}