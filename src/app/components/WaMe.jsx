import Image from "next/image";
import Link from "next/link";

const WaMe = () => {
  return (
    <div className="md:w-32 md:h-32 w-20 h-20 p-3 fixed bottom-0 right-0 hover:bottom-6 hover:right-6 cursor-pointer">
      <Link href="/">
        <Image
          width={500}
          height={500}
          alt="chat-me"
          src={"/chat.svg"}
          priority
          className="md:opacity-35 opacity-75 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105"
        />
      </Link>
    </div>
  );
};
export default WaMe;
