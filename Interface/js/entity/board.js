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
  new Piece(PieceType.Flag, Nation.greatBritain  , 320, 225)
  new Piece(PieceType.Flag, Nation.austriaHungary, 330, 245)
  new Piece(PieceType.Flag, Nation.italy         , 340, 265)

  new Piece(PieceType.Flag   , Nation.greatBritain  , 500, 400)
  new Piece(PieceType.Army   , Nation.austriaHungary, 500, 400)
  new Piece(PieceType.Factory, Nation.italy         , 500, 400)
  new Piece(PieceType.Fleet  , Nation.france        , 500, 400)
  new Piece(PieceType.Marker , Nation.germanEmpire  , 500, 400)
  
  new Piece(PieceType.Flag, Nation.greatBritain  , 320, 225)
  new Piece(PieceType.Flag, Nation.austriaHungary, 330, 245)
  new Piece(PieceType.Flag, Nation.italy         , 340, 265)
  new Piece(PieceType.Flag, Nation.france        , 350, 285)
  new Piece(PieceType.Flag, Nation.germanEmpire  , 360, 305)
  new Piece(PieceType.Flag, Nation.russia        , 370, 325)
  
  new Piece(PieceType.Army, Nation.greatBritain  , 370, 225)
  new Piece(PieceType.Army, Nation.austriaHungary, 380, 245)
  new Piece(PieceType.Army, Nation.italy         , 390, 265)
  new Piece(PieceType.Army, Nation.france        , 400, 285)
  new Piece(PieceType.Army, Nation.germanEmpire  , 410, 305)
  new Piece(PieceType.Army, Nation.russia        , 420, 325)
  
  new Piece(PieceType.Factory, Nation.greatBritain  , 220, 225)
  new Piece(PieceType.Factory, Nation.austriaHungary, 230, 245)
  new Piece(PieceType.Factory, Nation.italy         , 240, 265)
  new Piece(PieceType.Factory, Nation.france        , 250, 285)
  new Piece(PieceType.Factory, Nation.germanEmpire  , 260, 305)
  new Piece(PieceType.Factory, Nation.russia        , 270, 325)
  
  new Piece(PieceType.Fleet, Nation.greatBritain  , 270, 225)
  new Piece(PieceType.Fleet, Nation.austriaHungary, 280, 245)
  new Piece(PieceType.Fleet, Nation.italy         , 290, 265)
  new Piece(PieceType.Fleet, Nation.france        , 300, 285)
  new Piece(PieceType.Fleet, Nation.germanEmpire  , 310, 305)
  new Piece(PieceType.Fleet, Nation.russia        , 320, 325)
  
  new Piece(PieceType.Marker, Nation.greatBritain  , 170, 225)
  new Piece(PieceType.Marker, Nation.austriaHungary, 180, 245)
  new Piece(PieceType.Marker, Nation.italy         , 190, 265)
  new Piece(PieceType.Marker, Nation.france        , 200, 285)
  new Piece(PieceType.Marker, Nation.germanEmpire  , 210, 305)
  new Piece(PieceType.Marker, Nation.russia        , 220, 325)
  
  new Piece(PieceType.Flag, Nation.france, 160, 325)
}
