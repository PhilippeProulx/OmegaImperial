$(document).ready(function() 
{
  $('path').mouseover(function()
  {
    this.setAttribute('stroke', '#d90000');
    this.setAttribute('stroke-width', 5);
    this.setAttribute('fill-opacity', .3);

    MoveToTop(this.parentNode);
  });

  $('path').mouseout(function(){
      this.setAttribute('stroke', '#000000');
      this.setAttribute('stroke-width', 3);
      this.setAttribute('fill-opacity', .1);
  });
});

function MoveToTop(svgNode)
{
   svgNode.parentNode.appendChild(svgNode);
}

function MoveToBottom(svgNode)
{
   svgNode.parentNode.insertBefore(svgNode, svgNode.parentNode.firstChild);
}

function zSwap(parent, elem1, elem2)
{
   var tmp = elem1.cloneNode( true );
   parent.replaceChild( tmp, elem2 );
   parent.replaceChild( elem2, elem1 );
}