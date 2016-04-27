class Piece
{
  constructor(type, nation) 
  {
    this.type = type
    this.nation = nation
    this.style = Style.piece
    this.definition = Definition.piece[type]
    this.slot = null
    this.visual = new PieceVisual(this);
    
    Piece.all.push(this)
  }
  
  Move(region)
  {
    if (this.slot != null && typeof this.slot != 'undefined')
    {
      this.slot.UnassignPieceFromSlot(this)
    }
    
    this.slot = region
    
    let newPosition = region.AssignPieceToSlot(this)
    this.visual.Move(newPosition)
  }
  
  toString() 
  {
    return `Piece (${this.type.name}, ${this.visual.x}, ${this.visual.y})`;
  }
}

Piece.all = new Array()