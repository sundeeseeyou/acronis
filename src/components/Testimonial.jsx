import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

import User1 from "../assets/Acronis/user1.jpg";
import User2 from "../assets/Acronis/user2.jpg";
import User3 from "../assets/Acronis/user3.jpg";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card className="bg-white rounded-xl p-4 flex flex-col gap-4 justify-between">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="!rounded-none"
      >
        <Typography className="lg:text-lg text-sm text-textColor font-bold lg:mb-4">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-row gap-2 justify-start items-center">
        <img
          loading="lazy"
          src={img}
          className="w-[40px] h-[40px] lg:w-[50px] object-cover lg:h-[50px] rounded-full mr-2"
          alt={client}
        />
        <div>
          <Typography variant="h5" className="text-primeColor">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal sm:text-[0.8rem]"
          >
            {clientInfo}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "Acronis Cyber Protect Cloud transformed my data management! User-friendly and reliable backups give me peace of mind. Highly recommended!",
    client: "John Doe",
    clientInfo: "Software Engineer",
    img: User1,
  },
  {
    title:
      "Best backup solution I've used! Acronis Cyber Protect Cloud's seamless integration and one-dashboard management make it easy to protect my files.",
    client: "Jane Doe",
    clientInfo: "Graphic Designer",
    img: User2,
  },
  {
    title:
      "Using Acronis Cyber Protect Cloud has exceeded my expectations! The combination of data protection and cybersecurity is brilliant.",
    client: "Alex Smith",
    clientInfo: "Network Engineer",
    img: User3,
  },
];

export function Testimonial() {
  return (
    <section className="p-y:5 lg:py-10 mx-auto my-8 lg:my-8">
      <div className="flex flex-col gap-4">
        <Typography
          variant="h3"
          className="text-primeColor text-2xl lg:text-5xl font-black leading-none py-4"
        >
          What they say
        </Typography>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
