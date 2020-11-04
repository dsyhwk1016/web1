var Body = {
  setColor : function(color){
    $('body').css('color', color);
  },
  setBackgroundColor : function(color){
    $('body').css('background-color', color);
  }
}

var Links = {
  setColor : function(color){
    $('a').css('color', color);
  }
}

var Button = {
  setColor : function(color){
    $('.button').css('color', color);
  },
  setBackgroundColor : function(color){
    $('.button').css('background-color', color);
  }
}

function changeMode(self){
  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('yellow');
    self.value = 'day';
  } else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('blue');
    self.value = 'night';
  }
}

function changeOnMouse(self){
  Button.setColor('white');
  Button.setBackgroundColor('gray');
}

function changeLeaveMouse(self){
  Button.setColor('black');
  Button.setBackgroundColor('#FEFEFE');
}
