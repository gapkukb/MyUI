import { namespace, mod, ele } from "../json/name.json";
type InputClass = (string | undefined | boolean)[];
export class BEM {
  block!: string;
  constructor(componentName: string) {
    this.block = componentName.startsWith(this.block) ? componentName : namespace + componentName;
  }
  private filter(i) {
    return i;
  }
  private em(classes: InputClass, symbol: string): string {
    return classes
      .filter((i) => i)
      .map((i) => this.block + symbol + i)
      .join(" ");
  }
  mod(...classes: InputClass): string {
    return this.em(classes, mod);
  }

  ele(...classes: InputClass): string {
    return this.em(classes, ele);
  }
  static(...classes: InputClass): string {
    return classes.filter((i) => i).join(" ");
  }
  extend(name: string) {
    return new BEM(this.block + ele + name);
  }

  displayName(component: any): void {
    component.displayName = this.block;
  }
}
