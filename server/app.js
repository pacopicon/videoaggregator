const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const https = require('https')
const Vimeo = require('vimeo').Vimeo
const mongoose = require('mongoose')
const port = 8000
const app = express()

require('dotenv').config({path: 'variables.env'})
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
	console.error(`mongoose connection error: ${err.message}`)
})

require.('./models/Videos')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.json())
app.use(express.urlencoded())




const client = new Vimeo('2bfaa99affb5992f96a7bd40a8198349dbeb5159', '9Tf7g9z9jHc9AwkEz3OTIJN1cDP5LMrBh5fqVyi9gB29XMo4QAdD/GWk0o5AKdHs8gUZrg1UxcR2H7U6FIX/esUaUxCAxszYjIhDutjGXO0XAaTohDX3rrsrlt7Avwja', 'd21ab739c3d0b5c0906ec55ef1d6da28');




const getAuth = () => {
	client.generateClientCredentials('public', function (err, response) {
	  if (err) {
	    throw err;
	  }

	  let token = response.access_token;

	  // Other useful information is included alongside the access token,
	  // which you can dump out to see, or visit our API documentation.
	  //
	  // We include the final scopes granted to the token. This is
	  // important because the user, or API, might revoke scopes during
	  // the authentication process.
	  let scopes = response.scope;
	  console.log(`response.access_token = ${response.access_token}`)
	});



	// https://api.vimeo.com/channels?direction=desc&filter=featured&page=1&per_page=100&sort=followers

	// if its directory, url looks like: https://vimeo.com/channels/directory/sort:followers
	// if its feautred, url looks like: https://vimeo.com/channels/sort:followers

	// different sorts:
	// -date
	// -alphabetical
	// -videos
	// -followers

}

// const postDataToLocalApi = (data) => {

// 	app.post('/api/channels', (req, res) => {

// 	let channel = req.body.data ? req.body.data : 'staffpicks'

// 	console.log('req.body = ' + JSON.stringify(req.body))
// 	console.log('POST successful with channel = ' + channel)
	
// 	getAuth()
// 	callApi(channel)
// })

// }


const callApi = (channel) => {

	console.log('callApi: channel = ' + channel)

	client.request(/*options*/{
	  // This is the path for the videos contained within the staff picks
	  // channels
	  path: `/channels/${channel}/videos`,
	  // This adds the parameters to request page two, and 10 items per
	  // page
	  query: {
	    page: 2,
	    per_page: 10,
	    fields: 'uri,name,description,duration,created_time,modified_time'
	  }
	}, /*callback*/function (error, body, status_code, headers) {
	  if (error) {
	    console.log('error');
	    console.log(error);
	  } else {
	    console.log('body');
	    console.log(body);
	    console.log(typeof body);
	    return body
	  }

	  console.log('status code');
	  console.log(status_code);
	  console.log('headers');
	  console.log(headers);
	});
}


// let channel = 'staffpicks'

let data = 'there is no data yet'

app.post('/api', (req, res) => {

	let channel = req.body.data ? req.body.data : 'staffpicks'

	console.log('req.body = ' + JSON.stringify(req.body))
	console.log('POST successful with channel = ' + channel)
	
	getAuth()

	// const getBody = async () => {
	// 	const body = await callApi(channel)
	// 	return JSON.stringify(body)
	// }
	// let body = 
	// data = body
	// res.send(body)

	app.get('/api', (req,res) => {
		// res.send(getBody())
		res.send(callApi(channel))
	})
})



// async function postData() {
// 	try {
// 		const response = await app.post('/api', (req, res) => {

// 			// let channel = req.body.text ? req.body.text : 'staffpicks'
// 			let channel = req.body

// 			console.log('POST successful with channel = ' + channel)
// 			// console.log('req.body.channel = ' + JSON.stringify(req.body.channel))
// 			console.log('req.body = ' + JSON.stringify(req.body))

// 			return channel

// 			// getAuth()
// 			// callApi(channel)
// 		})
// 	} catch (error) {
// 		console.error(error)
// 	}
// }



app.set('port', port)
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'out')))

app.listen(port, (err) => {
	if (err) { throw err }
		console.log('Hi Paco, server is listening on port ' + port + ' 👏👏👏')
})