function getShippingCost(country) {
    switch (country){
      case 'China':
        let priceChina = 100;
        console.log(`Shipping to ${country} will cost ${priceChina} credits`);
        break;
      case 'Chile':
        let priceChile = 250;
        console.log(`Shipping to ${country} will cost ${priceChile} credits`);
        break;
      case 'Australia':
        let priceAustralia = 170;
        console.log(`Shipping to ${country} will cost ${priceAustralia} credits`);
        break;
      case 'Jamaica':
        let priceJamaica = 120;
        console.log(`Shipping to ${country} will cost ${priceJamaica} credits`);
        break;
      default:
        console.log('Sorry, there is no delivery to your country');
    }
  }
  
  console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
  console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
  console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
  console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
  console.log(getShippingCost("Sweden")); 