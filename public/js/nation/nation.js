class Nation
{
  constructor(id) 
  {
    this.id = id
    this.style = Style.nation[id]
    this.definition = Definition.nation[id]
    
    Nation[id.name] = this
    Nation.all.push(this)
  }
}

Nation.all = new Array()