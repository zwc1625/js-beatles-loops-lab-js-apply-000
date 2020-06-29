function theBeatlesPlay(musicians,instruments){
  let playInstrument = [];
  for(let i=0;i<musicians.length;i++){
    playInstrument.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return playInstrument;
}

function johnLennonFacts(arr){
  let emptyArrr = [];
  let i = 0;
  while(i<arr.length){
    emptyArrr.push(`${arr[i]}!!!`)
    i++;
  }
  return emptyArrr;
}

function iLoveTheBeatles(n){
  let loveBeatles = [];
  do{
    loveBeatles.push(`I love the Beatles!`)
    n++;
  }
  while(n<15);
  return loveBeatles;
}
