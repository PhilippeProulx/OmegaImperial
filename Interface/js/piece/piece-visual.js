class PieceVisual 
{
  constructor(piece, x, y) 
  {
    this.piece = piece
    this.x = x
    this.y = y
    
    this.InitializeSvg()
  }
  
  InitializeSvg()
  {
    if (typeof PieceVisual.allGroup == 'undefined')
    {
      PieceVisual.allGroup = draw.group()
    }
  
    this.svgGroup = draw.group()
      .addTo(PieceVisual.allGroup)
      
    for (let shape of this.piece.definition.shapes) 
    {
      var newpath = draw.path()
      .plot(shape.path)
      .fill(shape.light ? 
        this.piece.nation.style.pieceColor.light : 
        this.piece.nation.style.pieceColor.shadow)
      .addTo(this.svgGroup);
    }
    
    this.svgGroup
      .stroke(this.piece.style.stroke)
      .stroke(this.piece.nation.style.pieceColor.dark)
      .on('mouseover', () => this.OnMouseEnter())
      .on('mouseout', () => this.OnMouseExit())
      .on('click', () => this.OnClick())
      .translate(this.x, this.y);
  }
  
  OnMouseEnter()
  {
    this.svgGroup
      .front()
      .animate({ease    : this.piece.style.highlight.animation.ease, 
                duration: this.piece.style.highlight.animation.duration})
      .stroke({color: this.piece.style.highlight.stroke.color, 
               width: this.piece.style.highlight.stroke.width});
  }

  OnMouseExit()
  {
    this.svgGroup
      .animate({ease    : this.piece.style.highlight.animation.ease, 
                duration: this.piece.style.highlight.animation.duration})
      .stroke({color: this.piece.nation.style.pieceColor.dark, 
               width: this.piece.style.stroke.width});
  }
  
  OnClick()
  {
    console.log("OnClick " + this.toString())
  }
  
  toString() 
  {
    return `Visual of ${this.piece.toString()}`;
  }
}