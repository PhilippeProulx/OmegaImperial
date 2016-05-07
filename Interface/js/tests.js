function RunTests()
{
  TestMainController()
  //TestRegionSlots()
  //TestRondelFull()
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
  
  controller.SetTaxLevel(Nation.France, 16)
  controller.SetTaxLevel(Nation.Italy, 10)
  controller.SetTaxLevel(Nation.GermanEmpire, 8)
  controller.SetTaxLevel(Nation.GreatBritain, 4)
  controller.SetTaxLevel(Nation.AustriaHungary, 5)
  controller.SetTaxLevel(Nation.Russia, 6)
  
  controller.SetRondelSpace(Nation.France, 0)
  controller.SetRondelSpace(Nation.Italy, 2)
  controller.SetRondelSpace(Nation.Russia, 3)
}

function TestRondelFull()
{
  let space = 0
  for(var i = 0; i < 2; i++)
  {
    controller.SetRondelSpace(Nation.France, space)
    controller.SetRondelSpace(Nation.Italy, space)
    controller.SetRondelSpace(Nation.GermanEmpire, space)
    controller.SetRondelSpace(Nation.GreatBritain, space)
    controller.SetRondelSpace(Nation.AustriaHungary, space)
    controller.SetRondelSpace(Nation.Russia, space)
  }
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