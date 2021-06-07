$(document).ready(function(){
  $('#sideMenu').sideToggle({
    moving: '#sideMenuContainer',
    direction: 'right'
  });

});

$('#music-player').simpleAudioPlayer({
  title: "داریوش و فرامرز اصلانی - اگه یه روز بری سفر",
});
$('#music-player-1').simpleAudioPlayer({
  title: "Mahsun-Kirmizigul - Vefasiz",
});

$('#gotop').gotop({

  // Background color
  background : '#181716', 

  // Rounded button?
  rounded: true, 

  // width/height
  width: '45px',
  height: '45px',

  // bottom position
  bottom : '25px',

  // right position
  right : '25px',
  // animation speed
  speed: 800,

  // custom html for the back to top button
  customHtml: '',

  // Show button only on mobile device
  mobileOnly: false 
  
});