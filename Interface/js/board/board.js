

class Board
{
  constructor() 
  {
    this.nations = new Array()
    this.regions = new Array()
    this.pieces = new Array()
    
    this.InitializeNations()
    this.InitializeRegions()
    //this.InitializePieces()
  }  

  InitializeNations()
  {
    for (const nation of NationId.enumValues) 
    {
      this.regions.push(new Nation(nation))
    }
  }

  InitializeRegions()
  {
    for (const region of RegionId.enumValues) 
    {
      this.nations.push(new Region(region))
    }
  }
  
  AddPiece(pieceType, nation, x, y)
  {
    this.pieces.push(new Piece(pieceType, nation, x + 500, y + 150))
  }

  toString() 
  {
    return `board`;
  }
}


