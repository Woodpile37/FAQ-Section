import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tokenPresaleFirstAns = [
  {
    id: "a",
    text: "Means of providing a stable “on-ramp” for individuals that reside in countries with illiquid and/or volatile fiat currencies.",
  },
  {
    id: "b",
    text: "Inclusive governance proxy that will determine how monies will be allocated from the charity wallet.",
  },
  {
    id: "c",
    text: "Reward to holders who have supported our vision through direct investment in our token as well as those who have earned them through traded liquidity.",
  },
  // {id:"d", text:"Inclusive governance proxy that will determine how monies will be allocated from the charity wallet."},
  // {id:"e", text:"Reward to holders who have supported our vision through direct investment in our token as well as those who have earned them through traded liquidity.",link:"https://www.aqex.io/static/files/AQEX_Whitepaper.pdf"},
];

const getSpecialCases = (text: any) => {
  if (text == "benefits")
    return (
      <ul className="list-outside list-disc pl-4">
        <li>
          Aquarius One membership plan is a discounted one year membership for
          INR 3,999 on the Aquarius India platform (regular pricing of annual
          membership is INR 9,990).
        </li>
        <li>It comes with a cyber insurance coverage worth INR 1,50,000</li>
        <li>It also provides access to the AQEX token pre-sale.</li>
      </ul>
    );
  if (text == "utility")
    return (
      <div className="text-base text-gray-900">
        <p className="text-base text-gray-900">
          The AQEX token is a functional utility token designed for the Aquarius
          platform. The token has been subject to smart contract auditing and is
          licensed by Labuan Financial Services Authorities (LFSA). The AQEX
          token serves our community in different ways as a/an:
        </p>

        <div className="pl-4 py-2">
          {tokenPresaleFirstAns.map((i) => (
            <p className="text-base text-gray-900">
              {" "}
              ({i.id}) {i.text}
            </p>
          ))}
        </div>
        <p className="text-base text-gray-900">
          AQEX tokens are not securities; AQEX tokens are sold as a digital
          asset, similar to downloadable software, digital music, and alike. It
          is not recommend to buy AQEX tokens for speculative investment
          purposes but rather, to participate in the Aquarius India platform.{" "}
          <a
            href="https://www.aqex.io/static/files/AQEX_Whitepaper.pdf"
            className="text-primary"
            target="_blank"
          >
            ( AQEX Whitepaper )
          </a>
        </p>
      </div>
    );

  if (text === "purchase")
    return (
      <p className="text-base text-gray-900">
        Users can purchase the AQEX token by registering on the Aquarius India
        platform. After successful completion of KYC verification and purchase
        of the Aquarius One membership on the Aquarius India platform, the AQEX
        token can then be purchased from the{" "}
        <a href="https://www.aqex.io" className="text-primary" target="_blank">
          Aquarius Global Platform{" "}
        </a>
        via a direct bank transfer.
      </p>
    );
  if (text === "different")
    return (
      <>
        <p className="text-base text-gray-900">
          Today's largest exchanges operate in one of two ways: by either
          deploying an 'open order book' trading methodology that charges
          transactional fees, but also allows users to place "limit" orders on
          the exchange while trading amongst themselves (user defined price and
          volume); or by deploying pre-determined spread prices between the buy
          and sell price that users can only trade at (buy or sell).{" "}
        </p>
        <p className="text-base text-gray-900 mt-2">
          Aquarius' unprecedented trading approach differs radically from its
          predecessors or peers. A true open order book powered by a proprietary
          order matching engine, is deployed, but without transaction fees. In
          its place, a minimal membership fee is assigned and equally shared
          within our trading community at large, allowing access to an unlimited
          trading size and volume at one low all-in monthly fee.{" "}
        </p>
      </>
    );

  if (text === "purchase_one_membership")
    return (
      <>
        <p className="text-base text-gray-900">
          To purchase the the user must follow these steps:
        </p>
        <div className="pl-4 py-2">
          <p className="text-base text-gray-900">
            {" "}
            a) Create an account on the{" "}
            <a href="https://www.aqex.in" className="text-primary" target="_blank">
              Aquarius India Platform{" "}
            </a>{" "}
            and complete the KYC process.
          </p>
          <p className="text-base text-gray-900 mt-1">
            b) Upon successful completion of the onboarding formalities, opt for
            Aquarius One membership plan{" "}
          </p>
          <p className="text-base text-gray-900 mt-1">
            c) Proceed to do the payment via the direct bank transfer from the
            user's registered bank account to the Aquarius Exchange India bank
            account. Once the bank transfer is completed, the user is required
            to submit the proof of payment to Aquarius.
          </p>
          <p className="text-base text-gray-900 mt-1">
            d) Upon successful verification, a payment acknowledgment receipt
            will be sent to the user's registered email address.
          </p>
        </div>
      </>
    );
  return <p className="text-base text-gray-900">{text}</p>;
};

export default function SingleFaq({ faqs }: any) {
  return (
    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faqs.map((faq: any) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-900">
                    <span className="font-bold text-black">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? "-rotate-180" : "rotate-0",
                          "h-6 w-6 transform"
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  {getSpecialCases(faq.answer)}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
