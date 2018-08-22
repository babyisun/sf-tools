/* eslint-disable */
/**
 * scrollTo - 滚动到指定坐标
 */
var scrollTo = function scrollTo(to) {
  window.scrollBy(0, -50);
  var scrolldelay = setTimeout(function () {
    return scrollTo(to);
  }, 5);
  var sTop = document.documentElement.scrollTop + document.body.scrollTop;
  if (sTop <= to) clearTimeout(scrolldelay);
};

export default scrollTo;