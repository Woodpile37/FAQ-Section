/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import SingleFaq from "./singleFaq";

const mainlink = () => {
  return<a href="www.aqex.in">Aquarius India Platform</a>;
}

const aquariusOneFaq = [
  {
    question: "What is the Aquarius One membership?",
    answer:
      "The Aquarius One membership is a discounted one year membership that allows unlimited access for the trading community to the Aquarius trading platform.",
  },
  {
    question: "What are the benefits of the Aquarius One membership?",
    answer: `benefits`,
  },
  {
    question: "How can I purchase the Aquarius One membership?",
    answer:
      `purchase_one_membership`,
  },
  {
    question: "Is the Aquarius One membership renewable?",
    answer:
      "This is a limited edition 'one year only' membership, available at a discounted price. On renewal, regular membership prices will be applicable.",
  },
  {
    question:
      "Can I purchase the Aquarius One membership after the Platform goes live?",
    answer:
      "This is a pre-launch limited edition exclusive membership which will be available only before the platform goes live. After the platform's launch, users can opt for regular membership plans, to enjoy the benefits of the Aquarius platform.",
  },
  {
    question:
      "When will the Aquarius One membership get activated after the purchase?",
    answer:
      "Aquarius One membership will be activated one month after the Aquarius India platform goes live. The first month's access on the platform will be complimentary for the Aquarius One members.",
  },
  {
    question:
      "What will be covered by the cyber insurance offered to all Aquarius One members?",
    answer:
      "The cyber insurance will provide coverage for the theft of funds including financial loss due to fraud online transactions, unauthorized access, spoofing, and phishing.",
  },
  {
    question: "When does the cyber insurance cover get activated?",
    answer:
      "The cyber insurance cover will be activated on the day the Aquarius India platform goes live. Users will get the policy documents on their registered email IDs from the insurance provider directly.",
  },
  {
    question:
      "Can the Aquarius One membership be cancelled after the purchase?",
    answer:
      "The Aquarius One membership can be cancelled at any time. Cancellation of the membership subscription ensures that the plan will not get renewed after the expiry date. The membership fee already paid, is non-refundable. Users will continue to enjoy the benefits of the plan for the entire period of its validity.",
  },
  {
    question: " I am a non-resident Indian. Can I subscribe to the Aquarius One membership?",
    answer:
      "The Aquarius One membership is open for all Indian nationals, including non-resident Indians. The requirements for membership include a valid Indian passport, PAN card as well as an Indian bank account to complete the payment process.",
  },
];

const aboutAquarius = [
  {
    question: "What is Aquarius Exchange?",
    answer:
      "Aquarius Exchange is the first of its kind, zero fee, institutional grade trading platform, that allows users to trade cryptocurrencies and more. Its incomparable approach makes it the first inclusive community-driven exchange adopting a monthly membership fee model. Aquarius enables its members access to an unlimited trading volume, at the absolute true fair price, all at one minimal all-in monthly fee.",
  },
  {
    question: "How is Aquarius Exchange different?",
    answer:"different"
  },
  {
    question: "When will Aquarius Exchange go live in India?",
    answer: " The Aquarius exchange will go live in India in the 4th quarter of 2022.",
  },
];

