import { useGetConfigQuery } from "api/configAPI";
import { ParsedProduct, TRL, useGetProductQuery, useGetTRLQuery } from "api/productAPI";
import { ReactNode, createContext } from "react";

type DataContext = {
    mainColor: string,
    hasUserSection: string,
    trlOptions: TRL[]
    product: ParsedProduct
}

type Props = {
    children: ReactNode,
}

export const DataContext = createContext({} as DataContext);

export default function DataProvider({ children }: Props) {
    const appID: number = import.meta.env.VITE_REACT_APP_ID ?? 1;
    const { data: config } = useGetConfigQuery(appID);
    const { data: trlOptions } = useGetTRLQuery();
    const { data: product, isLoading, isError, } = useGetProductQuery();


    if (!product || isLoading || !config || !trlOptions) return <h3>Loading...</h3>
    if (isError) return <h3>Something went wrong try refreshing the page...</h3>

    let mainColor = config.mainColor;
    let hasUserSection = config.hasUserSection ? "block" : "hidden";

    return (
        <DataContext.Provider value={{ mainColor, hasUserSection, product, trlOptions }}>
            {children}
        </DataContext.Provider>
    )
} 