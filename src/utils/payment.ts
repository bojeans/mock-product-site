export const handleBuyClick = async (productId: number, title: string) => {
  try {
    // Simulate a payment request to a mock Stripe API
    const response = await fetch("/api/mock-stripe-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Payment successful:", result);
      alert(`Successfully purchased ${title}`);
    } else {
      throw new Error("Payment failed");
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment error. Please try again.");
  }
};
