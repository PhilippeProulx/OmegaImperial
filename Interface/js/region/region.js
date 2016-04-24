class Region
{
  constructor(id) 
  {
    this.id = id
    this.style = Style.region
    this.definition = Definition.region[id]
    this.nation = Nation[this.definition.nationId.name]
    
    this.visual = new RegionVisual(this);
    
    Region[id.name] = this
  }
  
  toString() 
  {
    return `region (${this.id})`;
  }
}