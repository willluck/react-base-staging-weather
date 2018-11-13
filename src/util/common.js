// 截取当前时间
const getTime = (time: String) => {
  const hour = time.slice(-4, -2);
  const min = time.slice(-2);
  if (hour === '00') {
    return '明天';
  }
  return `${hour}:${min}`;
};

export default getTime;
