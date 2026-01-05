import CSS from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={CSS.container}>
      <h1 className={CSS.title}>Sip Happens Café</h1>
      <p className={CSS.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
