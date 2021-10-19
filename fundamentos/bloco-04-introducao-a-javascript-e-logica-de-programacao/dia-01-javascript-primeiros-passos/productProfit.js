const productPriceBuy = 122.25;
const productPriceSell = 150.00;

if (productPriceBuy <= 0 || productPriceSell <= 0) {
  console.log('Erro: Seu produto não pode custar 0 ou menos.');
} else {
  const productTax = (productPriceBuy / 100) * 20;
  const productCust = productTax + productPriceBuy;
  const productProfit = productPriceSell - productCust;
  console.log('Sendo vendidadas mil unidades do seu produto você receberá um lucro de R$:' + (productProfit * 1000).toFixed(2));
}