import { useHistory } from "react-router-dom";

const LoginProses = () => {
  window.location.reload();
  let history = useHistory();
  history.push("/");
  return null
};

export default LoginProses;
