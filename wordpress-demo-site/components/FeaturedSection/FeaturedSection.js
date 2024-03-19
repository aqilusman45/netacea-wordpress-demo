import { FeaturedCard } from "components/FeaturedCard";

export const FeaturedSection = (props) => {
  const { heading, card } = props;
  const data = [];
  for (let i = 0; i < card; i++) {
    const imageKey = `card_${i}_image`;
    const buttonKey = `card_${i}_button`;
    const titleKey = `card_${i}_title`;
    const descriptionKey = `card_${i}_description`;
    data.push({
      image: props[imageKey],
      button: props[buttonKey],
      title: props[titleKey],
      description: props[descriptionKey],
    });
  }

  return (
    <div className="mx-auto max-w-default px-4 my-20 lg:px-6">
      <div className="featured-card-container-white relative w-full rounded-bl bg-white px-4 pb-20  lg:px-20 lg:pb-120">
        <div className="featured-section-form-line mb-10 h-[1px] w-full lg:hidden"></div>
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:gap-10">
          <h3 className="text-[40px] text-[#001831]">{heading}</h3>
        </div>
        <div
          className={
            "relative mt-10 grid h-auto gap-6 transition-all duration-400 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }
        >
          {data.map((node, index) => {
            console.log(node, "node");
            return <FeaturedCard key={index} {...node} />;
          })}
        </div>
        {/* <Button
          label={state ? "Hide list" : "Show full list"}
          variant="text-link"
          type="button"
          otherClasses="w-full text-center mb-10 lg:hidden !justify-center mt-6"
          onClick={() => setState(!state)}
        />
        <Button {...button} otherClasses="lg:hidden !justify-center w-full" /> */}
      </div>
    </div>
  );
};
