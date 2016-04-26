class NationId extends Enum {} NationId.initEnum(
  ['GreatBritain', 'AustriaHungary', 'Italy', 
  'France', 'GermanEmpire', 'Russia', 
  'Neutral', 'Sea']);

if (typeof Definition == 'undefined')
{
  var Definition = {}
}

Definition.nation = new Array()

Definition.nation[NationId.GreatBritain] =
{
  name : 'Great Britain'
}

Definition.nation[NationId.AustriaHungary] =
{
  name : 'Austria-Hungary'
}

Definition.nation[NationId.Italy] =
{
  name : 'Italy'
}

Definition.nation[NationId.France] =
{
  name : 'France'
}

Definition.nation[NationId.GermanEmpire] =
{
  name : 'German Empire'
}

Definition.nation[NationId.Russia] =
{
  name : 'Russia'
}

Definition.nation[NationId.Neutral] =
{
  name : 'Neutral'
}

Definition.nation[NationId.Sea] =
{
  name : 'Sea'
}