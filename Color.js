var Body = {
  setColor : function(color){
    document.querySelector('body').style.color = color
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color
  }
}

var Links = {
  setColor : function(color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while (i<links.length) {
    links[i].style.color = color
    i=i+1
    }
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
