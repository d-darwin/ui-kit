export interface VueRouter {
  push: (route: string) => void;
  [k: string]: unknown;
}
