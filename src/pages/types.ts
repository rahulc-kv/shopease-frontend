export type FormFieldValues = {
  sku: string;
  name: string;
  stockLimit: string;
  version: string;
  retailPrice: string;
  description: string;
  howToUse: string;
  ingredients: string;
  productImages: ProductImageType;
  categoryId: string;
  brandId: string;
  isArchived: string;
  itemSold: string;
  height: string;
  width: string;
  length: string;
  weight: string;
};

export type ProductImageType = {
  url: string;
  description: string;
};
