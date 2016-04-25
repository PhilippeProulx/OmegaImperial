var draw = SVG('board').size(1366, 768);

let board = new Board()

// board.AddPiece(PieceType.Flag, Nation.GreatBritain)
// board.AddPiece(PieceType.Flag, Nation.Italy)
// board.AddPiece(PieceType.Flag, Nation.France)
// board.AddPiece(PieceType.Flag, Nation.Russia)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain)

// board.pieces[0].Move(Region.Berlin)
// board.pieces[1].Move(Region.Berlin)
// board.pieces[2].Move(Region.Berlin)
// board.pieces[1].Move(Region.Hamburg)
// board.pieces[3].Move(Region.Berlin)
// board.pieces[1].Move(Region.Berlin)
// board.pieces[2].Move(Region.Hamburg)
// board.pieces[2].Move(Region.Hamburg)

board.regions.forEach(region => 
{
  for (i = 0; i < 8; i++) 
  { 
    board.AddPiece(PieceType.Flag, Nation.France).Move(region)
  }
})

// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)
// board.AddPiece(PieceType.Flag, Nation.GreatBritain, Region.Hamburg)

// board.AddPiece(PieceType.Flag, Nation.GreatBritain  , new Point(320, 225))
// board.AddPiece(PieceType.Flag, Nation.GreatBritain  , new Point(320, 225))
// board.AddPiece(PieceType.Flag, Nation.AustriaHungary, new Point(330, 245))
// board.AddPiece(PieceType.Flag, Nation.Italy         , new Point(340, 265))

// board.AddPiece(PieceType.Flag   , Nation.GreatBritain  , new Point(500, 400))
// board.AddPiece(PieceType.Army   , Nation.AustriaHungary, new Point(500, 400))
// board.AddPiece(PieceType.Factory, Nation.Italy         , new Point(500, 400))
// board.AddPiece(PieceType.Fleet  , Nation.France        , new Point(500, 400))
// board.AddPiece(PieceType.Marker , Nation.GermanEmpire  , new Point(500, 400))

// board.AddPiece(PieceType.Flag, Nation.GreatBritain  , new Point(320, 225))
// board.AddPiece(PieceType.Flag, Nation.AustriaHungary, new Point(330, 245))
// board.AddPiece(PieceType.Flag, Nation.Italy         , new Point(340, 265))
// board.AddPiece(PieceType.Flag, Nation.France        , new Point(350, 285))
// board.AddPiece(PieceType.Flag, Nation.GermanEmpire  , new Point(360, 305))
// board.AddPiece(PieceType.Flag, Nation.Russia        , new Point(370, 325))

// board.AddPiece(PieceType.Army, Nation.GreatBritain  , new Point(370, 225))
// board.AddPiece(PieceType.Army, Nation.AustriaHungary, new Point(380, 245))
// board.AddPiece(PieceType.Army, Nation.Italy         , new Point(390, 265))
// board.AddPiece(PieceType.Army, Nation.France        , new Point(400, 285))
// board.AddPiece(PieceType.Army, Nation.GermanEmpire  , new Point(410, 305))
// board.AddPiece(PieceType.Army, Nation.Russia        , new Point(420, 325))

// board.AddPiece(PieceType.Factory, Nation.GreatBritain  , new Point(220, 225))
// board.AddPiece(PieceType.Factory, Nation.AustriaHungary, new Point(230, 245))
// board.AddPiece(PieceType.Factory, Nation.Italy         , new Point(240, 265))
// board.AddPiece(PieceType.Factory, Nation.France        , new Point(250, 285))
// board.AddPiece(PieceType.Factory, Nation.GermanEmpire  , new Point(260, 305))
// board.AddPiece(PieceType.Factory, Nation.Russia        , new Point(270, 325))

// board.AddPiece(PieceType.Fleet, Nation.GreatBritain  , new Point(270, 225))
// board.AddPiece(PieceType.Fleet, Nation.AustriaHungary, new Point(280, 245))
// board.AddPiece(PieceType.Fleet, Nation.Italy         , new Point(290, 265))
// board.AddPiece(PieceType.Fleet, Nation.France        , new Point(300, 285))
// board.AddPiece(PieceType.Fleet, Nation.GermanEmpire  , new Point(310, 305))
// board.AddPiece(PieceType.Fleet, Nation.Russia        , new Point(320, 325))

// board.AddPiece(PieceType.Marker, Nation.GreatBritain  , new Point(170, 225))
// board.AddPiece(PieceType.Marker, Nation.AustriaHungary, new Point(180, 245))
// board.AddPiece(PieceType.Marker, Nation.Italy         , new Point(190, 265))
// board.AddPiece(PieceType.Marker, Nation.France        , new Point(200, 285))
// board.AddPiece(PieceType.Marker, Nation.GermanEmpire  , new Point(210, 305))
// board.AddPiece(PieceType.Marker, Nation.Russia        , new Point(220, 325))

// board.AddPiece(PieceType.Flag, Nation.France, new Point(160, 325))