//API anropet till API länken

import { IProduct } from "../models/IProducts";
import { get } from "./serviceBase";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async (): Promise<IProduct[]> => {
    return await get<IProduct[]>(BASE_URL);
}