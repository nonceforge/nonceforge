# NonceForge

NonceForge is a browser-based proof-of-work mining protocol built on Base Network.

The project focuses on:

* Fair launch mining
* Browser mining accessibility
* Epoch-based reward reduction
* Fixed supply distribution
* Competitive nonce discovery

---

# Features

* Next.js 16 + App Router
* TailwindCSS UI
* RainbowKit Wallet Connect
* WalletConnect integration
* Mining dashboard
* Epoch progression system
* Leaderboard UI
* Tokenomics page
* Documentation page
* Browser mining interface
* Live mining activity UI

---

# Tech Stack

* Next.js
* React
* TailwindCSS
* RainbowKit
* Wagmi
* Viem
* TypeScript

---

# Project Structure

web/
├── app/
│   ├── mining/
│   ├── leaderboard/
│   ├── tokenomics/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MiningTabs.tsx
│   ├── MiningDashboard.tsx
│   ├── MiningActivity.tsx
│   ├── Leaderboard.tsx
│   ├── Tokenomics.tsx
│   └── DocsContent.tsx
│
├── lib/
│   └── wallet.tsx
│
├── public/
│
└── README.md

---

# Installation

Clone repository:

git clone <repo-url>

Go to project:

cd web

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000

---

# WalletConnect Setup

Create WalletConnect Project ID:

https://cloud.walletconnect.com

Add environment variable:

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=YOUR_PROJECT_ID

---

# Mining System

NonceForge uses a browser-based proof-of-work system.

Miners:

* Generate nonce attempts
* Calculate hashes
* Submit valid nonces
* Receive epoch rewards

---

# Epoch Rewards

| Epoch   | Reward  |
| ------- | ------- |
| Epoch 1 | 100 NFG |
| Epoch 2 | 75 NFG  |
| Epoch 3 | 50 NFG  |
| Epoch 4 | 25 NFG  |
| Epoch 5 | 10 NFG  |

Mining rewards decrease over time to reduce inflation and reward early miners.

---

# Supply Model

* Max Supply: 21,000,000 NFG
* Fixed supply model
* No unlimited minting

---

# Mining Modes

## Active

* Browser Mining

## Planned

* CPU Mining
* GPU Mining

---

# Current Status

Frontend UI:

* Complete

Wallet Connection:

* Complete

Mining Simulation:

* Complete

Smart Contract:

* In Progress

Real Mining Backend:

* In Progress

GPU Miner:

* Planned

---

# Disclaimer

NonceForge is experimental blockchain infrastructure.

Mining rewards, liquidity, and token value are not guaranteed.

Always do your own research before participating.
