class ScoringTrackSpaceVisual 
{
  //rename scoringTrack to scoringTrackSpace
  constructor(scoringTrack) 
  {
    this.scoringTrack = scoringTrack
    let id = scoringTrack.id
    
    let smallWidth = (scoringTrack.definition.right - scoringTrack.definition.left) / (scoringTrack.definition.spaceCount - 2 + 2 * scoringTrack.definition.smallBigSpaceRatio)
    let bigWidth = smallWidth * scoringTrack.definition.smallBigSpaceRatio

    this.rectangle = new Rectangle()
    
    this.rectangle.x = scoringTrack.definition.left + id.clamp(0, 1) * bigWidth + (id - 1).clamp(0, scoringTrack.definition.spaceCount) * smallWidth
    
    this.rectangle.y = id == 0 ? scoringTrack.definition.top : scoringTrack.definition.top + scoringTrack.definition.powerFactorHeight
    this.rectangle.width = id == 0 || id == scoringTrack.definition.spaceCount - 1 ? bigWidth : smallWidth
    this.rectangle.height = id == 0 ? scoringTrack.definition.bottom - scoringTrack.definition.top : scoringTrack.definition.bottom - scoringTrack.definition.top - scoringTrack.definition.powerFactorHeight
    
    this.InitializeSvg(id, this.rectangle)
  }
  
  GetSlotPosition(id)
  {
    let x = 0
    let y = 0
    
    switch(id) 
    {
      case 1: x = 0; y = 2; break;
      case 2: x = 2; y = 0; break;
      case 3: x = 2; y = 2; break;
      case 4: x = 0; y = 1; break;
      case 5: x = 2; y = 1; break;
    }
 
    let position = new Point(
      (this.rectangle.x - Map.visual.offset.x) + (this.rectangle.width / 4 * (x + 1)),
      (this.rectangle.y - Map.visual.offset.y) + (this.rectangle.height / 4 * (y + 1)))
      
    return position
  }
  
  InitializeSvg(id, rectangle)
  {
    this.svg = 
    {
      group : draw.group(),
      space : draw.rect(rectangle.width, rectangle.height),
      text  : draw.text('')
    }

    this.svg.group
      .translate(rectangle.x, rectangle.y)

    this.svg.space
      .stroke(this.scoringTrack.style.stroke)
      .fill(id % 5 != 0 ? this.scoringTrack.style.normalSpaceFill  : this.scoringTrack.style.specialSpaceFill)
      .addTo(this.svg.group)
      
    let leading = this.scoringTrack.style.normalSpaceFontLeading
    if (id % 5 == 0)
    {
      if (id == 0)
      {
        leading = this.scoringTrack.style.firstSpaceFontLeading
      }
      else
      {
        leading = this.scoringTrack.style.specialSpaceFontLeading
      }
    }
    this.svg.text
      .text((id).toString())
      .translate(rectangle.width / 2, 0)
      .addClass('no-events')
      .font(this.scoringTrack.style.font)
      .fill({color: this.scoringTrack.style.spaceFontColor})
      .font({size: (id % 5 != 0 ? this.scoringTrack.style.normalSpaceFontSize : this.scoringTrack.style.specialSpaceFontSize)})
      .font({leading: leading})
      
      .addTo(this.svg.group)
  }

  toString() 
  {
    return `Visual of ${this.region.toString()}`;
  }
}