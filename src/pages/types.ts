export type FormFieldValues = {
  sku: string;
  name: string;
  stockLimit: string;
  version: string;
  retailPrice: string;
  description: string;
  howToUse: string;
  ingredients: string;
  productImages: Array<ProductImageType>;
  categoryId: string;
  brandId: string;
  isArchived: boolean;
  itemSold: string;
  height: string;
  width: string;
  length: string;
  weight: string;
};

export type TranslateFormFieldValues = {
  name: string;
  description: string;
  howToUse: string;
  ingredients: string;
};

export type ProductImageType = {
  url: string;
  description: string;
};
