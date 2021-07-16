const convertTo = {
	Number: v => {
		if (v == null || v === '')
			return null;
		const num = Number(v);
		if (isNaN(num))
			return null;
		return num;
	},
	Boolean: v => {
		const trues = [
			'true',
			't',
			'y',
			'yes',
			'haan',
			'ok'
		];
		const falses = [
			'false',
			'f',
			'n',
			'no',
			'naheen',
			'bad'
		];

		if (trues.indexOf(v) >= 0)
			return true;
		if (falses.indexOf(v) >= 0)
			return false;
		return null;
	},
	Date: v => {
		if (v === 'now')
			return new Date(Date.now());
		
		try {
			new Date(Date.parse(v)).toISOString();
		} catch(e) {
			return null;
		}

		return new Date(Date.parse(v));
	}
};

module.exports = {
	convertTo
};