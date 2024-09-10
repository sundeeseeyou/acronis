import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function CallToAction() {
  return (
    <section className="flex flex-col justify-center items-center lg:w-full lg:py-0">
      <Card
        shadow={false}
        className="lg:min-h-[10vh] lg:w-full px-0 lg:px-6 lg:py-4 w-full bg-primeColor"
      >
        <CardBody className="flex flex-row items-center justify-between">
          <div className="flex flex-col lg:w-[80%]">
            <Typography
              variant="h3"
              color="white"
              className="font-bold text-[1rem] lg:text-4xl lg:mb-2"
            >
              Get the protection now!
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="font-thin lg:text-base text-[0.8rem]"
            >
              Prevention is the best solution
            </Typography>
          </div>

          <Button
            ripple={true}
            className="bg-subColor text-textColor lg:px-8 lg:py-4 py-2 px-4 rounded-lg"
          >
            <Typography
              className="font-medium lg:font-extrabold lg:text-base text-[8px]"
              as={"a"}
              href="https://devstaging.mybaticloud.com/index.php?rp=/store/acronis-cyber-protect-cloud"
            >
              GET STARTED
            </Typography>
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
