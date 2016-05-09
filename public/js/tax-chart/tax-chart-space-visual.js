class TaxChartSpaceVisual 
{
  constructor(taxChart) 
  {
    this.taxChart = taxChart
    let id = taxChart.id
    
    let spaceHeight = (taxChart.definition.bottom - taxChart.definition.top) / taxChart.definition.spaceCount

    this.rectangle = new Rectangle()
    
    this.rectangle.x = taxChart.definition.left
    this.rectangle.y = taxChart.definition.top + spaceHeight * id
    this.rectangle.width = taxChart.definition.right - taxChart.definition.left
    this.rectangle.height = spaceHeight
    
    this.InitializeSvg(id, this.rectangle)
  }
  
  GetSlotPosition(id)
  {
    let x = 1
    let y = 0
    
    switch(id) 
    {
      case 1: x = 1; y = 1; break;
      case 2: x = 0; y = 0; break;
      case 3: x = 2; y = 0; break;
      case 4: x = 0; y = 1; break;
      case 5: x = 2; y = 1; break;
    }
 
    let position = new Point(
      (this.rectangle.x - Map.visual.offset.x) + (this.rectangle.width / 4 * (x + 1)),
      (this.rectangle.y - Map.visual.offset.y) + (this.rectangle.height / 3 * (y + 1)))
      
    return position
  }
  
  InitializeSvg(id, rectangle)
  {
    this.svg = 
    {
      group : draw.group(),
      space : draw.rect(rectangle.width, rectangle.height),
      tax  : draw.text(''),
      points  : draw.text('')
    }

    this.svg.group
      .translate(rectangle.x, rectangle.y)
      .back()

    this.svg.space
      .stroke(this.taxChart.style.stroke)
      .fill(this.taxChart.style.spaceFill)
      .addTo(this.svg.group)
      
    let taxLevel = this.taxChart.definition.spaceCount - id + 4
    if (id == this.taxChart.definition.spaceCount - 1)
    {
      taxLevel = "2 - 5"
    }
    else if (id == 0)
    {
      taxLevel = taxLevel + "+"
    }
    
    this.svg.tax
      .text(taxLevel.toString())
      .translate(4, 0)
      .addClass('no-events')
      .font(this.taxChart.style.font)
      .font({anchor: "left"})
      .fill({color: this.taxChart.style.spaceFontColor})
      .font({size: this.taxChart.style.spaceFontSize})
      .font({leading: this.taxChart.style.spaceFontLeading})
      .addTo(this.svg.group)
    
    this.svg.points
      .text("+" + (this.taxChart.definition.spaceCount - id - 1).toString())
      .translate(this.rectangle.width  - 22, 0)
      .addClass('no-events')
      .font(this.taxChart.style.font)
      .font({anchor: "right"})
      .fill({color: this.taxChart.style.spaceFontColor})
      .font({size: this.taxChart.style.spaceFontSize})
      .font({leading: this.taxChart.style.spaceFontLeading})
      .addTo(this.svg.group)
  }

  toString() 
  {
    return `Visual of`;
  }
}