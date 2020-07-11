import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./showToast.css";

const showToast = (text: String) => {
  toast.configure({
    toastClassName: "toast",
  });
  return toast(text);
};
export default showToast;
