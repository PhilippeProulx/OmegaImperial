$(document).ready(function() 
{
  $('#svg').svg();
  var svg = $('#svg').svg('get'); 
  var g2 = svg.group(null);
  
	$('area').each(function()
  {
		var s = $(this).attr('coords');
		var t = s.split(',');
		var s2 = 'M' + t[0] + ' ' + t[1];
    
		for (var i = 2; i < t.length; i++)
    {
			s2 += ' ' + (i % 2 == 0 ? 'L' : '') + t[i];
		}
    
		s2 += ' Z';
    
		var g = svg.group(null);
    
		var p1 = svg.path(g, s2, {fill: '#ff0', fillOpacity: .1, stroke: '#000', strokeWidth: 3});
		p1.setAttribute('stroke-linejoin', 'round');

		front = p1;
	});

  $('path').mouseover(function()
  {
    this.setAttribute('stroke', '#D90000');
    this.setAttribute('stroke-width', 5);
    this.setAttribute('fill-opacity', .3);

    MoveToTop(this.parentNode);
  });
		
  $('path').mouseout(function()
  {
    this.setAttribute('stroke', '#000');
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
   var tmp = elem1.cloneNode(true);
   parent.replaceChild(tmp, elem2);
   parent.replaceChild(elem2, elem1);
}