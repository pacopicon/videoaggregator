import React, { Component } from 'react';
import Head from 'next/head';
import { Form, FormGroup, Label, Row, Col, Input, Button } from 'reactstrap';
import { row } from './css.js'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      featuredChannel: '',
      data: ''
    }
    this.handleRequest = this.handleRequest.bind(this)
    this.request = this.request.bind(this)
    this.post = this.post.bind(this)
    // this.getAuth = this.getAuth.bind(this)
  }

  handleRequest(e) {
    this.setState({
      featuredChannel: e.target.value
    })
  }

  // getAuth() {
  //   // let URL = `https://api.vimeo.com/oauth/authorize/client`
  //   let URL = `https://api.vimeo.com/oauth/authorize/client&grant_type=client_credentials`
  //   let client_id = '2bfaa99affb5992f96a7bd40a8198349dbeb5159',
  //       client_secret = '9Tf7g9z9jHc9AwkEz3OTIJN1cDP5LMrBh5fqVyi9gB29XMo4QAdD/GWk0o5AKdHs8gUZrg1UxcR2H7U6FIX/esUaUxCAxszYjIhDutjGXO0XAaTohDX3rrsrlt7Avwja',
  //       credentials = client_id + ':' + client_secret
  //   fetch(URL, {
  //     method: "POST",
  //     cache: "default",
  //     accept: "application/vnd.vimeo.*+json;version=3.4",
  //     ContentType: "application/json",
  //     Authorization : `basic ${atob(credentials)}`
  //   })
  //   .then( res => {
  //     console.log(`called ${ URL }`)
  //     return res.json()
  //   })
  //   .then(json => {
  //     console.log(`json = ${JSON.stringify(json)}`)
  //   })
  //   .catch(error => {
  //     console.log(`${error}: failed to fetch from ${ URL }`)
  //     console.dir(error)
  //   })
  // }

  // <Button outline color="primary" style={{ width: '100%', height: '180px', fontSize: '80px'}} onClick={ () => this.getAuth()}>getAuth</Button>

  // request() {
  //   let URL = `https://api.vimeo.com/channels`,
  //       // authToken = "7962960ba98f28b871cfe391e88f65f3"
  //       // authToken = "d21ab739c3d0b5c0906ec55ef1d6da28"
  //       authToken = "af9d6f3e23c4aaaa1b3d35a8ea73d25e"
  //   fetch(URL, {
  //     method: "GET",
  //     cache: "default",
  //     accept: "application/vnd.vimeo.*+json;version=3.4",
  //     ContentType: "application/json",
  //     Authorization: `Bearer ${authToken} https://api.vimeo.com`
  //   })
  //   .then( res => {
  //     console.log(`called ${ URL }`)
  //     return res.json()
  //   })
  //   .then(json => {
  //     console.log(`json = ${JSON.stringify(json)}`)
  //   })
  //   .catch(error => {
  //     console.log(`${error}: failed to fetch from ${ URL }`)
  //     console.dir(error)
  //   })
  // }

  post(d) {
    console.log('requested data = ' + d)
    console.log('typeof data = ' + typeof d)
    let data = {channel: d}
    // fetch('/api', {
    //   // body: JSON.stringify(data),
    //   body: d,
    //   cache: "default",
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded; charset-UTF-8"
    //     // 'Content-Type': 'application/json'
    //   },
    //   method: "POST"
    // })
    // .then( res => {
    //   console.log(`Accepted response: ${JSON.stringify(res.json())}`)
    //   return res.json()
    // })
    // .then(json => {
    //   console.log(`json = ${JSON.stringify(json)}`)
    // })
    // .catch(error => {
    //   console.log(`${error}: failed to fetch from ${ URL }`)
    //   console.dir(error)
    // })

    axios.post('/api', {
      data: d
    })
    .then( res => {
      console.log('res = ' + res)
    })
    .catch( error => {
      console.log('error: ' + error)
    })



  }

  request() {
    // axios.get('/api', {

    //   })
    //   .then( res => {
    //     console.log('axios get res = ' + res)
    //   })
    //   .catch( error => {
    //     console.log('axios error = ' + error)
    //   })

    fetch('/api', {
      method: "GET",
      cache: "default"
    })
    .then( res => {
      console.log(`res -> JSON.stringify(res.json()) = ${ JSON.stringify(res.json()) }`)
      return res.json()
    })
    .then(json => {
      console.log(`json = ${ json }`)
      this.setState({
        data: json
      })
    })
    .catch(error => {
      console.log(`${error}: failed to fetch from ${ URL }`)
      console.dir(error)

    })
  }

  render() {

    const { featuredChannel } = this.state

    return (
      <div>
        <Head>
          <link href="/static/bootstrap.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" />
        </Head>
        <Row style={ row }>
          <Col xs={{ size: 4, offset: 4 }}>
            <Input type="text" name="text" style={{ width: '100%', height: '180px', fontSize: '80px'}} placeholder='channel' value={ featuredChannel } onChange={this.handleRequest} />
          </Col>
          <Col xs='4'>
            
          </Col>
        </Row>
        <Row style={ row }>
          <Col xs={{ size: 4, offset: 4 }}>
          <Button outline color="primary" style={{ width: '100%', height: '180px', fontSize: '80px'}} onClick={ () => this.post(featuredChannel)}>Post</Button>
          <Button outline color="primary" style={{ width: '100%', height: '180px', fontSize: '80px'}} onClick={ () => this.request(featuredChannel)}>Request</Button>
          </Col>
          <Col xs='4'>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;