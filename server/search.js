const cli = require('commander')
const https = require('https')

cli
	.version('0.0.1')
	.description('Command Line Search Engine')

cli
	.command('search <query>')
	.description('Search a query')
	.action( query => {

		const URL = `https://www.google.com/search?q=${query}`

		https.get(URL, res => {
			res.setEncoding('utf8')
			let body = ''
			res.on('data', data => {
				body += data
			})
			res.on('end', () => {
				console.log(`body = ${body}`)
				// body = JSON.parse(body)
				// console.log(`body = ${body}`)
			})
		})
	})

cli.parse(process.argv)





