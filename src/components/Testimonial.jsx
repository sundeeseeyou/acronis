// import {
//   Typography,
//   Card,
//   CardBody,
//   CardFooter,
// } from "@material-tailwind/react";

// import avatarimg from "../assets/avatar.jpg";

// const data = [{}, {}, {}];

// //testimony content
// function TestimonyBox({
//   avaPic,
//   testimony,
//   fullName,
//   profession,
//   customClass,
// }) {
//   return (
//     <>
//       <Card
//         shadow={false}
//         className={`flex justify-left items-left w-full border-4 px-4 py-8 rounded-xl lg:min-h-10 lg:h-40 lg:w-full ${customClass} overflow-hidden`}
//       >
//         <CardBody className="flex flex-col">
//           <Typography variant="paragraph" className="text-sm text-textColor">
//             {testimony}
//           </Typography>
//           <CardFooter className="p-0 flex flex-row items-center">
//             <img src={avaPic} className="size-8 rounded-2xl mr-2" />
//             <Typography
//               variant="small"
//               className="text-md text-textColor font-bold"
//             >
//               {fullName}
//             </Typography>
//           </CardFooter>
//         </CardBody>
//       </Card>
//     </>
//   );
// }

// export default function Testimonial() {
//   return (
//     <section className="py-10 mx-auto my-8">
//       <div className="flex flex-col gap-4">
//         <Typography
//           variant="h2"
//           className="text-primeColor text-4xl lg:text-4xl font-black leading-none py-4"
//         >
//           What they say
//         </Typography>
//         <Typography className="font-normal w-[60vw]">
//           This is the paragraph where you can write more details about your
//           product. Keep your user engaged by providing meaningful information.
//           Add a button if you want the user to see more. We are here to make
//           life better.
//         </Typography>
//       </div>

//       <div
//         id="coba"
//         className="flex flex-row gap-4 w-full h-[30vh] lg:h-[30vh]"
//       >
//         <TestimonyBox
//           testimony="Hahaha indonesia oh indonesia"
//           fullName="Rony Sianturi"
//           avaPic={avatarimg}
//         />
//         <TestimonyBox />
//         <TestimonyBox />
//       </div>
//     </section>
//   );
// }

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
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography className="text-md text-textColor font-bold">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-row gap-2 justify-start items-center">
        <img
          src={img}
          className="lg:w-[50px] object-cover lg:h-[50px] rounded-full mr-2"
          alt={client}
        />
        <div>
          <Typography variant="h5" className="text-primeColor">
            {client}
          </Typography>
          <Typography variant="paragraph" className="font-normal">
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
    <section className="m py-10 mx-auto my-8">
      <div className="flex flex-col gap-4">
        <Typography
          variant="h3"
          className="text-primeColor text-4xl lg:text-5xl font-black leading-none py-4"
        >
          What they say
        </Typography>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
