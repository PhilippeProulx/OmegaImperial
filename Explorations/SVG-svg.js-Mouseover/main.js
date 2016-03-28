var draw = SVG('board').size(300, 300);

var factories = draw.set();

for (i = 0; i < 5; i++) 
{
    factories.add(draw.polygon(''));
}

factories.each(function(i) 
{
  this.plot('0,0 30,0 30,60 90,30 90,60 150,30 150,100 0,100')
    .fill('#800000')
    .stroke({aligment:'outside', linejoin:'round', color: '#c00000', width: 4 })
    .scale(0.5, 0.5)
    .move(i * 64, i * 128)
    .mouseover(function()
    {
      OnFactoryMouseover(this);
    })
    .mouseout(function()
    {
      OnFactoryMouseout(this);
    });
})

function OnFactoryMouseover(factory)
{
  factory.fill({color: '#ff0000'});
}

function OnFactoryMouseout(factory)
{
  factory.fill({color: '#800000'});
}