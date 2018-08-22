/* eslint-disable */
/**
 * scrollTo - 滚动到指定坐标
 */
const scrollTo = (to) => {
  window.scrollBy(0, -50);
  let scrolldelay = setTimeout(() => scrollTo(to), 5);
  let sTop = document.documentElement.scrollTop + document.body.scrollTop;
  if (sTop <= to) clearTimeout(scrolldelay);
};

export default scrollTo;