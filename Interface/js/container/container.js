class Container
{
  constructor() 
  {
    this.slots = new Array()
  }
  
  //To be implemented by sub-class
  GetSlotPosition(id)
  {
    return new Point(0, 0)
  }
  
  AssignPieceToSlot(piece)
  {
    let i = 0
    for (; i < this.slots.length && this.slots[i] != null; i++) {}
    this.slots[i] = piece
    
    //this.RearrangeZIndex()
    piece.visual.svgGroup.front()
    return this.GetSlotPosition(i);
  }
  
  UnassignPieceFromSlot(piece)
  {
    let slotsId = this.slots.findIndex(slot => slot == piece)
    this.slots[slotsId] = null
  }
  
  // RearrangeZIndex()
  // {
    // for(let i = 1; i < this.slots.length; i++)
    // {
      // for(let j = i - 1; this.slots[i].visual.y < this.slots[j].visual.y && j >= 0; j--)
      // {
          // this.slots[i].visual.svgGroup.backward()
      // }
    // }
  // }

  toString() 
  {
    return 'Container';
  }
}