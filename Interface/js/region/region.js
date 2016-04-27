class Region extends Container
{
  constructor(id) 
  {
    super()
    this.id = id
    this.style = Style.region
    this.definition = Definition.region[id]
    this.nation = Nation[this.definition.nationId.name]
    this.visual = new RegionVisual(this);
    
    Region[id.name] = this
    Region.all.push(this)
  }
  
  //override from PieceSlot
  GetSlotPosition(id)
  {
    return this.definition.pieceSlots[id];
  }
  
  toString() 
  {
    return `region (${this.id})`;
  }
}

Region.all = new Array()