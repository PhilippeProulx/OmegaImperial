var Board = Object.create(null);

Board.Initialize = function()
{
  InitializeRegions()
  InitializePieces()
}

function InitializeRegions()
{
  for (var region in Region) 
  {
    if(typeof Region[region] === 'object')
    {
      Region.Create(Region[region])
    }
  }
}

function InitializePieces()
{
  Piece.Get(Piece.flag   , Nation.greatBritain  ).translate(500, 400)
  Piece.Get(Piece.army   , Nation.austriaHungary).translate(500, 400)
  Piece.Get(Piece.factory, Nation.italy         ).translate(500, 400)
  Piece.Get(Piece.fleet  , Nation.france        ).translate(500, 400)
  Piece.Get(Piece.marker , Nation.germanEmpire  ).translate(500, 400)

  Piece.Get(Piece.flag, Nation.greatBritain  ).translate(320, 225)
  Piece.Get(Piece.flag, Nation.austriaHungary).translate(330, 245)
  Piece.Get(Piece.flag, Nation.italy         ).translate(340, 265)
  Piece.Get(Piece.flag, Nation.france        ).translate(350, 285)
  Piece.Get(Piece.flag, Nation.germanEmpire  ).translate(360, 305)
  Piece.Get(Piece.flag, Nation.russia        ).translate(370, 325)

  Piece.Get(Piece.army, Nation.greatBritain  ).translate(370, 225)
  Piece.Get(Piece.army, Nation.austriaHungary).translate(380, 245)
  Piece.Get(Piece.army, Nation.italy         ).translate(390, 265)
  Piece.Get(Piece.army, Nation.france        ).translate(400, 285)
  Piece.Get(Piece.army, Nation.germanEmpire  ).translate(410, 305)
  Piece.Get(Piece.army, Nation.russia        ).translate(420, 325)
  
  Piece.Get(Piece.factory, Nation.greatBritain  ).translate(220, 225)
  Piece.Get(Piece.factory, Nation.austriaHungary).translate(230, 245)
  Piece.Get(Piece.factory, Nation.italy         ).translate(240, 265)
  Piece.Get(Piece.factory, Nation.france        ).translate(250, 285)
  Piece.Get(Piece.factory, Nation.germanEmpire  ).translate(260, 305)
  Piece.Get(Piece.factory, Nation.russia        ).translate(270, 325)

  Piece.Get(Piece.fleet, Nation.greatBritain  ).translate(270, 225)
  Piece.Get(Piece.fleet, Nation.austriaHungary).translate(280, 245)
  Piece.Get(Piece.fleet, Nation.italy         ).translate(290, 265)
  Piece.Get(Piece.fleet, Nation.france        ).translate(300, 285)
  Piece.Get(Piece.fleet, Nation.germanEmpire  ).translate(310, 305)
  Piece.Get(Piece.fleet, Nation.russia        ).translate(320, 325)

  Piece.Get(Piece.marker, Nation.greatBritain  ).translate(170, 225)
  Piece.Get(Piece.marker, Nation.austriaHungary).translate(180, 245)
  Piece.Get(Piece.marker, Nation.italy         ).translate(190, 265)
  Piece.Get(Piece.marker, Nation.france        ).translate(200, 285)
  Piece.Get(Piece.marker, Nation.germanEmpire  ).translate(210, 305)
  Piece.Get(Piece.marker, Nation.russia        ).translate(220, 325)

  Piece.Get(Piece.flag, Nation.france).translate(160, 325)
}
