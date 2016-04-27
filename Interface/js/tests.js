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