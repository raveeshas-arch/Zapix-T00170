import { useState, useRef, useEffect } from 'react';

const faqItems = [
  {
    q: 'What is Zapix?',
    a: 'Zapix is a smart utility token used for fast digital payments, rewards, and accessing special features in digital platforms like comics and other services.',
  },
  {
    q: 'How do I use Zapix?',
    a: 'You can use Zapix tokens on supported platforms for purchases, accessing premium content, and earning loyalty rewards.',
  },
  {
    q: 'Where can I buy Zapix?',
    a: 'Zapix is available on select crypto exchanges. Always check the official site for the updated list of exchanges.',
  },
  {
    q: 'Is Zapix safe to use?',
    a: 'Yes. The platform uses encryption and secure wallet protocols. Keep your private keys safe and enable 2FA for additional protection.',
  },
  {
    q: 'Can I store Zapix in any wallet?',
    a: 'Zapix is a smart utility token used for fast digital payments, rewards, and accessing special features in digital platforms like comics and other services.',
  },
  {
    q: 'How does Zapix support creators?',
    a: 'Zapix is a smart utility token used for fast digital payments, rewards, and accessing special features in digital platforms like comics and other services.',
  },
];

export default function ConnectedFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const toggle = (idx: number) => setOpen(open === idx ? null : idx);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='faq' className="scroll-mt-[150px] flex lg:min-h-[560px] max-w-[878px] flex-col overflow-y-hidden mx-auto px-4 md:px-0">
      <div className="flex flex-1 flex-col lg:gap-[24px] gap-[10px] overflow-y-auto">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (faqRefs.current[idx] = el)}
            data-index={idx}
            className={`rounded-[16px] border border-[#636363] p-[16px] transform transition-all duration-700 ease-out
              ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: visibleItems.includes(idx) ? `${idx * 100}ms` : '0ms',
            }}
          >
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => toggle(idx)}
            >
              <div className="border-l-[3px] border-white">
                <div className="ml-[24px] font-sans lg:text-[24px] text-[16px] leading-[24px] lg:leading-[32px] font-normal">
                  {item.q}
                </div>
              </div>

              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${open === idx ? 'mt-3 max-h-40' : 'max-h-0'}`}
            >
              <p className="text-normal font-sans text-[14px] leading-[20px] text-[#FFFFFF]">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
