import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const MaterialCard = ({
  src,
  Title,
  Text,
  ImageClass,
  Footer,
  className,
  Image,
  ToogleImagem,
}) => {
  return (
    <Card
      className="w-[10rem] h-[16rem] lg:h-auto  lg:w-[24rem] transition-all duration-500  lg:hover:scale-[0.76] lg:scale-[0.75] scale-[0.75] hover:shadow-2xl hover:shadow-black/20 hover:bg-gray-900/20 bg-gray-500/20 hover:text-white"
      draggable={false}
    >
      <CardHeader
        floated={false}
        shadow={true}
        className="lg:h-60 h-20 overflow-y-hidden overflow-x-auto  flex justify-center items-center bg-gray-900/90"
      >
        {!ToogleImagem ? (
          <iframe
            src={src}
            frameborder="0"
            draggable={false}
            className={`${
              className
                ? className
                : "w-[12rem] h-[19.5rem] flex justify-center items-center"
            }`}
          />
        ) : (
          <img src={Image} alt="" draggable={false} className="w-1/2" />
        )}
      </CardHeader>
      <CardBody className="text-center ">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-[10px] lg:text-[20px]">
          {Title}
        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-black font-normal text-[10px] lg:text-[20px]"
          textGradient
        >
          {Text}
        </Typography>
        <Typography color="blue-gray" className="font-medium text-[10px] lg:text-[20px]" textGradient>
          {Footer}
        </Typography>
        <button
          className="bg-black rounded-lg p-2 font-bold text-white border-none lg:mt-10 mt-2 text-[10px] lg:text-[20px]"
          onClick={() => window.open(`${src}`)}
        >
          Interagir
        </button>
      </CardBody>
    </Card>
  );
};

export default MaterialCard;
