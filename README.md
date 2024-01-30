# Bitcoin Index

## Overview

Bitcoin Index is a simple React application built using Vite. The purpose of this project is to practice using state in React (specifically, `useState`) and fetching and displaying data dynamically from an API using the Fetch API.

The application allows users to view real-time Bitcoin prices in different currencies. Users can choose a currency from a dropdown menu, and the price will update accordingly.

## Features

- **Currency Selection:** Choose from a variety of currencies to view the corresponding Bitcoin price.
- **Real-time Updates:** Prices are fetched from the [CoinDesk API](https://api.coindesk.com/v1/bpi/currentprice/) and updated dynamically.

## Installation and Usage
1. Clone the repository
```bash
git clone https://github.com/kvtrice/bitcoin-index.git
```

2. Navigate to the project directory
```bash 
cd bitcoin-index
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

## Dependencies
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

## API Used
The application fetches Bitcoin price data from the [CoinDesk API](https://api.coindesk.com/v1/bpi/currentprice/)