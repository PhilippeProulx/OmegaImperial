class ScoringTrackSpace extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.scoringTrack
    this.definition = Definition.scoringTrack
    this.id = id
    this.visual = new ScoringTrackSpaceVisual(this);
  }
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.visual.GetSlotPosition(id)
  }
  
  toString() 
  {
    return 'ScoringTrackSpace';
  }
}