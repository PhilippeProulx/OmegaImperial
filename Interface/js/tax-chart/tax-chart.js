class TaxChart extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.taxChart
    this.definition = Definition.taxChart
    this.spaces = new Array()
    
    for (let i = 0; i < this.definition.spaceCount; i++) 
    {
      this.spaces.push(new TaxChartSpace(i, this))
    }
    
    this.markers = new Array()
    //TODO: limit to number of player in the game
    for (const nationId of NationId.enumValues) 
    {
      let nation = Nation[nationId.name]
      if (nation.id.ordinal < 6)
      {
        let marker = new Piece(PieceType.Marker, nation)
        this.markers.push(marker)
        marker.visual.Move(new Point(-500, 500))
        //this.SetPoints(nation, 0)
      }
    }
  }
  
  SetTaxLevel(nation, level)
  {
    this.markers[nation.id.ordinal].Move(this.spaces[this.LevelToSpaceId(level)])
  }
  
  //TODO: this should not be here, should be in visual
  LevelToSpaceId(level)
  {
    level = Math.min(level, 15);
    let spaceId = this.definition.spaceCount - level + 4;
    return level > 5 ? spaceId : this.definition.spaceCount - 1
  }
  
  //TODO: Determine convention for private/public method and variables? _PrivateMethod, _privateVariable?
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.spaceGetSlotPosition(id);
  }
  
  toString() 
  {
    return 'TaxChart';
  }
}