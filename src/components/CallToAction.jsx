import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function CallToAction() {
  return (
    <section className="h-[20vh]">
      <Card shadow={false} className="lg:min-h-[10vh] px-6 py-4 bg-primeColor">
        <CardBody
          shadow={false}
          className="flex flex-row items-center justify-between"
        >
          <div className="flex flex-col">
            <Typography variant="h3" color="white" className="font-bold">
              Get the protection now!
            </Typography>
            <Typography variant="paragraph" color="white" className="font-thin">
              Prevention is the best solution
            </Typography>
          </div>

          <Button
            ripple={true}
            className="bg-subColor text-textColor font-extrabold !px-8 py-4 rounded-[50px]"
          >
            Get Started
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
