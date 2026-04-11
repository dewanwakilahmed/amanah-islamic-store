// Stub — wire real Meta Pixel ID here in Phase B
// ViewContent fires on /30-stickers-pack page load
// InitiateCheckout fires on order form focus

export function fireViewContent(): void {
  if (typeof window === "undefined") return;
  // TODO: Replace 'PIXEL_ID' with real Meta Pixel ID from .env.local
  // window.fbq('track', 'ViewContent', {
  //   content_name: '30 Islamic Dua Stickers',
  //   content_category: 'Islamic Products',
  //   currency: 'BDT',
  //   value: 320,
  // });
  console.log("[Meta Pixel] ViewContent fired (stub)");
}

export function fireInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  // TODO: wire on order form focus
  console.log("[Meta Pixel] InitiateCheckout fired (stub)");
}
