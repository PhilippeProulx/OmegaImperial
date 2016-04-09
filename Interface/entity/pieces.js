var Piece = Object.create(null);

Piece = {
  flag: {
    shapes: [
      {light: false, path: 'm 11.770886,-1.8922954 a 11.679888,8.3968925 0 0 1 -11.66405916,8.1699 11.679888,8.3968925 0 0 1 -11.61523084,-7.5918 c 0.0328,0.99289993 0.13866,2.09999995 0.13867,3.1093 2e-5,4.6375 5.2134409,8.6484994 11.66406084,8.6484994 6.45063006,0 11.52341916,-3.4913994 11.52343916,-8.1288994 0,-1.119 -0.063,-3.27820007 -0.0469,-4.207 z'},
      {light: true , path: 'm 11.785686,-2.1200054 A 11.679888,8.3968925 0 0 1 0.10579684,6.2768846 11.679888,8.3968925 0 0 1 -11.574094,-2.1200054 11.679888,8.3968925 0 0 1 0.10579684,-10.516896 11.679888,8.3968925 0 0 1 11.785686,-2.1200054 z'}
    ]
  },     
  army: {
    shapes: [
      {light: true , path: 'm -14.267308,5.965273 6.9420397,4.5521 -0.0421,-1.5082 -6.8834097,-4.5815 z'},
      {light: true , path: 'm -1.2118483,-9.6339265 c -2.05662,-0.037 -4.33239,1.2881 -5.84416,3.5277999 -0.90661,1.3483001 -1.44301,2.8966 -1.5174,4.3799001 l 7.26444,4.6988 c 0.0744,-1.4834 0.61079001,-3.03160003 1.51737999,-4.38 1.86066001,-2.7565 4.87779001,-4.1264001 7.22046001,-3.2785 l -0.008,-0.011 -7.25710001,-4.6877 c -0.43925998,-0.159 -0.90167998,-0.2408 -1.37628999,-0.2493 z'},
      {light: true , path: 'm -14.250808,4.427673 5.6773997,-6.1538995 7.2646,4.6988 -6.05859,6.0365995 z'},
      {light: true , path: 'm 0.16444169,-9.3846265 7.25710001,4.6877 6.9510603,-1.1215001 -7.2644403,-4.6988004 z'},
      {light: false, path: 'm 14.372602,-5.8184266 c 0,0 -6.8055403,1.1770001 -6.9510603,1.1215001 l 0.007,0.011 c -2.34266,-0.8479001 -5.35981,0.522 -7.22046001,3.2786 -0.90658998,1.34829997 -1.44299999,2.8966 -1.51738999,4.3799 l 0,0 -6.05859,6.0365995 0.0421,1.5082 5.31821,-1.0885 2.05617999,-2.4228 0,0 c 0.15065,0.1525 0.30847,0.2802 0.48006,0.4048 2.33997001,1.6619 5.98949001,0.4082 8.15141001,-2.8002 C 9.831872,2.9022735 10.376842,0.8906735 10.169972,-0.88892653 l 4.0757,-0.86689997 z'}
    ]
  },
  factory: {
    shapes: [
      {light: true , path: 'm -14.58715,-6.53794 1.80482,4.58944 -0.77349,11.96347 -1.7017,-5.15663 z'},
      {light: true , path: 'm -14.58715,-6.53794 9.9008,3.09401 1.70171,4.89885 -9.79769,-3.40342 z'},
      {light: true , path: 'm -4.68635,-3.44393 1.03134,-3.40341 1.8564,4.64101 -1.18603,3.66125 z'},
      {light: true , path: 'm -3.65501,-6.84734 9.64298,3.19713 2.1658,4.95043 -9.95238,-3.50655 z'},
      {light: true , path: 'm 5.98797,-3.65021 1.49543,-6.96151 2.16581,5.05354 -1.49544,6.8584 z'},
      {light: true , path: 'm 7.4834,-10.61172 4.84729,-0.15466 2.37205,5.05353 -5.05353,0.15469 z'},
      {light: false, path: 'm -12.78233,-1.9485 9.79769,3.40342 1.18603,-3.66125 9.95238,3.50655 1.49544,-6.8584 5.05353,-0.15469 -1.13446,14.95435 -27.1241,0.77349 z'}
    ]
  },
  fleet: {
    shapes: [
      {light: true , path: 'm -17.91879,10.98831 -2.1875,-4.75 0.1875,-3.3125 2.1875,4.4375 z'},
      {light: true , path: 'm -19.91879,2.92581 5.6875,-1 2.25,4.625 -5.75,0.8125 z'},
      {light: true , path: 'm -14.23129,1.92581 0.6875,-3.6875 2.3125,4.1875 -0.75,4.125 z'},
      {light: true , path: 'm -13.54379,-1.76169 4,-0.9375 2.3125,4.5625 -4,0.5625 z'},
      {light: true , path: 'm -9.54379,-2.69919 0.375,-2.4375 2.5,4.25 -0.5625,2.75 z'},
      {light: true , path: 'm -9.16879,-5.13669 2.7812,-0.9375 2.6563,4.5 -2.9375,0.6875 z'},
      {light: true , path: 'm -6.38759,-6.07419 0.75,-3.34375 2.7188,3.96875 -0.8125,3.875 z'},
      {light: true , path: 'm -1.54325,-6.97924 0.6245,-0.0793 2.81254,4.79687 -2.25004,0.24998 -0.375,-3.68748 z'},
      {light: true , path: 'm -0.91875,-7.05854 0.7656,-3.18752 2.92194,4.23437 -0.875,3.75 z'},
      {light: true , path: 'm 1.98749,-10.79294 2.8438,4.53125 -2.0625,0.25 -2.92194,-4.23437 z'},
      {light: true , path: 'm 4.20439,-7.26052 0.8925,-0.11054 2.7344,4.29687 -2.5625,0.375 -0.4375,-3.5625 z'},
      {light: true , path: 'm 6.19319,-5.64826 2.81,-0.0666 2.5156,4.39067 -3.25,0.4375 -0.4375,-2.18755 z'},
      {light: true , path: 'm 10.33379,-3.3925 6.81,-0.75981 2.75,4.20312 -7.8125,1 -0.5625,-2.375 z'},
      {light: false, path: 'm -17.91879,10.98831 0.1875,-3.625 5.75,-0.8125 0.75,-4.125 4,-0.5625 0.5625,-2.75 2.9375,-0.6875 0.8125,-3.875 2.18754,-0.25 0.375,3.6875 2.25004,-0.25 0.875,-3.75 2.0625,-0.25 0.4375,3.5625 2.5625,-0.375 0.4375,2.1875 3.25,-0.4375 0.5625,2.375 7.8125,-1 0,0.875 -1.25,1.5 0.625,2 -0.5625,1.0625 z'}
    ]
  },
  marker: {
    shapes: [
      {light: true , path: 'm -8.00393,-9.33554 5.15625,-2.8438 7.46875,0.125 4.4375,2.5938 -0.125,4.2187 -5.1875,3.3125 -7.90625,-0.125 -4.59375,-3.1562 z'},
      {light: false, path: 'm -8.75393,-5.21054 1.09375,14.5 3.96875,2.8437 -0.46875,-14.1875 z'},
      {light: false, path: 'm -4.16018,-2.05434 7.90625,0.125 0,14.1564 -7.4375,-0.094 z'},
      {light: false, path: 'm 3.74607,-1.92934 5.1875,-3.3125 -0.0625,14.3438 -5.125,3.1251 z'}
    ]
  }
}

Piece.style = {
  stroke: {linejoin:'round', linecap:'round', width: 0.5}
}

Piece.Get = function(piece, nation) 
{
  var group = draw.group()
  
  for (shape of piece.shapes) 
  {
    var newPath = draw.path()
    .plot(shape.path)
    .fill(shape.light ? nation.pieceColor.light : nation.pieceColor.shadow)
    .addTo(group)
  }
  
  var nationId = nation.name.replace(' ', '').replace('-', '');
  nationId = nationId.substring(0, 1).toLowerCase() + nationId.substring(1)
  
  group
    .stroke(Piece.style.stroke)
    .stroke(nation.pieceColor.dark)
    .data('nation', nationId)
    .on('mouseover', OnPieceMouseOver)
    .on('mouseout', OnPieceMouseOut)
    
    return group;
}

function OnPieceMouseOver()
{
  this
    .front()
    .animate({ease: '<>', duration: 100})
    .stroke({color: '#fff', width: 1});
    
    console.log()
}

function OnPieceMouseOut()
{
  this
    .animate({ease: '<>', duration: 200})
    .stroke({color: Nation[this.data('nation')].pieceColor.dark, width: 0.5})
}