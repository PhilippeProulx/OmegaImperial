class RegionVisual 
{
  constructor(region) 
  {
    this.region = region
    
    this.InitializeSvg()
  }
  
  InitializeSvg()
  {
    this.svg = 
    {
      group  : draw.group(),
      region : draw.path(),
      name   : draw.text('')
    }
    
    if (typeof RegionVisual.allGroup == 'undefined')
    {
      RegionVisual.allGroup = draw.group()
    }
  
    this.svg.group
      .addTo(RegionVisual.allGroup)

    this.svg.region
      .plot(this.region.definition.shape)
      .stroke(this.region.style.stroke)
      .fill(this.region.nation.style.regionColor)
      .on('mouseover', () => this.OnMouseEnter())
      .on('mouseout', () => this.OnMouseExit())
      .on('click', () => this.OnClick())
      .addTo(this.svg.group)
      
    this.svg.name
      .text(this.region.definition.name)
      .translate(this.region.definition.namePosition.x, 
                 this.region.definition.namePosition.y)
      .addClass('no-events')
      .fill(this.region.style.name.color)
      .font(this.region.style.name.font)
      .addTo(this.svg.group)
  }
  
  OnMouseEnter()
  {
    this.svg.group
      .front()
      
    this.svg.region
      .animate(this.region.style.highlight.animationIn)
      .fill(this.region.style.highlight.regionFill)
      .stroke(this.region.style.highlight.regionStroke);
  
    this.svg.name
      .front()
      .animate(this.region.style.highlight.animationIn)
      .fill(this.region.style.highlight.nameFill)
  }

  OnMouseExit()
  {
    this.svg.region
      .animate(this.region.style.highlight.animationOut)
      .fill(this.region.style.fill)
      .stroke(this.region.style.stroke)
    
    this.svg.name
        .front()
        .animate(this.region.style.highlight.animationOut)
        .fill(this.region.style.name.color)
  }
  
  OnClick()
  {
    console.log("OnClick " + this.toString())
  }
  
  toString() 
  {
    return `Visual of ${this.region.toString()}`;
  }
}