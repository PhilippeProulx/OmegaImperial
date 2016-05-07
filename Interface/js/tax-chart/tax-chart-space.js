class TaxChartSpace extends Container
{
  constructor(id) 
  {
    super()
    this.style = Style.taxChart
    this.definition = Definition.taxChart
    this.id = id
    this.visual = new TaxChartSpaceVisual(this);
  }
  
  //override from Container
  GetSlotPosition(id)
  {
    return this.visual.GetSlotPosition(id)
  }
  
  toString() 
  {
    return 'TaxChartSpace';
  }
}