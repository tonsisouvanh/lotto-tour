import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I book a tour?',
    answer:
      "Booking a tour is easy! Simply browse our available tours, select the one you're interested in, choose your preferred dates, and follow the booking process. You can book online through our website or contact our customer service team for assistance.",
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Our cancellation policy varies depending on the tour and how far in advance you cancel. Generally, cancellations made 30 days or more before the tour start date are eligible for a full refund. Cancellations made 15-29 days prior may receive a partial refund. We recommend purchasing travel insurance for added protection.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our website.',
  },
  {
    question: 'Are meals included in the tour price?',
    answer:
      "Meal inclusions vary by tour. Most of our tours include breakfast daily, and some include additional meals as specified in the itinerary. Check the 'What's Included' section of each tour for detailed information.",
  },
  {
    question: 'How physically demanding are your tours?',
    answer:
      "Our tours range from leisurely to adventurous. Each tour description includes an activity level rating to help you choose the right tour for your fitness level. If you have specific concerns, please contact us, and we'll be happy to provide more details.",
  },
  {
    question: 'Do I need travel insurance?',
    answer:
      'While travel insurance is not mandatory, we strongly recommend it. Travel insurance can cover you for trip cancellations, medical emergencies, lost luggage, and other unexpected events. We can suggest reputable travel insurance providers if needed.',
  },
];

export default function FAQsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
