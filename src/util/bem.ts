import { namespace, mod, ele } from "../json/name.json";
import { type } from "./type";

type InputClass = (string | undefined | boolean)[];
export class BEM {
  block!: string;
  constructor(block: string) {
    this.block = block.startsWith(this.block) ? block : namespace + block;
  }
  private filter(i: any) {
    return type.string(i) && i.length;
  }
  private map = (i: any) => {
    return this.block + mod + i;
  };
  classes(...params: InputClass): string {
    return [this.block, ...params.filter(this.filter).map(this.map)].join(" ");
  }
  child(name: string) {
    return this.block + ele + name;
  }
  extend(name: string) {
    return new BEM(this.child(name));
  }
  displayName(component: any): void {
    component.displayName = this.block;
  }
}
