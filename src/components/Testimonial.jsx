import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

function TestimonyBox({
  avaPic,
  testimony,
  fullName,
  profession,
  customClass,
}) {
  return (
    <>
      <div
        className={`flex flex-col justify-left items-left bg-black rounded-xl p-6 h-full lg:h-50 lg:w-full ${customClass} overflow-hidden`}
      >
        <Typography variant="paragraph" className="text-sm text-white">
          {testimony}
        </Typography>

        <div className="flex flex-row gap-4">
          <img src={avaPic} />
          <Typography variant="small" className="text-sm text-white">
            {fullName}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default function Testimonial() {
  return (
    <section className="py-10 mx-auto my-8">
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
      </div>
      <div className="flex flex-row gap-4 w-full h-[20vh]  py-4">
        <TestimonyBox
          testimony="Hahaha indonesia oh indonesia"
          fullName="Rony Sianturi"
        />
        <TestimonyBox />
        <TestimonyBox />
      </div>
    </section>
  );
}
