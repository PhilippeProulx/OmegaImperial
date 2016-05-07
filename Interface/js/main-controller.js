class NationId extends Enum {} NationId.initEnum( 
  ['GreatBritain', 'AustriaHungary', 'Italy', 
  'France', 'GermanEmpire', 'Russia', 
  'Neutral', 'Sea']);
//TODO: Nations should include only the 6 nations of the game, neutral and sea should be RegionType (Neutral, Sea, Impassable, Nation)

class RegionId extends Enum {} RegionId.initEnum(
  ['Berlin', 'Cologne', 'Hamburg', 'Munich', 'Gbansk',
   'Paris', 'Dijon', 'Brest', 'Marseille', 'Bordeaux',
   'StPetersburg',
   'Holland', 'Belgium', 'Spain', 'Morocco',
   'BlackSea']);
   
class PieceType extends Enum {} PieceType.initEnum(
  ['Flag', 'Army', 'Factory', 'Fleet', 'Marker']);
  
class MainController
{
  constructor() 
  {
  
  }
  
  CreateGame()
  {
    this.game = new Game()
  }
  
  BuildFactory(region)
  {
    //TODO: process buy stuff here
    PlaceFactory(region)
  }
  
  PlaceFactory(region)
  {
    new Piece(PieceType.Factory, region.nation).Move(region)
  }
  
  DestroyFactory(region)
  {
    let factory = region.slots.find(piece => piece.type == PieceType.Factory)
    if (typeof(factory) != 'undefined')
    {
      factory.Destroy()
    }
  }
  
  ProduceUnit(unitType, region)
  {
    return new Piece(unitType, region.nation).Move(region).id
  }
  
  MoveUnit(unitId, region)
  {
    Piece.all[unitId].Move(region)
  }
  
  DestroyUnit(unitId)
  {
    let unit = Piece.all[unitId]
    if (typeof(unit) != 'undefined')
    {
      unit.Destroy()
    }
  }
  
  SetPoints(nation, points)
  {
    this.game.scoringTrack.SetPoints(nation, points)
  }
  
  SetTaxLevel(nation, level)
  {
    this.game.taxChart.SetTaxLevel(nation, level)
  }
  
}