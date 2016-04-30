function RunTests()
{
  TestMainController()
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