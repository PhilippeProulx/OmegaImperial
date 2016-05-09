var draw;

class Map
{
  constructor() 
  {
    draw = SVG('board').size(1660, 1120)
  
    this.InitializeRegions()
  }  

  InitializeRegions()
  {
    for (const region of RegionId.enumValues) 
    {
      new Region(region)
    }
  }
}

Map.visual =
{
  offset: {x: -20, y: 60}
}