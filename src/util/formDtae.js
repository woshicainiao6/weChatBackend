const  formatDate =function (dateTimeString)
{
    const date = new Date(dateTimeString);
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hour = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${year}年${month}月${day}日${hour}时${min}分`;
}
export default formatDate