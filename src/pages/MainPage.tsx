import { NoCost, ONDCNetwork, Person, SellerSite } from "assets/icons";
import { Cards, Footer, Header } from "components";
import { TypeAnimation } from "react-type-animation";
import { accordion } from "components/accordion/constants";
import React, { useState } from "react";

import Accordian from "components/accordion/Accordian";
import Chatbox from "components/chatbox";
import { Stepper } from "components/stepper";

const features = [
  {
    head: "Zero Subscription Cost",
    body: "No upfront payment to start selling online. Pay-as-you-go model where you pay only a nominal transaction fee per order with the seller app for ONDC Network.",
    icon: <NoCost height={60} width={60} />
  },
  {
    head: "Connected With ONDC Network",
    body: "Register your presence on the huge ONDC network that makes your products discoverable by customers all over India.",
    icon: <ONDCNetwork height={60} width={60} />
  },
  {
    head: "Own Seller Page",
    body: "Sell products from your dedicated seller page to get undivided customer attention. Make it easy for your loyal customers to buy from you with a unique QR code for your business.",
    icon: <SellerSite height={60} width={60} />
  }
]

const MainPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleFAQClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="100%">
      <Header />
      <div className="mt-[60px] h-[calc(100vh-60px)]">
        <div className="flex justify-between h-[500px] items-end bgGrad border border-gray-200">
          <div className="text-white font-sourceSans3 text-[30px] h-full flex flex-col max-w-[1200px] justify-center pl-14 font-semibold">
            Start selling your products on SellEase <br /> with zero selling
            cost
            <p className="text-base font-sourceSans3 py-5">
              Become a seller and gow your business in India
            </p>
            <TypeAnimation
              sequence={[
                "One India One Market", // Types 'One'
                1000, // Waits 1s
                "Your Store, Your Rules", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Unlock Your Selling Potential With SellEase", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </div>
          <Person height={500} width={500} />
        </div>

        <div className="flex w-full flex-col items-center text-[34px] mt-10 text-[#212529]">
          <div className="font-workSans">
            Why your business should be on SellEase
          </div>
          <div className="text-base font-workSans">
            Designed for the unique needs of merchants across India. Selling online was never this easy and quick
          </div>
          <div className="flex flex-row mt-10">
            {features.map((feature, index) => (
              <Cards
                key={index}
                feature={feature}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Stepper />
        </div>
        <div className="flex flex-col mb-10 items-center text-[#01859A] text-3xl font-semibold">Frequently Asked Questions</div>
        <div className="flex flex-col items-center my-10">
          {accordion.map((faq, index) => (
            <Accordian
              key={index}
              faq={faq}
              isOpen={index === openIndex}
              onClick={() => handleFAQClick(index)}
            />
          ))}
        </div>
      <Footer/>
      </div>
      <Chatbox />
    </div>
  );
};

export default MainPage;