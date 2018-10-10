const generateISOString = () => {
	const d = new Date();
	return d.toISOString();
};

export { generateISOString };