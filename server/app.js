const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const https = require('https')
const Vimeo = require('vimeo').Vimeo
const port = 8000
const app = express()

const client = new Vimeo('2bfaa99affb5992f96a7bd40a8198349dbeb5159', '9Tf7g9z9jHc9AwkEz3OTIJN1cDP5LMrBh5fqVyi9gB29XMo4QAdD/GWk0o5AKdHs8gUZrg1UxcR2H7U6FIX/esUaUxCAxszYjIhDutjGXO0XAaTohDX3rrsrlt7Avwja', 'd21ab739c3d0b5c0906ec55ef1d6da28');

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

const URL = `https://api.vimeo.com/channels`

client.request(/*options*/{
  // This is the path for the videos contained within the staff picks
  // channels
  path: '/channels/staffpicks/videos',
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
  }

  console.log('status code');
  console.log(status_code);
  console.log('headers');
  console.log(headers);
});

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

app.use(bodyParser.json())
app.set('port', port)
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'out')))

app.listen(port, (err) => {
	if (err) { throw err }
		console.log('Hi Paco, server is listening on port ' + port + ' 👏👏👏')
})