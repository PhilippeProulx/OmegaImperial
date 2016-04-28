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
      this.spaces.push(new ScoringTrackVisual(i, this))
    }
    
    this.powerFactorVisuals.push(new PowerFactorVisual(1, 4, 0, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(5, 9, 1, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(10, 14, 2, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(15, 19, 3, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(20, 24, 4, this))
    this.powerFactorVisuals.push(new PowerFactorVisual(25, 25, 5, this))
  }
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.definition.pieceSlots[id];
  }
  
  toString() 
  {
    return 'ScoringTrack';
  }
}