function generateFakeProductKey(): string {
  const segments = 5;
  const segmentLength = 5;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let productKey = '';

  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      segment += chars[randomIndex];
    }
    productKey += segment;
    if (i < segments - 1) {
      productKey += '-';
    }
  }

  return productKey;
}

console.log(generateFakeProductKey());

