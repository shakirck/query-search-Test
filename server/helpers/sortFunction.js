module.exports.customSort = (a, b) => {
  let queryA = a.query.toLowerCase();
  let queryB = b.query.toLowerCase();
  let lena = queryA.split(searchText).length;

  let lenb = queryB.split(searchText).length;
  let comparison = 0;
  if (lena > lenb) {
    comparison = 1;
  } else if (lena < lenb) {
    comparison = -1;
  }
  return -1 * comparison;
};
