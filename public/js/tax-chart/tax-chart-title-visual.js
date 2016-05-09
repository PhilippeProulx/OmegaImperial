class PowerFactorVisual 
{
  constructor(startSpaceId, endSpaceId, factor, scoringTrack) 
  {
    this.scoringTrack = scoringTrack
    
    let smallWidth = (scoringTrack.definition.right - scoringTrack.definition.left) / (scoringTrack.definition.spaceCount - 2 + 2 * scoringTrack.definition.smallBigSpaceRatio)
    let bigWidth = smallWidth * scoringTrack.definition.smallBigSpaceRatio

    let rectangle = new Rectangle()
    
    rectangle.x = scoringTrack.definition.left + bigWidth + (startSpaceId - 1).clamp(0, scoringTrack.definition.spaceCount) * smallWidth
    
    rectangle.y = scoringTrack.definition.top
    rectangle.width = smallWidth * (endSpaceId - startSpaceId + 1) + (endSpaceId == scoringTrack.definition.spaceCount - 1 ? bigWidth - smallWidth : 0)
    rectangle.height = scoringTrack.definition.powerFactorHeight
    
    this.InitializeSvg('Credits X ' + factor, rectangle)
  }
  
  InitializeSvg(tata, rectangle)
  {
    this.svg = 
    {
      group : draw.group(),
      space : draw.rect(rectangle.width, rectangle.height),
      text  : draw.text(tata)
    }

    this.svg.group
      .translate(rectangle.x, rectangle.y)

    this.svg.space
      .stroke(this.scoringTrack.style.stroke)
      .fill(this.scoringTrack.style.powerFactorFill)
      .addTo(this.svg.group)
      
    this.svg.text
      .translate(rectangle.width/2, 0)
      .addClass('no-events')
      .font(this.scoringTrack.style.font)
      .fill({color: this.scoringTrack.style.powerFactorfontColor})
      .addTo(this.svg.group)
  }

  toString() 
  {
    return `Visual of ${this.region.toString()}`;
  }
}