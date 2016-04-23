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
    this.svgGroup = draw.group()
    
    for (let shape of Definition.piece[this.piece.type].shapes) 
    {
      var newpath = draw.path()
      .plot(shape.path)
      .fill(shape.light ? this.piece.nation.pieceColor.light : this.piece.nation.pieceColor.shadow)
      .addTo(this.svgGroup);
    }
    
    this.svgGroup
      .stroke(Style.piece.stroke)
      .stroke(this.piece.nation.pieceColor.dark)
      .on('mouseover', () => this.OnMouseEnter())
      .on('mouseout', () => this.OnMouseExit())
      .on('click', () => this.OnClick())
      .translate(this.x, this.y);
  }
  
  OnMouseEnter()
  {
    this.svgGroup
      .front()
      .animate({ease: Style.piece.highlight.animation.ease, 
                duration: Style.piece.highlight.animation.duration})
      .stroke({color: Style.piece.highlight.stroke.color, 
               width: Style.piece.highlight.stroke.width});
  }

  OnMouseExit()
  {
    this.svgGroup
      .animate({ease: Style.piece.highlight.animation.ease, 
                duration: Style.piece.highlight.animation.duration})
      .stroke({color: this.piece.nation.pieceColor.dark, 
               width: Style.piece.highlight.stroke.width});
  }
  
  OnClick()
  {
    console.log("OnClick " + this.ToString())
  }
  
  ToString() 
  {
    return `PieceVisual (${this.piece.type.name}, ${this.x}, ${this.y})`;
  }
}