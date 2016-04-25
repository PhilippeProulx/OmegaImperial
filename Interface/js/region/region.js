class Region
{
  constructor(id) 
  {
    this.id = id
    this.style = Style.region
    this.definition = Definition.region[id]
    this.nation = Nation[this.definition.nationId.name]
    this.pieceSlots = new Array()
    this.visual = new RegionVisual(this);
    
    Region[id.name] = this
  }
  
  AssignPieceToSlot(piece)
  {
    let i = 0
    for (; i < this.pieceSlots.length && this.pieceSlots[i] != null; i++) {}
    this.pieceSlots[i] = piece
    
    return i;
  }
  
  UnassignPieceFromSlot(piece)
  {
    let pieceSlotId = this.pieceSlots.findIndex(pieceSlot => pieceSlot == piece)
    this.pieceSlots[pieceSlotId] = null
    console.log(this.pieceSlots)
  }
  
  toString() 
  {
    return `region (${this.id})`;
  }
}