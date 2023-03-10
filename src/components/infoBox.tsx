import styles from "@/styles/InfoBox.module.css";

interface IInfoBoxProps {
  title: string;
  children: React.ReactNode;
  column?: boolean;
}

export default function InfoBox({ title, children, column }: IInfoBoxProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {column ? (
        <div
          className={styles.inputs}
          style={{
            display: "flex",
            gap: "25px",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className={styles.inputs}
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
