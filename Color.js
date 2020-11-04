var Body = {
  setColor : function(color){
    $('body').css('color', color)
  },
  setBackgroundColor : function(color){
    $('body').css('background-color', color)
  }
}

var Links = {
  setColor : function(color){
    $('a').css('color', color)
  }
}

function changeMode(self){
  if(self.value === 'night'){
    Body.setColor('white')
    Body.setBackgroundColor('black')
    Links.setColor('yellow')
    self.value = 'day'
  } else{
    Body.setColor('black')
    Body.setBackgroundColor('white')
    Links.setColor('blue')
    self.value = 'night'
  }
}

function changeOnMouse(){
  Body.setBackgroundColor('gray')
}

function changeLeaveMouse(self){
  if(self.value === 'night')
    Body.setBackgroundColor('white')
  else
    Body.setBackgroundColor('black')
}
