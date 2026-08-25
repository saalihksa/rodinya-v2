import { SectionTitle } from "./SectionTitle";

type Item = { title: string; price: string; desc: string };

export function MenuList({
  overline,
  heading,
  items,
}: {
  overline?: string;
  heading?: string;
  items: Item[];
}) {
  return (
    <div>
      {overline && heading ? (
        <SectionTitle overline={overline} title={heading} as="h4" size="md" />
      ) : null}
      <ul className={`${overline && heading ? "mt-10" : "mt-0"} space-y-9`}>
        {items.map((item, i) => (
          <li key={`${item.title}-${i}`}>
            <div className="flex flex-wrap items-end gap-2 sm:flex-nowrap sm:gap-3">
              <h4 className="min-w-0 pb-px font-[family-name:var(--font-display)] text-[14px] font-semibold uppercase tracking-[0.08em] text-ink sm:shrink-0 sm:tracking-[0.1em]">
                {item.title}
              </h4>
              <span className="mb-[7px] h-[5px] min-w-[24px] flex-1 border-y border-sunflower/45" />
              <span className="shrink-0 pb-px font-[family-name:var(--font-display)] text-[15px] text-sunflower-brown">
                {item.price}
              </span>
            </div>
            <p className="mt-2 text-[14px] font-medium leading-6 text-mink">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
