import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type item = {
    id: number;
    name: string;
};

interface IProductData {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: item;
    categories: Array<item>;
    implementationEffortText: null;
    investmentEffort: string;
    trl: item;
    video: string;
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        sex: number;
        profilePicture: string;
        position: string;
    };
    company: {
        name: string;
        logo: string;
        address: {
            id: null;
            country: {
                name: string;
                region: null;
            };
            state: null;
            city: {
                name: string;
                countryId: null;
                stateId: null;
            };
            street: string;
            house: string;
            zipCode: string;
            longitude: string;
            latitude: string;
            fallbackString: null;
            cityRegion: null;
        };
    };
    businessModels: Array<item>;
}

export type ParsedProduct = {
    productName: string;
    productType: string;
    productImage: string;
    productDescription: string;
    categories: Array<item>;
    businessModels: Array<item>;
    investmentEffort: string;
    trl: string;
    video: string;
    user: {
        [details: string]: string;
    };
    company: {
        [detail: string]: string;
    };
};

export interface TRL {
    id: string;
    name: string;
    description: null;
}




const getParsedProduct = (data: IProductData): ParsedProduct => ({
    productName: data.name,
    productType: data.type.name,
    productImage: data.picture,
    productDescription: data.description,
    categories: data.categories,
    businessModels: data.businessModels,
    investmentEffort: data.investmentEffort,
    trl: data.trl.name,
    video: data.video,
    user: {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        profilePicture: data.user.profilePicture,
    },
    company: {
        name: data.company.name,
        house: data.company.address.house,
        street: data.company.address.street,
        city: data.company.address.city.name,
        zipcode: data.company.address.zipCode,
        country: data.company.address.country.name

    },
});

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api-test.innoloft.com/" }),
    tagTypes: ["Product", "TRL"],
    endpoints: builder => ({
        getProduct: builder.query<ParsedProduct, void>({
            query: () => ({ url: "product/6781/", method: "get" }),
            transformResponse: getParsedProduct,
            providesTags: ["Product"],
        }),
        editProduct: builder.mutation({
            query: params => ({ url: "product/6781/", method: "put", params }),
            invalidatesTags: ["Product"],
        }),
        getTRL: builder.query<TRL[], void>({
            query: () => ({ url: "/trl/", method: "get" }),
            providesTags: ["TRL"],
        }),
    })
});

export const { useGetProductQuery, useEditProductMutation, useGetTRLQuery } = productAPI;