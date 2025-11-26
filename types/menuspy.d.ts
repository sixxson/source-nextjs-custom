declare module "menuspy" {
  export default class MenuSpy {
    constructor(element: HTMLElement, options?: {
      activeClass?: string;
      threshold?: number;
      enableLocationHash?: boolean;
      hashTimeout?: number;
      callback?: (currentItem: HTMLElement) => void;
    });
  }
}