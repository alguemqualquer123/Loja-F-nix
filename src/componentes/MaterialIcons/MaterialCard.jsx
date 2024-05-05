import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const MaterialCard = ({ src,Title,Text, Footer,className }) => {
  return (
    <Card className="w-96  transition-all duration-1000 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-black">
      <CardHeader
        floated={false}
        shadow={true}
        className="h-80 flex justify-center items-center scale-[1]"
      >
        <iframe
          src={src}
          frameborder="0"
          className={`${className ? className : 'w-[12rem] h-[19.5rem] flex justify-center items-center'}`}
        />
      </CardHeader>
      <CardBody className="text-center ">
        <Typography variant="h4" color="blue-gray" className="mb-2">
         {Title}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="text-black font-normal" textGradient>
         {Text}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
         {Footer}
        </Typography>
        <button className="text-white border-none mt-10 hover:shadow hover:shadow-black  transition-all duration-500" onClick={() => window.open(`${src}`)}>Interagir</button>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
