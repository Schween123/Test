//Swen Roy T. Labra Jr.
const recordCollection = {
  2548: {
          albumTitle: 'Slippery When Wet', 
          artists: 'Bon Jovi',
          tracks: ['Let It Rock', 'You Give Love A Bad Name'],
  },
  2468: {

    albumTitle: '1999',
    artists: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],

  },
  1245: {

    artists: 'Robert Palmer',   
    tracks: [],

  },
  5439: {

    albumTitle: 'ABBA Gold',  //Labra

  }
}

function updateRecords (records, id, prop, value) {

  if (value === "") {

    delete records[id][prop];
  } else if (prop !== "tracks" && value!="")  {
    
    records[id][prop] = value;
  } else {
    
    if (!records[id].hasOwnProperty("tracks")) {
     
      records[id].tracks = [];
    }
  
    records[id].tracks.push(value); //Labra
  }

  return records;
}


updateRecords(recordCollection,5439,'artist', 'ABBA');
updateRecords(recordCollection,5439,'tracks', 'Take a Chance on Me');
updateRecords(recordCollection,2548,'artist', '');
updateRecords(recordCollection,1245,'tracks', 'Addicted to Love');
updateRecords(recordCollection,2468,'tracks', 'Free');
updateRecords(recordCollection,2548,'tracks', '');
updateRecords(recordCollection,1245,'albumTitle', 'Riptide');
console.log(records);

//Labra