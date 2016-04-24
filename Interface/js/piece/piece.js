class Piece
{
  constructor(type, nation, x, y) 
  {
    this.type = type
    this.nation = nation
    this.style = Style.piece
    this.definition = Definition.piece[type]
    
    this.visual = new PieceVisual(this, x, y);
    
    Piece.all.push(this)
  }
  
  toString() 
  {
    return `Piece (${this.type.name}, ${this.visual.x}, ${this.visual.y})`;
  }
}

Piece.all = new Array()