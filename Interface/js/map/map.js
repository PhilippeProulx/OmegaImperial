class Map
{
  constructor() 
  {
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