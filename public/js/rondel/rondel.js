class Rondel extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.rondel
    this.definition = Definition.rondel
    this.spaces = new Array()
    
    this.center = new RondelCenterVisual(this)
    
    for (let i = 0; i < 8; i++) 
    {
      this.spaces.push(new RondelSpace(i, this))
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
  
  SetSpace(nation, space)
  {
    this.markers[nation.id.ordinal].Move(this.spaces[space])
  }
  
  //TODO: Determine convention for private/public method and variables? _PrivateMethod, _privateVariable?
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.spaceGetSlotPosition(id);
  }
  
  toString() 
  {
    return 'Rondel';
  }
}