const tokenPresale = [
  {
    question: "What is the the AQEX token and its utility?",
    answer: "utility",
  },
  {
    question: "How can I purchase the AQEX token?",
    answer: "purchase",
  },
  { question: " Can I purchase the tokens from the global platform directly without purchasing the Aquarius One membership?", answer: "The purchase of the Aquarius One membership is required for Indian users to be able to participate in the AQEX token pre-sale process." },
  {
    question:
      "How can I pay for the AQEX token in USD?",
    answer:
      "The AQEX token can be paid for in USD via a direct wire transfer to Aquarius' AFT Labuan bank account. The user can utilize any of the available international wire transfer services to complete this payment. An international wire transfer done using online banking will generally remit the funds in INR and credit the beneficiary account (in this case AFT Labuan) in USD.",
  },
  {
    question: " What is the minimum purchase amount for the pre-sale of AQEX tokens?",
    answer:
      "The minimum purchase value is USD 1,000 up to a maximum amount of USD 50,000.",
  },
  {
    question:
      "When will the AQEX tokens be allocated to my account?",
    answer: "The user will receive a confirmation email from AFT Labuan with the AQEX token allocation information upon successful payment verification of the purchase of AQEX tokens. The tokens will be automatically allocated. The tokens will reflect in the account of the user after the Aquarius India platform goes live. The allocated AQEX tokens can not be sold, transferred or traded until the completion of a vesting period of 6 months from the date of purchase.",
  },
  {
    question:
      "Can I get the token allocated to my custodial wallet?",
    answer:
      "The AQEX tokens can only be allocated to the Aquarius wallet of the user, with a lock-in period of 6 months, from the date of purchase.",
  },
  {
    question: "When can I sell these tokens, if purchased now?",
    answer:
      "The user will be entitled to sell their AQEX token purchased during the pre-sale after 6 months from the date of purchase, in a phased-out manner. For example: A user owning 12,000 AQEX tokens purchased during the pre-sale, must wait for a 6 months vesting period after which, the user will be authorized to sell 2,000 AQEX tokens per month (12,000/6) . This restriction avoids liquidity issues on the first day after the vesting period passes.",
  },
  {
    question: "Can I get the token allocated to my custodial wallet?",
    answer:
      "The AQEX tokens can only be allocated to the Aquarius wallet of the user, with a lock-in period of 6 months, from the date of purchase.",
  },
  {
    question: "When can I sell these tokens, if purchased now?",
    answer:
      "The user will be entitled to sell their token after 6 months from the date of purchase, in a phased-out manner. For example: A user owning 12,000 AQEX tokens purchased during the pre-sale, must wait for a 6 months vesting period after which, the user is authorized to sell 2,000 AQEX tokens per month (12,000/6) . This restriction avoids liquidity issues on the first day after the vesting period passes.",
  },
];
export default function FAQ() {
  return (
    <div className="bg-faq bg-cover">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl tracking-tight font-bold text-black sm:text-5xl sm:tracking-tight mb-8">
          Frequently Asked Questions
        </h2>
        {/* <p className="text-center text-lg tracking-tight text-black sm:tracking-tight mb-16">
          Know more about the Aquarius One Membership
          </p> */}
        <Tab.Group as="div" className="max-w-3xl m-auto">
          <Tab.List className="w-full">
            <div className="border-b border-gray-200">
              {["About Aquarius", "Aquarius One", "Token Presale"].map((i) => (
                <Tab
                  key={i}
                  className={({ selected }) =>
                    `${
                      selected
                        ? "border-primary"
                        : "border-transparent text-black hover:border-sky-100"
                    } 
                  ' w-1/3 whitespace-nowrap font-semibold py-4 px-1 border-b-2 font-medium text-sm sm:text-base focus:ring-0 focus:outline-none focus:border-0'                    }`
                  }
                >
                  {i}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <SingleFaq faqs={aboutAquarius} />
            </Tab.Panel>
            <Tab.Panel>
              <SingleFaq faqs={aquariusOneFaq} />
            </Tab.Panel>
            <Tab.Panel>
              <SingleFaq faqs={tokenPresale} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <p className="text-center text-sm tracking-tight text-gray-500 sm:text-sm sm:tracking-tight mt-36 mx-20">
        Aqex Technologies India Pvt. Ltd. is the authorized broker of Aquarius Financial Technologies Ltd., for the purpose of the pre-sale of the AQEX token and reserves the right to change/modify any information, and communication made on the website as per the business requirements. The information mentioned on the website is purely for communication purposes and cannot be taken as a commitment on behalf of  Aqex Technologies India Pvt. Ltd. 
- Trading in cryptocurrencies is subject to market and legal risks. Prices in one country may differ from prices in other countries. Aquarius does not guarantee any returns. Use Aquarius' services at your own risk.

        </p>
      </div>
    </div>
  );
}
