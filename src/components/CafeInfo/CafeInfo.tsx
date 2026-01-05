import CSS from "./CafeInfo.module.css";

const CafeInfo = () => (
  <div className={CSS.container}>
    <h1 className={CSS.title}>Sip Happens Café</h1>
    <p className={CSS.description}>
      Please rate our service by selecting one of the options below.
    </p>
  </div>
);
export default CafeInfo;
