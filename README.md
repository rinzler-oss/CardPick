# CardPick

**Find the best credit card for every purchase.**

CardPick is a free, open-source credit card reward optimizer built for India. It doesn't just compare cards — it finds multi-step purchase routes that maximize your cashback and reward points.

## What it does

- **Smart Route Engine** — Discovers strategies like "Buy Amazon Gift Card with 5% online card → Use GC to recharge mobile" instead of paying directly at 1% utility rate
- **113+ Credit Cards** — HDFC, SBI, ICICI, Axis, Kotak, IDFC, Amex, RBL, AU, IndusInd, Canara, and more
- **Gift Card Arbitrage** — Amazon GC, Flipkart GC, Swiggy/Zomato/BigBasket/BookMyShow GC routes
- **HDFC SmartBuy** — 10x reward point calculations with monthly caps
- **RuPay CC on UPI** — Routes for offline, grocery, dining, fuel, and NPCI cashback schemes
- **Card Network Filter** — Compare only Visa, Mastercard, RuPay, Amex, or Diners cards
- **35 Purchase Types** — From mobile recharge to rent payment, grouped by category
- **Auto-updating Card DB** — Card data fetched from GitHub, always up to date

## How it works

1. **Add your credit cards** in the "My Cards" tab (search from the built-in database or add manually)
2. **Select what you're buying** — e.g., "Electricity Bill", "Swiggy Food Delivery", "Flight Booking"
3. **Enter the amount** and hit "Find Best Route"
4. CardPick ranks all options — direct payments and multi-step routes — showing you the highest reward path

### Example

For a **₹1,000 mobile recharge**, CardPick might find:

| Route | Reward |
|-------|--------|
| Buy Amazon GC (5% online rate) → Recharge via Amazon | ₹50.00 |
| Pay directly with SBI Cashback (0% on utilities) | ₹0.00 |

That's ₹50 saved by using a smarter route.

## Card Data Sources

All card details are sourced from official bank websites:
- [hdfcbank.com](https://www.hdfcbank.com)
- [sbicard.com](https://www.sbicard.com)
- [icicibank.com](https://www.icicibank.com)
- [axisbank.com](https://www.axisbank.com)
- [canarabank.com](https://www.canarabank.com)
- And other official bank portals

Card data is stored in [`cards.json`](cards.json) with per-card `lastVerified` timestamps.

## Setup

No build tools, no frameworks, no dependencies. Just open the file.

```
git clone https://github.com/rinzler-oss/CardPick.git
cd CardPick
```

Open `index.html` in your browser. That's it.

### Hosting

Works on any static hosting — GitHub Pages, Netlify, Vercel, or just open the file locally.

## Updating Card Data

Card data lives in `cards.json` and is fetched by the app on load. To update:

1. Edit `cards.json` — add/modify card entries
2. Bump the `version` field
3. Update `lastUpdated` to today's date
4. Commit and push

The app picks up changes automatically. If the fetch fails (e.g., offline), it falls back to the embedded card database.

## Project Structure

```
CardPick/
├── index.html      # Entire app (HTML + CSS + JS, single file)
├── cards.json      # External card database (113 cards, 10 SmartBuy rates)
└── .github/
    └── FUNDING.yml # Sponsorship config
```

## Supported Banks

HDFC Bank, SBI Card, ICICI Bank, Axis Bank, Kotak Mahindra, IDFC FIRST, RBL Bank, Federal Bank, American Express, IndusInd Bank, YES Bank, Standard Chartered, HSBC, Bank of Baroda, Canara Bank, OneCard, AU Small Finance, Fi (Federal)

## Route Types

| Route | How it works |
|-------|-------------|
| Amazon Gift Card | Buy GC at online rate → use for bills/shopping/other GCs |
| Flipkart Gift Card | Buy GC at online rate → use for Flipkart/Myntra |
| HDFC SmartBuy | Book via SmartBuy portal for 10x reward points |
| Tata Neu Ecosystem | Earn NeuCoins on BigBasket, Croma, 1mg, Westside |
| RuPay CC on UPI | Pay at UPI QR using RuPay credit card via PhonePe/GPay |
| Rent Payment | Pay rent via CRED/NoBroker with fee-adjusted rewards |
| Platform Bill Pay | Pay bills via PhonePe/GPay/Airtel Thanks |

## Contributing

Contributions are welcome. If you spot outdated card data or know a new reward route:

1. Fork the repo
2. Update `cards.json` or `index.html`
3. Submit a PR with the source (official bank URL) for any data changes

## Support

If CardPick has saved you money, consider supporting the project:

<a href="https://buymeacoffee.com/rinzleross" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40"></a>

## License

MIT
