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
    
    return this.GetSlotPosition(i);
  }
  
  UnassignPieceFromSlot(piece)
  {
    let slotsId = this.slots.findIndex(slot => slot == piece)
    this.slots[slotsId] = null
  }
  
  toString() 
  {
    return 'Container';
  }
}