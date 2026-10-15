const REVIEWS = [
  {
    text: "I found Apocalypse Coffee Roasters by accident driving down US1. Best accident ever. I have enjoyed all the flavors I have bought there, right now Armageddon is my #1. I love being able to have the coffee delivered, but the shop is so much fun, I just go there for the enjoyment.",
    author: "Sharon D.",
  },
  {
    text: "I am a huge fan of what these guys are doing. The quality of their beans is consistently outstanding and the freshness is unbeatable. I've explored their full variety, and although I've enjoyed every single one, The Bomb, The Armageddon and The Antidote really stand out.",
    author: "Ivan R.",
  },
  {
    text: "Absolutely love this coffee. Can't start my mornings correctly without it.",
    author: "Cori S.",
  },
  {
    text: "Picked up this coffee and I don't think I'll ever go back to your granddad's coffee. This is the stuff you've been searching for your entire life.",
    author: "Frank A.",
  },
  {
    text: "I visit this coffee shop when I visit my sister in Florida and I love it so much that I buy their beans and get it shipped to PA!",
    author: "Kaylee S.R.",
  },
  {
    text: "This is the best coffee I have ever had. I first tried it on vacation in January, brought some home and have ordered it through the mail twice since returning home.",
    author: "Barbara M.",
  },
  {
    text: "Don't know how but my wife found Apocalypse Coffee and got me a bunch for Xmas. I loved it and now I buy it as my regular coffee. It's hard to find good organic coffee and Apocalypse is great coffee that also happens to be organic.",
    author: "Matt B.",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1 text-ac" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 3.2l2.62 5.31 5.86.85-4.24 4.13 1 5.84L12 16.58l-5.24 2.75 1-5.84-4.24-4.13 5.86-.85z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <article className="relative w-[min(460px,78vw)] shrink-0 px-10 py-[42px] pb-[38px]">
      <span className="pill-shape" style={{ background: "#f0ede8" }} />
      <div className="relative z-10">
        <Stars />
        <p className="font-mono mb-6 line-clamp-6 text-[14px] leading-[1.55] text-ink">
          {text}
        </p>
        <p className="font-display text-[18px] tracking-[0.04em] text-ink">{author}</p>
      </div>
    </article>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section className="rvm relative bg-d1 pb-16 pt-10 text-cream sm:pb-20 sm:pt-14">
      <div className="mb-8 px-5 text-center sm:mb-10 sm:px-8">
        <div className="section-label mb-3 justify-center">Reviews</div>
        <h2 className="section-title text-[clamp(36px,4.5vw,64px)] leading-none">
          Tasted and Approved
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="reviews-track px-4">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} {...review} />
          ))}
        </div>
      </div>

      <p className="font-display mt-10 px-5 text-center text-[clamp(18px,2.2vw,28px)] tracking-[0.04em] text-cream">
        And plenty of others{" "}
        <span className="scribble-underline">say the same thing</span>
      </p>
    </section>
  );
}
