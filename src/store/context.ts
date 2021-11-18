import { createContext } from "react";
import { IStore } from "./useStore";

export interface IContext {
  store: IStore
}

const defaultContext: IContext = {
  store: {
    movies: [],
    catalog: {categories: []}
  }
};

const context = createContext(defaultContext)

export default context;