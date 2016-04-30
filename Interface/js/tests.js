
function RunTests()
{
  TestMainController()
  //TestBoardMove()
  //TestScoringTrack()
  //TestRegionSlots()
}

function TestMainController()
{
  controller.CreateGame()

  controller.PlaceFactory(Region.Berlin)
  controller.PlaceFactory(Region.Paris)
  controller.PlaceFactory(Region.Hamburg)
  controller.DestroyFactory(Region.Hamburg)

  let newUnitId = controller.ProduceUnit(PieceType.Army, Region.Paris)
  let newUnitId2 = controller.ProduceUnit(PieceType.Army, Region.Dijon)
  controller.ProduceUnit(PieceType.Fleet, Region.Berlin)
  controller.ProduceUnit(PieceType.Army, Region.Hamburg)

  controller.MoveUnit(newUnitId, Region.Bordeaux)
  controller.MoveUnit(newUnitId2, Region.Munich)

  controller.SetPoints(Nation.France, 0)
  controller.SetPoints(Nation.Italy, 2)
  controller.SetPoints(Nation.GermanEmpire, 4)
}

function TestBoardMove()
{
  new Piece(PieceType.Flag, Nation.GreatBritain)
  new Piece(PieceType.Marker, Nation.Italy)
  new Piece(PieceType.Flag, Nation.France)
  new Piece(PieceType.Flag, Nation.Russia)
  new Piece(PieceType.Flag, Nation.GreatBritain)
  new Piece(PieceType.Flag, Nation.GreatBritain)
  new Piece(PieceType.Flag, Nation.GreatBritain)
  new Piece(PieceType.Flag, Nation.GreatBritain)

  Piece.all[0].Move(Region.Berlin)
  Piece.all[1].Move(Region.Berlin)
  Piece.all[2].Move(Region.Cologne)
  Piece.all[3].Move(Region.Hamburg)
  Piece.all[4].Move(Region.Holland)
  Piece.all[5].Move(Region.Bordeaux)
  Piece.all[6].Move(Region.Paris)
  Piece.all[7].Move(Region.Hamburg)
}

function TestScoringTrack()
{
  // new Piece(PieceType.Marker, Nation.GreatBritain).Move(game.scoringTrack.spaces[0])
  // new Piece(PieceType.Marker, Nation.AustriaHungary).Move(game.scoringTrack.spaces[0])
  // new Piece(PieceType.Marker, Nation.Italy).Move(game.scoringTrack.spaces[0])
  // new Piece(PieceType.Marker, Nation.France).Move(game.scoringTrack.spaces[0])
  
  // new Piece(PieceType.Marker, Nation.GreatBritain).Move(game.scoringTrack.spaces[1])
  // new Piece(PieceType.Marker, Nation.AustriaHungary).Move(game.scoringTrack.spaces[1])
  // new Piece(PieceType.Marker, Nation.Italy).Move(game.scoringTrack.spaces[1])
  // new Piece(PieceType.Marker, Nation.France).Move(game.scoringTrack.spaces[1])
}

function TestRegionSlots()
{
  board.regions.forEach(region => 
  {
    for (i = 0; i < 8; i++) 
    { 
      board.AddPiece(PieceType.Flag, Nation.France).Move(region)
    }
  })
}