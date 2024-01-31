import React, { useState, useEffect } from "react";

const CurrencySelector = ({ currency, setCurrency }) => {

	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		fetch(`https://api.coindesk.com/v1/bpi/supported-currencies.json`)
			.then((res) => res.json())
			.then((data) => setCurrencies(data));
	}, []);

	return (
		<select
			onChange={(event) => setCurrency(event.target.value)}
			value={currency}
		>
			{currencies.map(curr => <option key={curr.currency} value={curr.currency}>{curr.country}</option>)}
		</select>
	);
};

export default CurrencySelector;