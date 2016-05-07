class RondelCenterVisual 
{
  constructor(rondel) 
  {
    this.rondel = rondel
    
    this.InitializeSvg()
  }
  
  InitializeSvg()
  {
    this.svg = 
    {
      group : draw.group(),
      space : draw.path(),
    }

    this.svg.group
      .back()
      .translate(Map.visual.offset.x, Map.visual.offset.y)
    
    this.svg.space
      .translate(-22, 6)
      .scale(1.05, 1.05)
      .stroke(this.rondel.style.stroke)
      .plot(this.rondel.definition.center)
      .fill(this.rondel.style.centerFill)
      .addTo(this.svg.group);
  }

  toString() 
  {
    return `Visual of ${this.region.toString()}`;
  }
}