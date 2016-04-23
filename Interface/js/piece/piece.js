class Piece
{
  constructor(type, nation, x, y) 
  {
    this.type = type
    this.nation = nation
    
    this.visual = new PieceVisual(this, x, y);
    Piece.All.push(this)
  }
  
  ToString() 
  {
    return `Piece (${this.type.name}, ${this.visual.x}, ${this.visual.y})`;
  }
}

Piece.Flag    = new EnumItem('Flag')
Piece.Army    = new EnumItem('Army')
Piece.Factory = new EnumItem('Factory')
Piece.Fleet   = new EnumItem('Fleet')
Piece.Marker  = new EnumItem('Marker')

Piece.All = new Array()
