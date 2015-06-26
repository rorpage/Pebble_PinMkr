var myToken;

// ready event
Pebble.addEventListener('ready', function(e) {

  // get the timeline token
  Pebble.getTimelineToken(function (token) {

    // Update text on the watch with the token
    Pebble.sendAppMessage({text: 'Your timeline token: ' + token});

    // log the timeline token
    console.log('Timeline token is ' + token);

    // store the token in our global var
    myToken = token;

  }, function (error) {
    // log the error
    console.log('Error getting timeline token: ' + error);
  });
});