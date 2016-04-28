class Game
{
  constructor() 
  {
    this.InitializeNations()
    this.map = new Map()
    this.scoringTrack = new ScoringTrack()
  }  

  InitializeNations()
  {
    for (const nation of NationId.enumValues) 
    {
      new Nation(nation)
    }
  }

  InitializeRegions()
  {
    for (const region of RegionId.enumValues) 
    {
      new Region(region)
    }
  }

  toString() 
  {
    return 'Game';
  }
}

