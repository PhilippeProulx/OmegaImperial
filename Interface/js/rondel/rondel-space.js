class RondelSpace extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.rondel
    this.definition = Definition.rondel
    this.id = id
    this.visual = new RondelSpaceVisual(this);
  }
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.visual.GetSlotPosition(id)
  }
  
  toString() 
  {
    return 'RondelSpace';
  }
}