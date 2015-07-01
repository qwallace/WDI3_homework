//https://gist.github.com/epoch/0771187f6d02e1006210

var metro ={ 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }

function trip(on,off) {
  for (var key in metro) {
    if ((metro[key].indexOf(on) !== -1) && (metro[key].indexOf(off) !== -1)) {
     sameline(on,off,key)
     return console.log(TotalJourney)
     //console.log(key + ': Both ARE on this line');
    } else if ((metro[key].indexOf(on) == -1) && (metro[key].indexOf(off) !== -1)) {
      offline(on,off,key) 
      //console.log(key + ': "on" NOT this line, "off" IS on this line');
    } else if ((metro[key].indexOf(on) !== -1) && (metro[key].indexOf(off) == -1)) {
      online(on,off,key)
      //console.log(key + ': "on" IS on this line, "off" NOT this line');
    } else if ((metro[key].indexOf(on) == -1) && (metro[key].indexOf(off) == -1)) {
      //Both NOT on this line
    }
  }
  console.log(ToRichmond + FromRichmond)
}

function sameline(on,off,key) {
  var Startpoint = metro[key].indexOf(on)
  var Endpoint = metro[key].indexOf(off)
  TotalJourney = Math.abs(Endpoint - Startpoint)+1
}

function online(on,off,key) {
  var Startpoint = metro[key].indexOf(on)
  var Endpoint = metro[key].indexOf('Richmond')
  ToRichmond = Math.abs(Endpoint - Startpoint)+1
}
function offline(on,off,key) {
  var Startpoint = metro[key].indexOf('Richmond')
  var Endpoint = metro[key].indexOf(off)
  FromRichmond = Math.abs(Endpoint - Startpoint)
}
