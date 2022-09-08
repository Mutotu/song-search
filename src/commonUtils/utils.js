export function totalPrice(user) {
  const getPricesOnly = user.myAlbums.map((item) => item.collectionPrice);

  return getPricesOnly.reduce(getSum, 0);
}

export function getSum(total, num) {
  return total + num;
}
