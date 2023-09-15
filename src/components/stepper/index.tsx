import { AmountCredit, Dispatch, Expert, RegisterProduct,Truck,Group,Rupee,Register } from "assets/icons";
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
            <Register />
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-center h-[350px] w-1/2">
          <RegisterProduct className="w-[150px] mt-10" />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-start justify-center h-[350px] w-1/2">
          <Expert className="w-[150px] " />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            <Group />
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <StepListing
          className="pl-10"
          title="Step 2:  Get support from professional service provider"
          listItems={[
            "Get your documentation & cataloging done with ease from our Professional Services network across India",
            "Increase your product visibility with high-quality product photo-shoot by our Partnered Photographers",
          ]}
        />
      </div>
      <div className="flex">
        <StepListing
          title="Step 3: Receive orders & Schedule a pickup"
          listItems={[
            "Once listed, your products will be available to millions of users across India",
            "Get orders and manage your online business via our Seller Panel and Seller Zone Mobile App",
          ]}
        />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
          <Truck  />
          </div>
          <div className="w-0.5 h-full bg-primary"></div>
        </div>
        <div className="flex items-start h-[350px] justify-center w-1/2">
          <Dispatch className="w-[150px] " />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-start h-[200px] justify-center w-1/2">
          <AmountCredit className="w-[150px]  " />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 text-primary rounded-full flex items-center justify-center border-2 border-primary">
            <Rupee />
          </div>
        </div>
        <StepListing
          className="pl-10"
          title="Step 4: Receive quick payment & grow your business"
          listItems={[
            "Receive quick and hassle-free payments in your account once your orders are fulfilled",
            "Expand your business with low interest & collateral-free loans",
          ]}
        />
      </div>
    </div>
  );
};
