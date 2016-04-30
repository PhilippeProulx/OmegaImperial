class ScoringTrack extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.scoringTrack
    this.definition = Definition.scoringTrack
    this.spaces = new Array()
    this.powerFactorVisuals = new Array()
    
    for (let i = 0; i < this.definition.spaceCount; i++) 
    {
      this.spaces.push(new ScoringTrackSpace(i, this))
    }
    
    this.powerFactorVisuals.push(new PowerFactorVisual(1, 4, 0, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(5, 9, 1, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(10, 14, 2, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(15, 19, 3, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(20, 24, 4, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(25, 25, 5, this))
    
    //TODO: clean this with sub init methods
    
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
  
  SetPoints(nation, points)
  {
    this.markers[nation.id.ordinal].Move(this.spaces[points])
  }
  
  //TODO: Determine convention for private/public method and variables? _PrivateMethod, _privateVariable?
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.spaceGetSlotPosition(id);
  }
  
  toString() 
  {
    return 'ScoringTrack';
  }
}