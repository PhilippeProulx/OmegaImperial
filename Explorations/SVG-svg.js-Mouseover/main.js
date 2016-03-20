var draw = SVG('board').size(300, 300);

var factory = draw.polygon('0,0 30,0 30,60 90,30 90,60 150,30 150,100 0,100').fill('#800000').stroke({aligment:'outside', linejoin:'round', color: '#c00000', width: 4 });

var factory2 = factory.clone();

factory.scale(0.5, 0.5).move(0, 0);
factory2.scale(0.5, 0.5).move(128, 128);

factory.mouseover(function()
{
  OnFactoryMouseover(this);
})

factory.mouseout(function()
{
  OnFactoryMouseout(this);
})

factory2.mouseover(function()
{
  OnFactoryMouseover(this);
})

factory2.mouseout(function()
{
  OnFactoryMouseout(this);
})

function OnFactoryMouseover(factory)
{
  factory.fill({color: '#ff0000'});
}

function OnFactoryMouseout(factory)
{
  factory.fill({color: '#800000'});
}