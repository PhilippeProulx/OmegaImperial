class Rectangle
{
  constructor(x = 0, y = 0, width = 0, height = 0) 
  {
    this.x = x
    this.y = y
    this.width = width
    this.height = y
  }
  
  get center()
  {
    return new Point(this.x + this.width / 2, this.y + this.height / 2)
  }
  
  toString()
  {
    return `Rectangle (${this.x}, ${this.y}, ${this.width}, ${this.height})`
  }
}