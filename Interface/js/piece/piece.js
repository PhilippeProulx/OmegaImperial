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
    this.id = Piece.all.length
    
    Piece.all.push(this)
  }
  
  Move(region)
  {
    this._UnassignSlot()
    
    this.slot = region
    
    let newPosition = region.AssignPieceToSlot(this)
    this.visual.Move(newPosition)
    
    return this
  }
  
  Destroy()
  {
    this._UnassignSlot()
    
    this.visual.Destroy()
    delete this
  }
  
  _UnassignSlot()
  {
    if (this.slot != null && typeof this.slot != 'undefined')
    {
      this.slot.UnassignPieceFromSlot(this)
    }
  }
  
  toString() 
  {
    return `Piece (${this.type.name}, ${this.visual.x}, ${this.visual.y})`;
  }
}

Piece.all = new Array()