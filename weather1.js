const options = {
    method: 'GET',
    url: 'https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/',
    params: {id: 'lF-jPBnZ098'},
    headers: {
      'x-rapidapi-host': 'coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com',
      'x-rapidapi-key': 'a64059a4e2mshaebfe883483ac3ap16d91ejsnef12c08b96bd'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });