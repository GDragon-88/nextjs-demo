export const formatMoney = (number: number) => {
  return formatNumber(number, "VND");
};

function formatNumber(n: number, currency: string) {
  return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
