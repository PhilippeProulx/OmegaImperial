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
  new Piece(Piece.Flag, Nation.greatBritain  , 320, 225)
  new Piece(Piece.Flag, Nation.austriaHungary, 330, 245)
  new Piece(Piece.Flag, Nation.italy         , 340, 265)

  new Piece(Piece.Flag   , Nation.greatBritain  , 500, 400)
  new Piece(Piece.Army   , Nation.austriaHungary, 500, 400)
  new Piece(Piece.Factory, Nation.italy         , 500, 400)
  new Piece(Piece.Fleet  , Nation.france        , 500, 400)
  new Piece(Piece.Marker , Nation.germanEmpire  , 500, 400)
  
  new Piece(Piece.Flag, Nation.greatBritain  , 320, 225)
  new Piece(Piece.Flag, Nation.austriaHungary, 330, 245)
  new Piece(Piece.Flag, Nation.italy         , 340, 265)
  new Piece(Piece.Flag, Nation.france        , 350, 285)
  new Piece(Piece.Flag, Nation.germanEmpire  , 360, 305)
  new Piece(Piece.Flag, Nation.russia        , 370, 325)
  
  new Piece(Piece.Army, Nation.greatBritain  , 370, 225)
  new Piece(Piece.Army, Nation.austriaHungary, 380, 245)
  new Piece(Piece.Army, Nation.italy         , 390, 265)
  new Piece(Piece.Army, Nation.france        , 400, 285)
  new Piece(Piece.Army, Nation.germanEmpire  , 410, 305)
  new Piece(Piece.Army, Nation.russia        , 420, 325)
  
  new Piece(Piece.Factory, Nation.greatBritain  , 220, 225)
  new Piece(Piece.Factory, Nation.austriaHungary, 230, 245)
  new Piece(Piece.Factory, Nation.italy         , 240, 265)
  new Piece(Piece.Factory, Nation.france        , 250, 285)
  new Piece(Piece.Factory, Nation.germanEmpire  , 260, 305)
  new Piece(Piece.Factory, Nation.russia        , 270, 325)
  
  new Piece(Piece.Fleet, Nation.greatBritain  , 270, 225)
  new Piece(Piece.Fleet, Nation.austriaHungary, 280, 245)
  new Piece(Piece.Fleet, Nation.italy         , 290, 265)
  new Piece(Piece.Fleet, Nation.france        , 300, 285)
  new Piece(Piece.Fleet, Nation.germanEmpire  , 310, 305)
  new Piece(Piece.Fleet, Nation.russia        , 320, 325)
  
  new Piece(Piece.Marker, Nation.greatBritain  , 170, 225)
  new Piece(Piece.Marker, Nation.austriaHungary, 180, 245)
  new Piece(Piece.Marker, Nation.italy         , 190, 265)
  new Piece(Piece.Marker, Nation.france        , 200, 285)
  new Piece(Piece.Marker, Nation.germanEmpire  , 210, 305)
  new Piece(Piece.Marker, Nation.russia        , 220, 325)
  
  new Piece(Piece.Flag, Nation.france, 160, 325)
}
