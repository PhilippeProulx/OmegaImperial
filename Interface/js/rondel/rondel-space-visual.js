class RondelSpaceVisual 
{
  constructor(rondel) 
  {
    this.rondel = rondel
    let id = rondel.id

    this.InitializeSvg(id)
  }
  
  GetSlotPosition(id)
  {
    let x = 360;    let y = -5
    
    switch(id) 
    {
      case 1: x = 365; y = -35; break;
      case 2: x = 410; y = -15; break;
      case 3: x = 395; y = 10; break;
      case 4: x = 395; y = -40; break;
      case 5: x = 365; y = 25; break;
    }
    
    return this.RotatePoint(342, 80, x, y, this.rondel.id * (-360/8))
  }
  
  RotatePoint(cx, cy, x, y, angle) 
  {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return new Point(nx, ny);
  }
  
  InitializeSvg(id)
  {
    this.svg = 
    {
      group : draw.group(),
      space : draw.path(),
      name  : draw.text('')
    }

    this.svg.group
      .translate(Map.visual.offset.x, Map.visual.offset.y)
      .back()
      .rotate(360/8*id, 342, 80)
    
    this.svg.space
    .stroke(this.rondel.style.stroke)
      .plot(this.rondel.definition.section)
      .fill(this.rondel.style.spaceFill)
      .addTo(this.svg.group);
          
    this.svg.name
      .text(this.rondel.style.names[id])
      .translate(380, -12)
      .addClass('no-events')
      .font(this.rondel.style.font)
      .font({anchor: "middle"})
      .fill({color: this.rondel.style.spaceFontColor})
      .font({size: this.rondel.style.spaceFontSize})
      .rotate(-65 + ((id >= 4) ? 180 : 0))
      .addTo(this.svg.group)
  }

  toString() 
  {
    return `Visual of`;
  }
}