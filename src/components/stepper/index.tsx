import { SellEase } from "assets/icons";
import React from "react";
import { StepListing } from "./stepListing";

export const Stepper: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex">
        <StepListing
          title="Step 1: Register yourself and List your products"
          listItems={[
            "Register your business for free and create a product catalogue",
            "Sell under your own private label or sell an existing brand",
            "Get self-serve training",
            "Order Packaging material from our website to start selling",
          ]}
        />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            1
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <SellEase className="w-20" />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center justify-center w-1/2">
          <SellEase className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            2
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <StepListing
          title="Step 2: Register yourself and List your products"
          listItems={[
            "Get your documentation & cataloging done with ease from our Professional Services network across India",
            "Increase your product visibility with high-quality product photo-shoot by our Partnered Photographers",
          ]}
        />
      </div>
      <div className="flex">
        <StepListing
          title="Step 3: Register yourself and List your products"
          listItems={[
            "Once listed, your products will be available to millions of users across India",
            "Get orders and manage your online business via our Seller Panel and Seller Zone Mobile App",
          ]}
        />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            3
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <SellEase className="w-20" />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-start justify-center w-1/2">
          <SellEase className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            4
          </div>
        </div>
        <StepListing
          title="Step 4: Register yourself and List your products"
          listItems={[
            "Receive quick and hassle-free payments in your account once your orders are fulfilled",
            "Expand your business with low interest & collateral-free loans",
          ]}
        />
      </div>
    </div>
  );
};
