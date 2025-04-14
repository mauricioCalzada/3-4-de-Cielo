export function calculateBulkPrice(product, quantity) {
    const { basePrice, bulkPricing } = product;
  
    const applicable = bulkPricing
      ?.filter((tier) => quantity >= tier.minQuantity)
      .sort((a, b) => b.minQuantity - a.minQuantity)[0];
  
    const discount = applicable ? applicable.discount : 0;
    const unitPrice = basePrice * (1 - discount);
    const total = unitPrice * quantity;
  
    return {
      unitPrice,
      total,
      appliedDiscount: discount,
      discountMessage: discount > 0 ? `${discount * 100}% discount applied for buying ${applicable.minQuantity}+!` : null
    };
  }
  