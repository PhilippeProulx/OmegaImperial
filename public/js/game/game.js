//TODO: improve game flow and pieces/map creation, Piece.All should go in Map class?
class Game
{
  constructor() 
  {
    this.InitializeNations()
    this.map = new Map()
    this.scoringTrack = new ScoringTrack()
    this.taxChart = new TaxChart()
    this.rondel = new Rondel()
    
    Game.all.push(this)
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

Game.all = new Array()

