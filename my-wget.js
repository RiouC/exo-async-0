const fsPromises = require('fs/promises')
const axios = require('axios');


const fetchHtml = async (url) => {
    try {
	const response = await axios.get(url);
	return response;
    } catch (error) {
	console.error(error);
	process.exit(1);
    }
}


const main = async () => {
    try {
	url = process.argv[2];
	const response = await fetchHtml(url);
	const htmlContent = response.data;
	const size = response.headers['content-length'];
	console.log(size)
	fsPromises.writeFile('index.html', htmlContent);
    } catch (e) {
	console.log(e.message)
    }
}

main();
