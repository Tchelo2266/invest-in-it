export class Ativos {
  public id: number;
  public tag: string;
  public preco: number;
  public quantidade: number;

  constructor(id?: number, tag?: string, preco?: number, quantidade?: number) {
      
    this.id = id? id : 0;
    this.tag = tag? tag: '';
    this.preco = preco? preco : 0;
    this.quantidade = quantidade? quantidade : 0;
    
  }

}