class Piece
{
  constructor(type, nation) 
  {
    this.type = type
    this.nation = nation
    this.style = Style.piece
    this.definition = Definition.piece[type]
    this.position = null
    this.visual = new PieceVisual(this);
  }
  
  Move(region)
  {
    if (this.position != null && typeof this.position != 'undefined')
    {
      this.position.UnassignPieceFromSlot(this)
    }
    
    var slotId = region.AssignPieceToSlot(this)
    this.position = region
    
    this.visual.Move(region.definition.pieceSlots[slotId])
  }
  
  toString() 
  {
    return `Piece (${this.type.name}, ${this.visual.x}, ${this.visual.y})`;
  }
}