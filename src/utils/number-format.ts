  // 保留小数和千分位
  export function currencyFormat(value: string | number): string {
    const toFixed = (+value).toFixed(2);
    return `${toFixed}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }