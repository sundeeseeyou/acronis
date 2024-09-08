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
//           className="text-primeColor text-4xl lg:text-6xl font-black leading-none py-4"
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

import AvatarImage from "../assets/avatar.jpg";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card className="bg-white rounded-2xl p-4">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography className="lg:mb-10 mb-4 text-lg text-textColor font-bold">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-row-reverse gap-2 justify-start items-center">
        <div>
          <Typography variant="h5" className="text-primeColor">
            {client}
          </Typography>
          <Typography variant="paragraph" className="font-normal">
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="max-w-8" alt={client} />
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @Netflix",
    img: "/image/netflix.svg",
  },
  {
    title:
      "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer",
    img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
  },
  {
    title:
      "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer",
    img: "${AvatarImage}",
  },
];

export function Testimonial() {
  return (
    <section className="m py-10 mx-auto my-8">
      <div className="flex flex-col gap-4">
        <Typography
          variant="h2"
          className="text-primeColor text-4xl lg:text-6xl font-black leading-none py-4"
        >
          What they say
        </Typography>
        <Typography className="font-normal w-[60vw]">
          This is the paragraph where you can write more details about your
          product. Keep your user engaged by providing meaningful information.
          Add a button if you want the user to see more. We are here to make
          life better.
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
