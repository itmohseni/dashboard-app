import Channels from "./components/Channels";
import Direct from "./components/Direct";
import { useInfo } from "../../../../../context/Info";
const Chat = () => {
  const { info, setInfo } = useInfo();
  const checker = () => {
    switch (info.chatId) {
      case 1:
        return;
      case 2:
        return;
      case 3:
        return <Channels />;
      case 4:
        return <Channels />;
      case 5:
        return <Channels />;
      case 6:
        return <Channels />;
      case 7:
        return <Channels />;
      case 8:
        return <Direct />;
      case 9:
        return <Direct />;
      case 10:
        return <Direct />;
      case 11:
        return <Direct />;
      case 12:
        return <Direct />;
      default:
        return;
    }
  };
  return checker();
};

export default Chat;
