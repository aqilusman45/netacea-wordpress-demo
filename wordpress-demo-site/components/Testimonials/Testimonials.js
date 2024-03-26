export const Testimonials = ({ reviews }) => {
  <div>
    {reviews?.map((node, i) => {
      console.log(node, "node");
      return (
        <div key={i}>
          <p className="text-black">{node.post_content}</p>
        </div>
      );
    })}
  </div>;
};
