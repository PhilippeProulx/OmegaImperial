

class Board
{
  constructor() 
  {
    this.nations = new Array()
    this.regions = new Array()
    this.pieces = new Array()
    
    this.InitializeNations()
    this.InitializeRegions()
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
  
  AddPiece(pieceType, nation)
  {
    let newPiece = new Piece(pieceType, nation)
    this.pieces.push(newPiece)
    
    return newPiece
  }

  toString() 
  {
    return `board`;
  }
}


